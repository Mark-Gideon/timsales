import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function IndustrialFacility() {
  return (
    <section className="bg-charcoal-900 section-padding py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/images/sawmill-line.jpg"
          alt="Industrial wood workshop with table saw and lumber stacks"
          className="w-full h-full object-cover opacity-55"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/80 via-charcoal-900/45 to-charcoal-900/10" />
      </div>

      <div className="relative z-10 max-w-2xl">
        <SectionHeading
          eyebrow="Industrial Capability"
          title={<>Industrial Capability. Human Expertise.</>}
          description="Our manufacturing operation combines industrial-scale production with experienced personnel — from sawmilling and board production to pressing, finishing, quality control and logistics."
          light
        />

        <Reveal delay={3}>
          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { label: 'Sawmilling', desc: 'Industrial log processing' },
              { label: 'Board Production', desc: 'Veneer, plywood & boards' },
              { label: 'Pressing & Finishing', desc: 'Engineered for stability' },
              { label: 'Quality Control', desc: 'Inspected before dispatch' },
              { label: 'Logistics', desc: 'Loading & distribution' },
              { label: 'Regional Reach', desc: 'Kenya & neighboring markets' },
            ].map((item) => (
              <div key={item.label} className="border-l-2 border-timber-500 pl-4">
                <div className="text-white font-bold text-base">{item.label}</div>
                <div className="text-warm-100/60 text-sm mt-0.5">{item.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
