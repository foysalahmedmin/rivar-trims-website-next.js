export type Language = {
  name: string;
  code: string;
  flag: string;
  [key: string]: unknown;
};

export const WEB3_FORMS_SECRET = "f3794615-5d69-4289-8663-11a81102ed74"; //foysalahmedmin@gmail.com

export const LANGUAGES: Record<string, Language> = {
  en: {
    name: "English",
    code: "en",
    flag: "/images/flags/usa.svg",
  },
  bn: {
    name: "Bangla",
    code: "bn",
    flag: "/images/flags/bn.svg",
  },
};
