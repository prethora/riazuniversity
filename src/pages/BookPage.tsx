import { useLocale } from '../hooks/useLocale';
import { useContent } from '../hooks/useContent';
import Hero from '../components/Hero';
import PageContent from '../components/PageContent';

export default function BookPage() {
  const { locale } = useLocale();
  const content = useContent('stone-soup-book', locale);

  if (!content) return null;

  return (
    <div>
      <Hero
        title={content.frontmatter.title}
        subtitle={content.frontmatter.subtitle}
        image={content.frontmatter.heroImage}
      />
      <PageContent html={content.html} />
    </div>
  );
}
