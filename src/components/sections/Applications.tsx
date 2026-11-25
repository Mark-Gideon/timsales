// import { Link } from 'react-router-dom';
// import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { applications } from '@/data/content';
import * as Icons from 'lucide-react';

export default function Applications() {
  return (
    <section className="bg-warm-100 section-padding py-20 lg:py-32">
      <SectionHeading
        eyebrow="Applications"
        title={<>Materials for Real-World Applications</>}
        description="Timsales wood products are used across construction, furniture, interiors, doors, commercial projects and industrial applications."
      />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app, i) => {
          const Icon = (Icons[app.icon as keyof typeof Icons] || Icons.Box) as Icons.LucideIcon;
          return (
            <Reveal key={app.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="group relative rounded-2xl overflow-hidden card-hover h-full">
                <div className="aspect-[4/3] overflow-hidden image-zoom">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/35 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="w-11 h-11 rounded-lg bg-timber-500 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-forest-900" />
                  </div>
                  <h3 className="text-white font-bold text-lg">{app.title}</h3>
                  <p className="text-warm-100/90 text-sm mt-1">{app.description}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
