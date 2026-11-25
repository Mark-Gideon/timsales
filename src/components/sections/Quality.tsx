import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

export default function Quality() {
  return (
    <section className="bg-warm-50 section-padding py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <div className="image-zoom rounded-xl overflow-hidden aspect-[3/4]">
              <img
                src="/assets/images/cypress-timber.jpeg"
                alt="Close-up of stacked wooden planks showing texture and grain"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="image-zoom rounded-xl overflow-hidden aspect-[3/4] mt-12">
              <img
                src="/assets/images/Sawn-timber.jpeg"
                alt="Detailed close-up of natural wood texture with grain patterns"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Quality"
            title={<>Quality You Can Build With.</>}
            description="Timsales focuses on consistent manufacturing, reliable materials, product performance, quality control, professional service and customer satisfaction. Every product is manufactured to meet professional standards."
          />

          <Reveal delay={3}>
            <div className="mt-8 space-y-4 border-l-2 border-timber-500 pl-6">
              {[
                'Manufactured for performance.',
                'Designed for reliability.',
                'Trusted for real-world applications.',
              ].map((statement) => (
                <p key={statement} className="text-xl font-bold text-forest-900 leading-snug">
                  {statement}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
