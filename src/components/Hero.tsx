interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function Hero({ title, subtitle, image }: HeroProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="font-heading text-4xl md:text-5xl font-medium text-white leading-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 font-light leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
