import { ScheduleEntry } from '../types.ts';

export const divisions = ['أ', 'ب', 'ج', 'د', 'هـ'];

// Updated period times for afternoon schedule
export const periodTimes: { [key: string]: { start: string, end: string } } = {
  "الأولى": { start: "15:00", end: "15:40" },
  "الثانية": { start: "15:45", end: "16:25" },
  "الثالثة": { start: "16:30", end: "17:10" },
  "الرابعة": { start: "17:15", end: "17:55" },
};

type WeeklySchedule = { [key: string]: ScheduleEntry[] };

// --- LINKS ---
// English
const LINK_ENG_COMMON = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjMwMDllYzUtODNlZC00ODZiLWE2MGQtZDU3MDkyMjExNGM2%40thread.v2/0?context=%7b%22Tid%22%3a%22ef26273c-14df-4441-95f2-5753024b16ba%22%2c%22Oid%22%3a%22447e4c3b-fd42-41b6-b169-9cf549dc9d26%22%7d";
const LINK_ENG_D_E = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDNlM2Y3M2UtMzUzYS00NDJkLThkOGEtOGU3NzkzNTZhODAw%40thread.v2/0?context=%7b%22Tid%22%3a%22ef26273c-14df-4441-95f2-5753024b16ba%22%2c%22Oid%22%3a%2230076d13-a040-40ab-85a8-37278db9b4d3%22%7d";

// Math
const LINK_MATH_A_B = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YTcwNzEwOGItMzBiZC00YmUyLTkzZjktMzU5OTRjNjYyYTZl%40thread.v2/0?context=%7b%22Tid%22%3a%22ef26273c-14df-4441-95f2-5753024b16ba%22%2c%22Oid%22%3a%22ef00b590-0be5-4c9a-b203-e4e53fb3ed07%22%7d";
const LINK_MATH_E = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZWMzNWE4NjMtMzUxOS00ODg5LThiNGUtYzIwODM1MzJkODM1%40thread.v2/0?context=%7b%22Tid%22%3a%22ef26273c-14df-4441-95f2-5753024b16ba%22%2c%22Oid%22%3a%229d32dfde-891f-4b75-95bc-41717e7d9f2f%22%7d";
const LINK_MATH_C_D = "https://teams.microsoft.com/meet/3515613399672?p=AseLKeeVkZcOqfNPHu";

// Social Studies (Geography/History)
const LINK_SOCIAL_COMMON = "https://teams.microsoft.com/l/meetup-join/19%3ashDvAoeCTSJ8w3SCWtg9Y8FegdCeLVK7dhaJpS0lx8M1%40thread.tacv2/1759756984394?context=%7b%22Tid%22%3a%22ef26273c-14df-4441-95f2-5753024b16ba%22%2c%22Oid%22%3a%22af7f26c3-9960-41bc-a64b-995bc65a569f%22%7d";

// Islamic
const LINK_ISLAMIC_COMMON = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_YTZlNjUwZWQtOWEyMi00MDQ1LTg0OTAtNDUxYzQ1NDg3MmE2%40thread.v2/0?context=%7b%22Tid%22%3a%22ef26273c-14df-4441-95f2-5753024b16ba%22%2c%22Oid%22%3a%22f26ef534-d9b1-41a8-beb9-a4258eef8b25%22%7d";

// Science
const LINK_SCIENCE_COMMON = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzAxODFiN2EtZTY3MC00ODRlLTg3YjItNzE3MjhjYjU3ZmUw%40thread.v2/0?context=%7b%22Tid%22%3a%22ef26273c-14df-4441-95f2-5753024b16ba%22%2c%22Oid%22%3a%229af5cc77-f7e1-499c-b2d0-01f3a77870d8%22%7d";
const LINK_SCIENCE_A = "https://teams.microsoft.com/l/meetup-join/19%3adeooO8xCohcp6Qob79O2eHGOvxON8pPd5FZ1NRftYNA1%40thread.tacv2/1758109011109?context=%7b%22Tid%22%3a%22ef26273c-14df-4441-95f2-5753024b16ba%22%2c%22Oid%22%3a%2293f8e35d-b89b-417f-af67-6dda5556bf81%22%7d";

// Arabic
const LINK_ARABIC_A_B = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZTU0ZmI0NmYtMTI3YS00MGFhLWE1MzMtZTcyNDUzZTdiYWUy%40thread.v2/0?context=%7b%22Tid%22%3a%22ef26273c-14df-4441-95f2-5753024b16ba%22%2c%22Oid%22%3a%22c384e5b6-a1a3-42ee-bbf4-26d05983b806%22%7d";
const LINK_ARABIC_C_D_E = "https://teams.microsoft.com/meet/3740473414570?p=Ib3Q3wDzzS41o6YSNv";

// Technology
const LINK_TECH_A_B = "https://teams.microsoft.com/meet/3119022458892?p=fA5MC2WrsphUo5vTWU";
const LINK_TECH_C_D_E = "https://teams.microsoft.com/l/meetup-join/19%3ameeting_N2FjMzI0MmUtYzRlZS00YzQwLTg4MmYtMThhZWI5ZDY0ZWEx%40thread.v2/0?context=%7b%22Tid%22%3a%22ef26273c-14df-4441-95f2-5753024b16ba%22%2c%22Oid%22%3a%22e6d7425b-751d-49b7-a9ef-067c9b500c90%22%7d";

const EMPTY_SLOT = (period: string) => ({ period, name: "فراغ", link: null });

export const schedulesByDivision: { [key: string]: WeeklySchedule } = {
  'أ': {
    Sunday: [
      { period: "الأولى", name: "رياضيات", link: LINK_MATH_A_B },
      { period: "الثانية", name: "دراسات اجتماعية", link: LINK_SOCIAL_COMMON },
      { period: "الثالثة", name: "لغة إنجليزية", link: LINK_ENG_COMMON },
      { period: "الرابعة", name: "لغة عربية", link: LINK_ARABIC_A_B },
    ],
    Monday: [
      { period: "الأولى", name: "رياضيات", link: LINK_MATH_A_B },
      { period: "الثانية", name: "تربية إسلامية", link: LINK_ISLAMIC_COMMON },
      { period: "الثالثة", name: "لغة إنجليزية", link: LINK_ENG_COMMON },
      EMPTY_SLOT("الرابعة"),
    ],
    Tuesday: [
      { period: "الأولى", name: "علوم", link: LINK_SCIENCE_A },
      { period: "الثانية", name: "رياضيات", link: LINK_MATH_A_B },
      { period: "الثالثة", name: "لغة إنجليزية", link: LINK_ENG_COMMON },
      EMPTY_SLOT("الرابعة"),
    ],
    Wednesday: [
      { period: "الأولى", name: "لغة عربية", link: LINK_ARABIC_A_B },
      { period: "الثانية", name: "رياضيات", link: LINK_MATH_A_B },
      { period: "الثالثة", name: "تكنولوجيا", link: LINK_TECH_A_B },
      EMPTY_SLOT("الرابعة"),
    ],
    Thursday: [
      { period: "الأولى", name: "علوم", link: LINK_SCIENCE_A },
      { period: "الثانية", name: "لغة عربية", link: LINK_ARABIC_A_B },
      EMPTY_SLOT("الثالثة"), 
      EMPTY_SLOT("الرابعة"),
    ],
    Friday: [], Saturday: [],
  },
  'ب': {
    Sunday: [
      { period: "الأولى", name: "لغة إنجليزية", link: LINK_ENG_COMMON },
      { period: "الثانية", name: "رياضيات", link: LINK_MATH_A_B },
      { period: "الثالثة", name: "دراسات اجتماعية", link: LINK_SOCIAL_COMMON },
      EMPTY_SLOT("الرابعة"),
    ],
    Monday: [
      { period: "الأولى", name: "لغة عربية", link: LINK_ARABIC_A_B },
      { period: "الثانية", name: "لغة إنجليزية", link: LINK_ENG_COMMON },
      { period: "الثالثة", name: "رياضيات", link: LINK_MATH_A_B },
      EMPTY_SLOT("الرابعة"),
    ],
    Tuesday: [
      { period: "الأولى", name: "لغة إنجليزية", link: LINK_ENG_COMMON },
      { period: "الثانية", name: "تربية إسلامية", link: LINK_ISLAMIC_COMMON },
      { period: "الثالثة", name: "علوم", link: LINK_SCIENCE_COMMON },
      { period: "الرابعة", name: "رياضيات", link: LINK_MATH_A_B },
    ],
    Wednesday: [
      { period: "الأولى", name: "رياضيات", link: LINK_MATH_A_B },
      { period: "الثانية", name: "لغة عربية", link: LINK_ARABIC_A_B },
      { period: "الثالثة", name: "علوم", link: LINK_SCIENCE_COMMON },
      EMPTY_SLOT("الرابعة"),
    ],
    Thursday: [
      { period: "الأولى", name: "لغة عربية", link: LINK_ARABIC_A_B },
      { period: "الثانية", name: "تكنولوجيا", link: LINK_TECH_A_B },
      EMPTY_SLOT("الثالثة"), 
      EMPTY_SLOT("الرابعة"),
    ],
    Friday: [], Saturday: [],
  },
  'ج': {
    Sunday: [
      EMPTY_SLOT("الأولى"),
      { period: "الثانية", name: "لغة إنجليزية", link: LINK_ENG_COMMON },
      { period: "الثالثة", name: "تربية إسلامية", link: LINK_ISLAMIC_COMMON },
      { period: "الرابعة", name: "دراسات اجتماعية", link: LINK_SOCIAL_COMMON },
    ],
    Monday: [
      { period: "الأولى", name: "لغة إنجليزية", link: LINK_ENG_COMMON },
      { period: "الثانية", name: "رياضيات", link: LINK_MATH_C_D },
      { period: "الثالثة", name: "لغة عربية", link: LINK_ARABIC_C_D_E },
      EMPTY_SLOT("الرابعة"),
    ],
    Tuesday: [
      EMPTY_SLOT("الأولى"),
      { period: "الثانية", name: "لغة إنجليزية", link: LINK_ENG_COMMON },
      { period: "الثالثة", name: "لغة عربية", link: LINK_ARABIC_C_D_E },
      { period: "الرابعة", name: "رياضيات", link: LINK_MATH_C_D },
    ],
    Wednesday: [
      { period: "الأولى", name: "لغة عربية", link: LINK_ARABIC_C_D_E },
      { period: "الثانية", name: "علوم", link: LINK_SCIENCE_COMMON },
      { period: "الثالثة", name: "رياضيات", link: LINK_MATH_C_D },
      EMPTY_SLOT("الرابعة"),
    ],
    Thursday: [
      { period: "الأولى", name: "تكنولوجيا", link: LINK_TECH_C_D_E },
      { period: "الثانية", name: "علوم", link: LINK_SCIENCE_COMMON },
      { period: "الثالثة", name: "رياضيات", link: LINK_MATH_C_D },
      EMPTY_SLOT("الرابعة"),
    ],
    Friday: [], Saturday: [],
  },
  'د': {
    Sunday: [
      { period: "الأولى", name: "علوم", link: LINK_SCIENCE_COMMON },
      { period: "الثانية", name: "لغة عربية", link: LINK_ARABIC_C_D_E },
      { period: "الثالثة", name: "لغة إنجليزية", link: LINK_ENG_D_E },
      EMPTY_SLOT("الرابعة"),
    ],
    Monday: [
      { period: "الأولى", name: "رياضيات", link: LINK_MATH_C_D },
      { period: "الثانية", name: "لغة عربية", link: LINK_ARABIC_C_D_E },
      { period: "الثالثة", name: "علوم", link: LINK_SCIENCE_COMMON },
      EMPTY_SLOT("الرابعة"),
    ],
    Tuesday: [
      { period: "الأولى", name: "تربية إسلامية", link: LINK_ISLAMIC_COMMON },
      { period: "الثانية", name: "دراسات اجتماعية", link: LINK_SOCIAL_COMMON },
      { period: "الثالثة", name: "رياضيات", link: LINK_MATH_C_D },
      EMPTY_SLOT("الرابعة"),
    ],
    Wednesday: [
      { period: "الأولى", name: "لغة إنجليزية", link: LINK_ENG_D_E },
      { period: "الثانية", name: "رياضيات", link: LINK_MATH_C_D },
      { period: "الثالثة", name: "لغة عربية", link: LINK_ARABIC_C_D_E },
      EMPTY_SLOT("الرابعة"),
    ],
    Thursday: [
      { period: "الأولى", name: "رياضيات", link: LINK_MATH_C_D },
      { period: "الثانية", name: "تكنولوجيا", link: LINK_TECH_C_D_E },
      { period: "الثالثة", name: "لغة إنجليزية", link: LINK_ENG_D_E },
      EMPTY_SLOT("الرابعة"),
    ],
    Friday: [], Saturday: [],
  },
  'هـ': {
    Sunday: [
      { period: "الأولى", name: "لغة إنجليزية", link: LINK_ENG_D_E },
      { period: "الثانية", name: "رياضيات", link: LINK_MATH_E },
      { period: "الثالثة", name: "لغة عربية", link: LINK_ARABIC_C_D_E },
      EMPTY_SLOT("الرابعة"),
    ],
    Monday: [
      { period: "الأولى", name: "رياضيات", link: LINK_MATH_E },
      { period: "الثانية", name: "علوم", link: LINK_SCIENCE_COMMON },
      EMPTY_SLOT("الثالثة"),
      { period: "الرابعة", name: "دراسات اجتماعية", link: LINK_SOCIAL_COMMON },
    ],
    Tuesday: [
      EMPTY_SLOT("الأولى"),
      { period: "الثانية", name: "لغة إنجليزية", link: LINK_ENG_D_E },
      { period: "الثالثة", name: "تكنولوجيا", link: LINK_TECH_C_D_E },
      { period: "الرابعة", name: "لغة عربية", link: LINK_ARABIC_C_D_E },
    ],
    Wednesday: [
      { period: "الأولى", name: "رياضيات", link: LINK_MATH_E },
      { period: "الثانية", name: "لغة عربية", link: LINK_ARABIC_C_D_E },
      { period: "الثالثة", name: "تربية إسلامية", link: LINK_ISLAMIC_COMMON },
      EMPTY_SLOT("الرابعة"),
    ],
    Thursday: [
      { period: "الأولى", name: "لغة إنجليزية", link: LINK_ENG_D_E },
      { period: "الثانية", name: "رياضيات", link: LINK_MATH_E },
      { period: "الثالثة", name: "علوم", link: LINK_SCIENCE_COMMON },
      EMPTY_SLOT("الرابعة"),
    ],
    Friday: [], Saturday: [],
  },
};

export const dayNames: { [key: number]: string } = {
  0: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday",
};

export const arabicDayNames: { [key: string]: string } = {
  Sunday: "الأحد", Monday: "الإثنين", Tuesday: "الثلاثاء", Wednesday: "الأربعاء", Thursday: "الخميس", Friday: "الجمعة", Saturday: "السبت",
};