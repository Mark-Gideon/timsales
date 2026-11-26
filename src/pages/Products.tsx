import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { products } from '@/data/products';

const manufacturedLeft = [
  'Plywoods',
  'Block boards',
  'Tee doors',
  'Soft boards',
  'Hardwoods',
  'Veneer plywoods',
  'Flooring tiles and blocks',
  'Pre-fabricated houses',
];

const manufacturedRight = [
  'Melamine laminated MDF chipboards',
  'Doors',
  'Hardboards',
  'Softwoods',
  'Machined timber',
  'Kitchens, wardrobes and office furniture',
  'Laminated HDF flooring',
  'Treated transmission poles',
];

const distributed = ['Mahindra tractors', 'Formica', 'Husqvarna chainsaws and genuine parts'];

const samples = [
  { name: 'Moulding Profiles', image: 'moulding-profiles' },
  { name: 'Panel Doors', image: 'panel-doors' },
  { name: 'Parquet Floor Panels', image: 'parquet-floor-panels' },
  { name: 'Herringbone Parquet', image: 'herringbone-parquet' },
  { name: 'Cypress Moulding Range', image: 'cypress-moulding-range' },
  { name: 'Staircase Components', image: 'staircase-components' },
  { name: 'Wood Flooring Samples', image: 'wood-flooring-samples' },
  { name: 'Dining Furniture Set', image: 'dining-furniture-set' },
  { name: 'Display Furniture', image: 'display-furniture' },
  { name: 'Machine-Cut Wood Components', image: 'machine-cut-wood-components' },
  { name: 'Husqvarna Power Equipment', image: 'husqvarna-power-equipment' },
  { name: 'Husqvarna Outdoor Tools', image: 'husqvarna-outdoor-tools' },
];

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title={<>Our Products</>}
        description="Reliable wood products manufactured for construction, furniture, joinery, interiors and industrial applications. Explore Timsales plywood, fibreboards, chipboards, block boards, doors and timber."
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

      <section className="bg-warm-100 section-padding py-20 lg:py-28">
        <SectionHeading
          eyebrow="Product Range"
          title={<>Manufactured and Distributed Products</>}
          description="Timsales manufactures and distributes the following products. All our products have been certified by the Kenya Bureau of Standards and carry the Diamond Mark of Quality."
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          <Reveal delay={1}>
            <div className="h-full bg-white rounded-2xl border border-charcoal-200/40 p-7 lg:p-8">
              <h3 className="text-forest-900 font-bold text-lg mb-5">Manufactured products</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {[manufacturedLeft, manufacturedRight].map((col, ci) => (
                  <ul key={ci} className="space-y-3">
                    {col.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-charcoal-700">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-timber-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="h-full bg-forest-900 rounded-2xl p-7 lg:p-8">
              <h3 className="text-white font-bold text-lg mb-5">Distributed products</h3>
              <ul className="space-y-3">
                {distributed.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-warm-100/90">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-timber-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-warm-50 section-padding py-20 lg:py-28">
        <SectionHeading
          eyebrow="Product Display"
          title={<>Browse Product Samples</>}
          description="A closer look at Timsales wood products, fittings, furniture, machinery and equipment available through our product range."
          align="center"
        />

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {samples.map((item, i) => (
            <Reveal key={item.image} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <figure className="bg-white rounded-xl border border-charcoal-200/40 overflow-hidden card-hover h-full">
                <div className="aspect-[4/5] overflow-hidden image-zoom">
                  <img
                    src={`/assets/images/samples/${item.image}.jpg`}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="px-4 py-4 text-center text-sm font-bold text-forest-900">
                  {item.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
