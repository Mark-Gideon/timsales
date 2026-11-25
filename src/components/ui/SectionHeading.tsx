import type { ReactNode } from 'react';
import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <Reveal>
          <div className={`flex items-center gap-3 mb-5 ${align === 'center' ? 'justify-center' : ''}`}>
            <span className="h-px w-8 bg-timber-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-timber-600">{eyebrow}</span>
          </div>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2
          className={`text-display-md font-extrabold ${light ? 'text-white' : 'text-forest-900'} text-balance`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={2}>
          <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-warm-100/80' : 'text-charcoal-400'}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
