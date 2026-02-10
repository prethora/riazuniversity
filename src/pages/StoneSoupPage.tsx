import { useLocale } from '../hooks/useLocale';
import { useContent } from '../hooks/useContent';
import Hero from '../components/Hero';
import PageContent from '../components/PageContent';
import ProjectCard from '../components/ProjectCard';
import { useTranslation } from 'react-i18next';

export default function StoneSoupPage() {
  const { locale, localePath } = useLocale();
  const { t } = useTranslation();
  const content = useContent('stone-soup', locale);
  const bookContent = useContent('stone-soup-book', locale);

  if (!content) return null;

  return (
    <div>
      <Hero
        title={content.frontmatter.title}
        subtitle={content.frontmatter.subtitle}
        image={content.frontmatter.heroImage}
      />
      <PageContent html={content.html} />
      {bookContent && (
        <section className="px-6 md:px-8 pb-16 md:pb-24">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-xl md:text-2xl font-medium text-text-secondary mb-8 text-center tracking-wide">
              {t('stoneSoupProjects', 'Projects')}
            </h2>
            <ProjectCard
              title={bookContent.frontmatter.title}
              excerpt={bookContent.frontmatter.description}
              image={bookContent.frontmatter.heroImage}
              to={localePath('/stone-soup/book')}
            />
          </div>
        </section>
      )}
    </div>
  );
}
