import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { products } from '@/data/products';

export default function Products() {
  return (
    <section className="bg-warm-100 section-padding py-20 lg:py-32">
      <SectionHeading
        eyebrow="Our Products"
        title={<>Our Products</>}
        description="Reliable wood products manufactured for construction, furniture, joinery, interiors and industrial applications."
      />

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, i) => (
          <Reveal key={product.slug} delay={((i % 3) + 1) as 1 | 2 | 3}>
            <Link
              to={`/products/${product.slug}`}
              className="group block card-hover bg-white rounded-2xl overflow-hidden h-full"
            >
              <div className="image-zoom aspect-[16/10] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 lg:p-7">
                <h3 className="text-xl font-bold text-forest-900 group-hover:text-timber-600 transition-colors">
                  {product.name}
                </h3>
                <p className="mt-3 text-charcoal-400 text-sm leading-relaxed">{product.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-timber-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  Explore {product.shortName}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}

        <Reveal delay={3}>
          <div className="bg-forest-700 rounded-2xl p-8 lg:p-10 h-full flex flex-col justify-center">
            <h3 className="text-white font-bold text-xl">Other Products &amp; Services</h3>
            <p className="mt-3 text-warm-100/70 text-sm leading-relaxed">
              In addition to our core wood-product range, Timsales offers complementary products and services.
              Contact our team to learn more.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-5 text-timber-400 hover:text-timber-300 font-semibold text-sm transition-colors">
              Talk to Our Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
