import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Globe, Truck } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CTABanner from '@/components/sections/CTABanner';

export default function Markets() {
  return (
    <>
      <PageHero
        eyebrow="Markets"
        title={<>Made in Kenya. Built for the Region.</>}
        description="Timsales products serve customers locally across Kenya and are also supplied to neighboring markets. Our manufacturing base positions us for both domestic supply and growing export opportunities."
        image="/assets/images/lorry.jpg"
      />

      <section className="bg-warm-50 section-padding py-20 lg:py-32">
        <SectionHeading
          eyebrow="Our Reach"
          title={<>Serving Local and Regional Markets</>}
          description="From our manufacturing base in Kenya, we supply professional customers across the country and serve growing regional demand."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: 'MapPin', title: 'Kenya', role: 'Core Market', desc: 'Manufacturing and distribution network serving customers across Kenya — from construction sites to furniture workshops.' },
            { icon: 'Truck', title: 'East Africa', role: 'Regional Distribution', desc: 'Regional distribution to neighboring countries, serving professional customers across East Africa.' },
            { icon: 'Globe', title: 'Export Markets', role: 'Growing Opportunities', desc: 'Growing opportunities to supply wood products to customers across neighboring African countries.' },
          ].map((item, i) => {
            const Icon = item.icon === 'MapPin' ? MapPin : item.icon === 'Truck' ? Truck : Globe;
            return (
              <Reveal key={item.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="p-8 bg-white rounded-2xl border border-charcoal-200/40 card-hover h-full">
                  <div className="w-14 h-14 rounded-xl bg-forest-100 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-forest-700" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-timber-600 mb-2">{item.role}</div>
                  <h3 className="text-2xl font-bold text-forest-900">{item.title}</h3>
                  <p className="mt-3 text-charcoal-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-forest-950 section-padding py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-display-md font-extrabold text-white text-balance">
              Interested in Export Supply?
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="mt-5 text-lg text-warm-100/80">
              Talk to our export team about your requirements — from product specifications to logistics and delivery.
            </p>
          </Reveal>
          <Reveal delay={2}>
            <Link to="/contact" className="btn-primary mt-8">
              Talk to Our Export Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
