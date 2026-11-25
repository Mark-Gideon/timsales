import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { whyTimsales } from '@/data/content';
import * as Icons from 'lucide-react';

export default function WhyTimsales() {
  return (
    <section className="bg-warm-50 section-padding py-20 lg:py-32">
        <SectionHeading
          eyebrow="Why Timsales"
          title={<>Why Timsales?</>}
          description="Six reasons professional customers choose Timsales as their wood products partner."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyTimsales.map((item, i) => {
            const Icon = (Icons[item.icon as keyof typeof Icons] || Icons.Check) as Icons.LucideIcon;
            return (
              <Reveal key={item.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="group p-7 bg-white rounded-2xl border border-charcoal-200/40 card-hover h-full">
                  <div className="w-12 h-12 rounded-xl bg-forest-100 group-hover:bg-timber-500 flex items-center justify-center transition-colors duration-500">
                    <Icon className="w-6 h-6 text-forest-700 group-hover:text-forest-900 transition-colors duration-500" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-forest-900">{item.title}</h3>
                  <p className="mt-2 text-charcoal-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
    </section>
  );
}
