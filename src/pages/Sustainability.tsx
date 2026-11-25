import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import CTABanner from '@/components/sections/CTABanner';

export default function Sustainability() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title={<>4.0 FORESTRY</>}
        description="The company sources its raw materials from state forest managed by Kenya Forest Service upon payment of the stipulated royalty. Raw transmission poles are sourced from small and large holders’ farms and tea estates."
        image="/assets/images/Pinus-KFS.jpg"
      />

      <section className="bg-warm-50 section-padding py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="image-zoom rounded-2xl overflow-hidden shadow-2xl shadow-forest-950/20 aspect-[4/3]">
              <img
                src="/assets/images/treePlantation-privatefarms.jpg"
                alt="Evergreen forest with young pine trees"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our Approach"
              title={<>5.0 ENVIRONMENTAL CONCERN</>}
              description="The company pays great regard to the environment that it operates in. All our projects have been certified by the National Environment Regulatory Authority and do not cause any harm to the environment. Timsales is environmentally conscious and incorporates proper environmental protection measures at all levels of production ensuring that facilities are operated and maintained in compliance with national and international laws, regulations and environmental standards. The company has a wetland where all effluents pass through before they are discharged."
            />
            <Reveal delay={3}>
              <div className="mt-8 space-y-4">
                {[
                  'The company runs a reforestation programmer in state forests where it plants the area it has harvested to ensure sustainability of forest resources.',
                  'To date we have planted a total 2,480 Hectares with 5,000,000 seedlings.',
                  'The company has also invested in commercial tree plantations and has established three private tree farms in Keringet, Tarakuet and Chetalum farms along Njoro-Elburgon Road.',
                  'The waste from sawmill and plywood line are chipped and used for production of chipboards.',
                  'Saw dust and barks are used in the thermal boiler for energy generation.',
                  'Our production process is integrated such that wastes in one production line are used as raw material in another production line.',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-timber-500 shrink-0" />
                    <span className="text-charcoal-700 text-base">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-warm-100 section-padding py-20 lg:py-28">
        <SectionHeading
          eyebrow="Commitment"
          title={<>6.0 CORPORATE SOCIAL RESPONSIBILITY</>}
          description="Timsales is a responsible corporate citizen. Towards this end the organization is committed to doing good deeds for the wellbeing of the society by taking environmental, economic and socially responsible actions that have a lasting and positive impact on the communities in which we work. Timsales has supported and is continuing to support sustainable community development initiatives in education, environment, water, welfare and, sports."
        />
        <Reveal delay={2}>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '6.1. EDUCATION', desc: 'In supporting education Timsales has fully constructed two primary schools complete with furniture’s and offered building materials to other schools.' },
              { title: '6.2 ENVIRONMENT', desc: 'We are running an ambitious afforestation and reforestation programme in Kenya Forest Service forests and private farms owned by Timsales.' },
              { title: '6.4 WATER', desc: 'The company has drilled and equipped water in Kasarani village adjacent to Timsales factory at a cost of 1.5 Million Shillings.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="p-7 bg-white rounded-2xl border border-charcoal-200/40 shadow-sm">
                  <h3 className="text-forest-700 font-bold text-lg">{item.title}</h3>
                  <p className="mt-2 text-forest-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={3}>
          <div className="mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 text-forest-600 hover:text-forest-700 font-semibold transition-colors link-underline">
              Learn More About Our Practices
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      <CTABanner />
    </>
  );
}
