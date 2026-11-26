import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import IndustrialFacility from '@/components/sections/IndustrialFacility';
import { manufacturingSteps } from '@/data/content';

export default function Manufacturing() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        title={<>1.0 PRODUCTION LINES</>}
        description="The company has several production lines"
        image="/assets/images/banners/manufacturing.jpg"
      />

      <section className="bg-warm-50 section-padding py-20 lg:py-32">
        <SectionHeading
          eyebrow="The Process"
          title={<>The company has several production lines</>}
          description="Our production process is integrated such that wastes in one production line are used as raw material in another production line. This ensures efficient use of forest resources as even tree barks are used in the production process."
          align="center"
        />

        <div className="mt-16 space-y-0">
          {manufacturingSteps.map((step, i) => (
            <Reveal key={step.number}>
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center py-10 ${
                i !== manufacturingSteps.length - 1 ? 'border-b border-charcoal-200/30' : ''
              }`}>
                <div className="lg:col-span-2">
                  <div className="text-display-lg font-extrabold text-forest-900/50">{step.number}</div>
                </div>
                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-3' : ''}`}>
                  <h3 className="text-2xl font-bold text-forest-700 mb-3">{step.title}</h3>
                  <p className="text-charcoal-600 leading-relaxed">{step.description}</p>
                </div>
                <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="image-zoom rounded-xl overflow-hidden aspect-[16/10] shadow-lg shadow-forest-950/10">
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
      </section>

      <IndustrialFacility />
    </>
  );
}
