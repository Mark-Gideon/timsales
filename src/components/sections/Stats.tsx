import { stats } from '@/data/content';
import Counter from '@/components/ui/Counter';
import Reveal from '@/components/ui/Reveal';

export default function Stats() {
  return (
    <section className="bg-forest-950 section-padding py-16 lg:py-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {stats.map((stat, i) => (
          <Reveal key={i} delay={(i + 1) as 1 | 2 | 3 | 4 | 5}>
            <div className="text-center lg:text-left lg:border-l border-white/10 lg:pl-6 first:border-l-0 lg:first:pl-0">
              <div className="text-display-sm font-extrabold text-timber-400">
                <Counter value={stat.value} />
              </div>
              <div className="mt-2 text-white font-semibold text-sm">{stat.label}</div>
              <div className="mt-1 text-warm-100/50 text-xs leading-relaxed">{stat.sublabel}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
