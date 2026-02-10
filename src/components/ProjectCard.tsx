import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ComingSoon from './ComingSoon';

interface ProjectCardProps {
  title: string;
  excerpt: string;
  image: string;
  to: string;
  reverse?: boolean;
  comingSoon?: boolean;
}

export default function ProjectCard({ title, excerpt, image, to, reverse = false, comingSoon = false }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
      <div className="w-full lg:w-1/2">
        <Link to={to} className="block overflow-hidden rounded-sm">
          <img
            src={image}
            alt={title}
            className="w-full aspect-[3/2] object-cover transition-transform duration-500 hover:scale-105"
          />
        </Link>
      </div>
      <div className="w-full lg:w-1/2 space-y-4">
        {comingSoon && <ComingSoon />}
        <h2 className="font-heading text-2xl md:text-3xl font-medium leading-tight text-text-primary">
          {title}
        </h2>
        <p className="text-text-secondary leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <Link
          to={to}
          className="inline-block text-accent hover:text-accent-hover transition-colors duration-200 tracking-wide text-sm font-medium"
        >
          {t('readMore')} →
        </Link>
      </div>
    </div>
  );
}
