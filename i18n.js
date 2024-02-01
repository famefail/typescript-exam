import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    "Travel App": "Travel App",
    "Layout & Style": "Layout & Style",
    "Move shape": "Move shape",
    "Move position": "Move position",
    "Title": "Title"
  },
  th: {
    "Travel App": "แอปท่องเที่ยว",
    "Layout & Style": "การจัดการหน้าเว็บ",
    "Move shape": "ดูรายละเอียด",
    "Move position": "เปลี่ยนตำแหน่ง",
    "Title": "คำนำหน้า"
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: resources.en,
      },
      th: {
        translation: resources.th,
      },
    },
    lng: 'en',
    // fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;