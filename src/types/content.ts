export interface ContentFrontmatter {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  status?: 'coming-soon';
  parentProject?: string;
}

export interface ContentPage {
  frontmatter: ContentFrontmatter;
  html: string;
}
