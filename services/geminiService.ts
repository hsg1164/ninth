import { GoogleGenAI, Chat, ContentPart } from "@google/genai";
import { schedulesByDivision } from '../data/schedule';
import { subjectResources, whatsappResource, supportResource } from '../data/resources';

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. The application will not be able to connect to Gemini API.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const generateAppContext = () => {
    let context = "### System Knowledge Base ###\n\n";

    context += "#### Educational Resources (Textbooks) ####\n";
    subjectResources.forEach(subj => {
        context += `- ${subj.subject}:\n`;
        subj.books.forEach(book => {
            context += `  - ${book.title}: ${book.link}\n`;
        });
    });
    context += "\n";

    context += "#### WhatsApp Groups ####\n";
    whatsappResource.links.forEach(link => {
        context += `- ${link.title}: ${link.link}\n`;
    });
    context += "\n";
    
    context += "#### Technical Support Links ####\n";
    supportResource.links.forEach(link => {
        context += `- ${link.title}: ${link.link}\n`;
    });
    context += "\n";

    context += "#### Class Schedule ####\n";
    context += "The schedule is detailed by division (أ, ب, ج, د, هـ) and days from Sunday to Thursday. Use the following JSON data to answer schedule-related questions:\n";
    context += JSON.stringify(schedulesByDivision);
    context += "\n\n";
    
    return context;
};

const appContext = generateAppContext();
const systemInstruction = `أنت مساعد دراسي ذكي ومتقدم لطلاب الصف التاسع في مدرسة خارجي اساسي عليا 25 ب. وظيفتك هي الإجابة على أسئلة الطلاب بدقة وتقديم المساعدة في دراستهم.
            
لديك الوصول الكامل إلى بيانات المنصة التعليمية. استخدم هذه البيانات كمرجع أساسي ودقيق لإجاباتك.

**قدراتك:**
1.  **الإجابة على الأسئلة العامة:** كن ودوداً ومساعداً.
2.  **استخدام بيانات المنصة:** أجب عن أسئلة تتعلق بالجدول الدراسي، روابط الكتب، مجموعات الواتساب، والدعم الفني بناءً على البيانات المتوفرة لديك.
3.  **تحليل الصور:** إذا أرسل الطالب صورة، قم بتحليلها وشرحها بطريقة تعليمية مفيدة. على سبيل المثال، إذا كانت صورة لسؤال رياضيات، اشرح خطوات الحل. إذا كانت صورة لنص، لخصه أو اشرح الكلمات الصعبة.
4.  **تنسيق الإجابات:** استخدم تنسيق الماركدوان البسيط. استخدم *نجمة واحدة* لتغميق النص، و **نجمتان** للنص المهم والأكبر حجمًا. عند ذكر روابط، قم بإدراجها مباشرة.

**قاعدة البيانات الخاصة بك:**
${appContext}`;

// Initialize the chat session once and export it
const assistantChat: Chat = ai.chats.create({
  model: 'gemini-2.5-flash',
  config: {
    systemInstruction: systemInstruction,
    temperature: 0.7,
    topP: 1,
    topK: 1,
  },
});

export const sendMessage = async (prompt: string, image?: { mimeType: string; data: string }): Promise<string> => {
  try {
    const parts: ContentPart[] = [];

    if (image) {
        parts.push({
            inlineData: {
                mimeType: image.mimeType,
                data: image.data,
            },
        });
    }

    // Always add the text prompt, even if it's empty
    parts.push({ text: prompt });

    const response = await assistantChat.sendMessage({ message: parts });
    
    return response.text;

  } catch (error) {
    console.error("Error sending message to Gemini API:", error);
    return "عذراً، حدث خطأ أثناء محاولة الحصول على إجابة. يرجى المحاولة مرة أخرى.";
  }
};
