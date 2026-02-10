import { useLocale } from '../hooks/useLocale';
import { useContent } from '../hooks/useContent';
import Hero from '../components/Hero';
import PageContent from '../components/PageContent';
import ComingSoon from '../components/ComingSoon';

export default function WanderingTablePage() {
  const { locale } = useLocale();
  const content = useContent('wandering-table', locale);

  if (!content) return null;

  return (
    <div>
      <Hero
        title={content.frontmatter.title}
        subtitle={content.frontmatter.subtitle}
        image={content.frontmatter.heroImage}
      />
      {content.frontmatter.status === 'coming-soon' && (
        <div className="flex justify-center pt-8">
          <ComingSoon />
        </div>
      )}
      <PageContent html={content.html} />
    </div>
  );
}
