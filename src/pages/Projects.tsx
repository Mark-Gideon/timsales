import { MapPin, Layers } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { projects } from '@/data/content';
import CTABanner from '@/components/sections/CTABanner';

export default function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title={<>Built With Timsales</>}
        description="Projects and customer applications using Timsales wood products. Replace placeholder content with verified project information from the CMS."
        image="/assets/images/kitchen-units.jpg"
      />

      <section className="bg-warm-50 section-padding py-20 lg:py-32">
        <SectionHeading
          eyebrow="Case Studies"
          title={<>Projects &amp; Applications</>}
          description="See how Timsales wood products are used in real-world projects — from construction and furniture to interior fit-outs and commercial developments."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="group card-hover bg-white rounded-2xl overflow-hidden h-full">
                <div className="image-zoom aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-timber-600 uppercase tracking-wider mb-3">
                    <span>{project.application}</span>
                  </div>
                  <h3 className="text-lg font-bold text-forest-900">{project.name}</h3>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-charcoal-400">
                      <MapPin className="w-4 h-4 text-timber-500" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-2 text-charcoal-400">
                      <Layers className="w-4 h-4 text-timber-500" />
                      {project.products}
                    </div>
                  </div>
                  <p className="mt-4 text-charcoal-400 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={2}>
          <div className="mt-12 p-8 bg-warm-100 rounded-2xl border border-charcoal-200/40">
            <p className="text-charcoal-500 text-sm leading-relaxed">
              Project information shown above uses placeholder content. Replace [Add Project Name], [Add Location] and project descriptions with verified project information through the CMS. Do not publish fabricated project names, clients or details.
            </p>
          </div>
        </Reveal>
      </section>

      <CTABanner />
    </>
  );
}
