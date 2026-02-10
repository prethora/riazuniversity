import { useTranslation } from 'react-i18next';

export default function ComingSoon() {
  const { t } = useTranslation();

  return (
    <span className="inline-block px-3 py-1 text-sm italic tracking-wide text-text-secondary border border-border rounded-full">
      {t('comingSoon')}
    </span>
  );
}
