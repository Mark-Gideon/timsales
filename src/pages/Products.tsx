import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
// import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { products } from '@/data/products';
import CTABanner from '@/components/sections/CTABanner';

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={<>Our Products</>}
        description="Reliable wood products manufactured for construction, furniture, joinery, interiors and industrial applications. Explore Timsales plywood, fibreboards, chipboards, block boards, flush doors and timber."
        image="/assets/images/BLOCKBOARD.jpg"
      />

      <section className="bg-warm-50 section-padding py-20 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={((i % 2) + 1) as 1 | 2}>
              <Link
                to={`/products/${product.slug}`}
                className="group block card-hover bg-white rounded-2xl overflow-hidden h-full"
              >
                <div className="image-zoom aspect-[16/9] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-7 lg:p-8">
                  <h3 className="text-2xl font-bold text-forest-900 group-hover:text-timber-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-timber-600 font-semibold text-sm">{product.tagline}</p>
                  <p className="mt-3 text-charcoal-400 leading-relaxed">{product.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-timber-600 font-semibold group-hover:gap-3 transition-all">
                    Explore {product.shortName}
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

      </section>

      <CTABanner />
    </>
  );
}
