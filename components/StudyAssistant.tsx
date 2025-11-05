import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessage } from '../services/geminiService';
import { UserIcon, PaperclipIcon, XCircleIcon, CopyIcon, CheckIcon } from './icons';
import MarkdownRenderer from './MarkdownRenderer';

// Helper to convert file to base64
const fileToBase64 = (file: File): Promise<{ mimeType: string; data: string }> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const result = reader.result as string;
            const mimeType = result.split(',')[0].split(':')[1].split(';')[0];
            const data = result.split(',')[1];
            resolve({ mimeType, data });
        };
        reader.onerror = (error) => reject(error);
    });
};

const AssistantMessage: React.FC<{ message: ChatMessage }> = ({ message }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(message.text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex items-start gap-3 justify-start animate-fadeInUp">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                <i className="fa-solid fa-robot text-xl text-white"></i>
            </div>
            <div className="group relative max-w-md lg:max-w-2xl p-3 px-4 rounded-2xl shadow-sm bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none">
                <MarkdownRenderer content={message.text} />
                <button
                    onClick={handleCopy}
                    className="absolute -top-2 -left-2 p-1.5 rounded-full bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    aria-label="نسخ النص"
                >
                    {copied ? <CheckIcon className="h-5 w-5 text-green-500" /> : <CopyIcon className="h-5 w-5" />}
                </button>
            </div>
        </div>
    );
};


const StudyAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { sender: 'assistant', text: 'أهلاً بك! أنا مساعدك الدراسي الرسمي. يمكنك سؤالي عن جدولك، طلب روابط الكتب، أو حتى إرسال صورة لسؤال لمساعدتك في حله.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<{ file: File; preview: string } | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
          const file = e.target.files[0];
          setImage({ file, preview: URL.createObjectURL(file) });
      }
      e.target.value = '';
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((input.trim() === '' && !image) || isLoading) return;

    const userMessage: ChatMessage = { 
        sender: 'user', 
        text: input, 
        image: image?.preview 
    };
    setMessages(prev => [...prev, userMessage]);
    
    setInput('');
    const imageToSend = image;
    setImage(null);
    setIsLoading(true);

    try {
      let imagePayload;
      if (imageToSend) {
          imagePayload = await fileToBase64(imageToSend.file);
      }
      
      const responseText = await sendMessage(input, imagePayload);
      const assistantMessage: ChatMessage = { sender: 'assistant', text: responseText };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      const errorMessage: ChatMessage = { sender: 'assistant', text: 'عفواً، حدث خطأ ما. يرجى المحاولة مرة أخرى.' };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  const TypingIndicator = () => (
    <div className="flex items-center space-x-2 space-x-reverse">
        <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse [animation-delay:0.2s]"></div>
        <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse [animation-delay:0.4s]"></div>
    </div>
  );

  return (
    <div className="flex flex-col h-[calc(100vh-10rem)] sm:h-[calc(100vh-12rem)]">
      <h1 className="text-3xl font-bold mb-4">المساعد الذكي</h1>
      <div className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg flex flex-col p-2 sm:p-4">
        <div className="flex-1 overflow-y-auto pr-2 space-y-4">
          {messages.map((msg, index) => (
            msg.sender === 'assistant' ? (
                <AssistantMessage key={index} message={msg} />
            ) : (
                <div key={index} className="flex items-start gap-3 justify-end animate-fadeInUp">
                    <div className={`max-w-md lg:max-w-2xl p-3 px-4 rounded-2xl shadow-sm bg-teal-600 text-white rounded-br-none`}>
                        {msg.image && (
                            <img src={msg.image} alt="إرسال المستخدم" className="rounded-lg mb-2 max-h-60" />
                        )}
                        {msg.text && <p className="whitespace-pre-wrap text-base">{msg.text}</p>}
                    </div>
                    <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <UserIcon className="h-6 w-6 text-gray-700 dark:text-gray-200" />
                    </div>
                </div>
            )
          ))}
          {isLoading && (
            <div className="flex items-start gap-3 justify-start animate-fadeInUp">
               <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <i className="fa-solid fa-robot text-xl text-white"></i>
                </div>
              <div className="p-3 px-4 rounded-2xl bg-gray-200 dark:bg-gray-700 rounded-bl-none shadow-sm">
                <TypingIndicator />
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            {image && (
                <div className="relative w-28 mb-3">
                    <img src={image.preview} alt="Preview" className="rounded-lg w-full" />
                    <button onClick={() => setImage(null)} className="absolute -top-2 -right-2 bg-gray-800/80 text-white rounded-full hover:bg-red-500 transition-colors">
                        <XCircleIcon className="h-7 w-7" />
                    </button>
                </div>
            )}
            <form onSubmit={handleSend} className="flex items-center gap-2 sm:gap-3">
              <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
              />
              <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isLoading}
                  className="p-3 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors disabled:opacity-50"
                  aria-label="إرفاق صورة"
              >
                  <PaperclipIcon className="h-6 w-6" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="اسأل عن أي شيء أو أرفق صورة..."
                disabled={isLoading}
                className="flex-1 p-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:border-teal-500 transition-all duration-300"
              />
              <button
                type="submit"
                disabled={isLoading || (input.trim() === '' && !image)}
                className="bg-teal-600 text-white font-bold py-3 px-4 sm:px-6 rounded-lg hover:bg-teal-700 transition-all duration-300 disabled:bg-teal-400 disabled:cursor-not-allowed shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                إرسال
              </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default StudyAssistant;