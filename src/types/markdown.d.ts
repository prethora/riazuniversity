declare module '*.md' {
  export const frontmatter: Record<string, any>;
  export const html: string;
}

declare module '/content/*' {
  import type { ContentPage } from './content';
  const content: ContentPage;
  export default content;
  export const frontmatter: ContentPage['frontmatter'];
  export const html: string;
}
