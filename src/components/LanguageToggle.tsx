import { useLocale } from '../hooks/useLocale';

export default function LanguageToggle() {
  const { locale, switchLocale } = useLocale();

  return (
    <button
      onClick={switchLocale}
      className="text-sm tracking-wide transition-colors duration-200 cursor-pointer"
      aria-label="Switch language"
    >
      <span className={locale === 'en' ? 'font-medium text-accent' : 'text-text-secondary'}>EN</span>
      <span className="mx-1.5 text-border">|</span>
      <span className={locale === 'ko' ? 'font-medium text-accent' : 'text-text-secondary'}>한국어</span>
    </button>
  );
}
