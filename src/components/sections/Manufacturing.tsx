import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { manufacturingSteps } from '@/data/content';

export default function Manufacturing() {
  return (
    <section className="bg-forest-800 section-padding py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Manufacturing"
          title={<>From Forest Resources to Finished Products</>}
          description="Timsales transforms raw timber into quality engineered wood products through a controlled industrial process — from raw material to distribution."
          light
        />

        <div className="mt-16 space-y-0">
          {manufacturingSteps.map((step, i) => (
            <Reveal key={step.number}>
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center py-8 ${
                i !== manufacturingSteps.length - 1 ? 'border-b border-white/5' : ''
              }`}>
                <div className="lg:col-span-2">
                  <div className="text-display-sm font-extrabold text-timber-500/40">{step.number}</div>
                </div>
                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-3' : ''}`}>
                  <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-warm-100/70 leading-relaxed">{step.description}</p>
                </div>
                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="image-zoom rounded-xl overflow-hidden aspect-[16/10]">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
