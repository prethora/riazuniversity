interface PageContentProps {
  html: string;
}

export default function PageContent({ html }: PageContentProps) {
  return (
    <section className="px-6 md:px-8 py-16 md:py-24">
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}
