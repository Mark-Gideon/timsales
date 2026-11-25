import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function Markets() {
  return (
    <section className="bg-warm-50 section-padding py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <SectionHeading
            eyebrow="Markets"
            title={<>Made in Kenya. Built for the Region.</>}
            description="Timsales products serve customers locally and are also supplied to neighboring markets. Our manufacturing base in Kenya positions us to serve both the domestic market and growing export opportunities across the region."
          />

          <Reveal delay={3}>
            <div className="mt-8 space-y-4">
              {[
                { region: 'Kenya', role: 'Core market — manufacturing & distribution network' },
                { region: 'East Africa', role: 'Regional distribution to neighboring countries' },
                { region: 'Export Markets', role: 'Growing opportunities across the region' },
              ].map((item) => (
                <div key={item.region} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-charcoal-200/50">
                  <div className="w-10 h-10 rounded-lg bg-forest-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-forest-700" />
                  </div>
                  <div>
                    <div className="font-bold text-forest-900">{item.region}</div>
                    <div className="text-charcoal-400 text-sm mt-0.5">{item.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={4}>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-8 text-timber-600 hover:text-timber-700 font-semibold transition-colors link-underline">
              Talk to Our Export Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <div className="relative">
            <div className="image-zoom rounded-2xl overflow-hidden shadow-2xl shadow-forest-950/20 aspect-[4/3]">
              <img
                src="/assets/images/about_us.jpg"
                alt="Timsales industrial wood manufacturing facility"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-timber-500 text-forest-900 px-6 py-4 rounded-xl shadow-xl">
              <div className="text-2xl font-extrabold">Kenya</div>
              <div className="text-xs uppercase tracking-widest text-forest-900/80">Manufacturing Base</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
