import { useLocale } from '../hooks/useLocale';
import { useContent } from '../hooks/useContent';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

interface ProjectDef {
  slug: string;
  path: string;
  comingSoon?: boolean;
}

const projectDefs: ProjectDef[] = [
  { slug: 'philosophy', path: '/philosophy' },
  { slug: 'stone-soup', path: '/stone-soup' },
  { slug: 'morning-ritual', path: '/morning-ritual', comingSoon: true },
  { slug: 'wandering-table', path: '/wandering-table', comingSoon: true },
  { slug: 'how-i-learned-english', path: '/how-i-learned-english', comingSoon: true },
];

export default function HomePage() {
  const { locale, localePath } = useLocale();
  const content = useContent('home', locale);

  // Load all project content at top level (hooks can't be in loops)
  const philosophyContent = useContent('philosophy', locale);
  const stoneSoupContent = useContent('stone-soup', locale);
  const morningRitualContent = useContent('morning-ritual', locale);
  const wanderingTableContent = useContent('wandering-table', locale);
  const howILearnedEnglishContent = useContent('how-i-learned-english', locale);

  const projectContents: Record<string, ReturnType<typeof useContent>> = {
    'philosophy': philosophyContent,
    'stone-soup': stoneSoupContent,
    'morning-ritual': morningRitualContent,
    'wandering-table': wanderingTableContent,
    'how-i-learned-english': howILearnedEnglishContent,
  };

  if (!content) return null;

  const { frontmatter, html } = content;

  return (
    <div>
      <Hero
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        image={frontmatter.heroImage}
      />

      <section className="px-6 md:px-8 py-16 md:py-24">
        <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />
      </section>

      <section className="px-6 md:px-8 pb-16 md:pb-24">
        <div className="max-w-5xl mx-auto space-y-16 md:space-y-24">
          {projectDefs.map((project, index) => {
            const pc = projectContents[project.slug];
            if (!pc) return null;
            return (
              <ProjectCard
                key={project.slug}
                title={pc.frontmatter.title}
                excerpt={pc.frontmatter.description}
                image={pc.frontmatter.heroImage}
                to={localePath(project.path)}
                reverse={index % 2 === 1}
                comingSoon={project.comingSoon}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
