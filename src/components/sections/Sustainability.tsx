import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function Sustainability() {
  return (
    <section className="bg-forest-900 section-padding py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-45">
        <img
          src="/assets/images/Pinus-KFS.jpg"
          alt="Peaceful forest with sunlight filtering through tall pine trees"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-900/75 via-forest-900/25 to-transparent" />
      </div>

      <div className="relative z-10 max-w-2xl">
        <SectionHeading
          eyebrow="Sustainability"
          title={<>Making Better Use of Wood.</>}
          description="Timsales integrates forest stewardship into its manufacturing operation, reusing production residues, restoring forest cover and supporting the communities around its Elburgon operations."
          light
        />

        <Reveal delay={3}>
          <div className="mt-8 space-y-4">
            {[
              'Wood residues reused in chipboard and fibreboard production',
              'Sawdust and bark used for thermal energy generation',
              '2,480 hectares replanted with 5 million seedlings',
              'Three private tree farms covering 1,759 acres',
              'Wetland treatment for production effluents',
              'Community investment in education, water and welfare',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-timber-500 shrink-0" />
                <span className="text-warm-100/85 text-base">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={4}>
          <Link to="/sustainability" className="inline-flex items-center gap-2 mt-8 text-timber-400 hover:text-timber-300 font-semibold transition-colors link-underline">
            Our Approach to Sustainability
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
