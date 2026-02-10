import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        nav: {
          home: 'Home',
          philosophy: 'Philosophy',
          stoneSoup: 'Stone Soup',
          book: 'The Book',
          morningRitual: 'Morning Ritual',
          wanderingTable: 'Wandering Table',
          howILearnedEnglish: 'How I Learned English',
        },
        readMore: 'Read more',
        comingSoon: 'Coming Soon',
        stoneSoupProjects: 'Projects',
        footer: {
          credit: 'Hari Kim · Riaz University · Seochon, Seoul',
        },
        lang: {
          en: 'EN',
          ko: '한국어',
        },
      },
    },
    ko: {
      translation: {
        nav: {
          home: '홈',
          philosophy: '철학',
          stoneSoup: '스톤 수프',
          book: '그 책',
          morningRitual: '아침 의식',
          wanderingTable: '방랑하는 식탁',
          howILearnedEnglish: '영어를 배운 방법',
        },
        readMore: '더 알아보기',
        comingSoon: '곧 시작합니다',
        stoneSoupProjects: '프로젝트',
        footer: {
          credit: '하리 김 · 리아즈 대학교 · 서촌, 서울',
        },
        lang: {
          en: 'EN',
          ko: '한국어',
        },
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
