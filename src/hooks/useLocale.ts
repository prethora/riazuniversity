import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export function useLocale() {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const locale = location.pathname.startsWith('/ko') ? 'ko' : 'en';

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  const switchLocale = () => {
    const currentPath = location.pathname;
    let newPath: string;
    if (locale === 'en') {
      newPath = currentPath === '/' ? '/ko' : `/ko${currentPath}`;
    } else {
      newPath = currentPath === '/ko' ? '/' : currentPath.replace(/^\/ko/, '');
    }
    navigate(newPath);
  };

  const localePath = (path: string) => {
    if (locale === 'ko') {
      return path === '/' ? '/ko' : `/ko${path}`;
    }
    return path;
  };

  return { locale, switchLocale, localePath };
}
