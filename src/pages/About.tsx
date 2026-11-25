import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { manufacturingSteps } from '@/data/content';
import CTABanner from '@/components/sections/CTABanner';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Timsales"
        title={<>ABOUT US</>}
        description="Timsales is a leading forest industrial complex that deals in the manufacture of forest products such as plywood’s fiberboards block boards, flush doors pre-fabricated buildings and timber products used in the building and construction industry in the region."
        image="/assets/images/about_us.jpg"
      />

      <section className="bg-warm-50 section-padding py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionHeading
              eyebrow="ABOUT US"
              title={<>A Leading Forest Industrial Complex</>}
              description="The firm was established in 1932 in Elburgon, Molo District, and Nakuru County in the Rift Valley Province. The head office is located in Elburgon where a total of 3000 employees are directly employed. The firm also has branches in major towns of the country i.e. Nairobi, Mombasa, Kisumu and Nakuru. The company sells its products both in the local and international market."
            />
            <Reveal delay={3}>
              <div className="mt-8 space-y-4">
                {[
                  'Raw materials are sourced from state forest managed by the Kenya Forest Service through payment of stipulated royalty with the exception of raw transmission poles which are obtained from small holder and large private farms and tea estates.',
                  'Mr. Jaswant Singh Rai - Chairman',
                  'Mr. Onkar Singh Rai - Managing Director',
                  'Mr. Tejveer Singh Rai - Director',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-timber-500 shrink-0" />
                    <span className="text-charcoal-700 text-base">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <div className="image-zoom rounded-2xl overflow-hidden shadow-2xl shadow-forest-950/20 aspect-[4/5]">
              <img
                src="/assets/images/about_us.jpg"
                alt="High stacks of wooden planks stored in a lumber yard"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-warm-100 section-padding py-20 lg:py-32">
        <SectionHeading
          eyebrow="1.0 PRODUCTION LINES"
          title={<>The company has several production lines</>}
          description="Timsales manufactures and distributes the following products:"
          align="center"
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manufacturingSteps.map((item, i) => (
            <Reveal key={item.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="bg-white rounded-2xl border border-charcoal-200/40 card-hover overflow-hidden h-full">
                <div className="image-zoom aspect-[16/10]">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-7">
                  <p className="text-timber-600 text-xs font-bold tracking-widest">{item.number}</p>
                  <h3 className="mt-2 text-lg font-bold text-forest-900">{item.title}</h3>
                  <p className="mt-2 text-charcoal-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
