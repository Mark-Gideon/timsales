import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function About() {
  return (
    <section className="bg-warm-50 section-padding py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <SectionHeading
            eyebrow="About Timsales"
            title={<>Built on Wood. Built on Experience.</>}
              description="Established in Elburgon in 1932, Timsales is an integrated forest-industrial complex manufacturing plywood, fibreboards, block boards, flush doors, timber and other forest products for the building and construction industry in Kenya and international markets."
          />

          <Reveal delay={3}>
            <div className="mt-8 space-y-4">
              {[
                'More than 90 years of wood-processing experience',
                'Integrated production across eight manufacturing lines',
                'A 3,000-plus employee manufacturing operation',
                'Branches in Nairobi, Mombasa, Kisumu and Nakuru',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-timber-500 shrink-0" />
                  <span className="text-charcoal-700 text-base">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={4}>
            <Link to="/about" className="inline-flex items-center gap-2 mt-8 text-forest-600 hover:text-timber-700 font-semibold transition-colors link-underline">
              Learn More About Timsales
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <div className="relative">
            <div className="image-zoom rounded-2xl overflow-hidden shadow-2xl shadow-forest-950/20 aspect-[4/5]">
              <img
                src="/assets/images/timber-yard.jpg"
                alt="Large stacks of lumber at a sawmill processing facility"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-timber-500 rounded-2xl hidden md:flex items-center justify-center">
              <div className="text-center">
                <div className="text-forest-900 font-extrabold text-3xl"><img src="/assets/logos/logo.png" alt="TIMSALES Logo" className="w-12 h-12" /></div>
                <div className="text-forest-600 text-[10px] uppercase tracking-widest mt-1">Timsales</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
