import type { ContentPage } from '../types/content';

const contentModules = import.meta.glob<ContentPage>('/content/**/*.md', { eager: true });

export function useContent(slug: string, locale: string): ContentPage | null {
  const key = `/content/${locale}/${slug}.md`;
  return contentModules[key] ?? null;
}
