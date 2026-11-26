import { type ReactNode } from 'react';
import Reveal from '@/components/ui/Reveal';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  image: string;
}

export default function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-32 pb-16">
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-forest-950/5" />
      </div>

      <div className="relative z-10 section-padding w-full">
        {eyebrow && (
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-timber-500" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-timber-400">{eyebrow}</span>
            </div>
          </Reveal>
        )}
        <Reveal delay={1}>
          <h1 className="text-display-lg font-extrabold text-white text-balance max-w-4xl">{title}</h1>
        </Reveal>
        {description && (
          <Reveal delay={2}>
            <p className="mt-5 text-lg text-warm-100/80 max-w-2xl leading-relaxed">{description}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
