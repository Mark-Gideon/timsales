import { Link, useParams, Navigate } from 'react-router-dom';
import Reveal from '@/components/ui/Reveal';
import ImageCarousel from '@/components/ui/ImageCarousel';
import { getProduct, products } from '@/data/products';
import * as Icons from 'lucide-react';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProduct(slug) : undefined;

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const applicationIcons: Record<string, string> = {
    Construction: 'Building2',
    Furniture: 'Sofa',
    Joinery: 'Hammer',
    'Interior Fit-Outs': 'Home',
    Doors: 'DoorClosed',
    Residential: 'Home',
    Commercial: 'Building',
    Institutional: 'Building',
    Hospitality: 'Building',
    Formwork: 'Layers',
    Packaging: 'Package',
    Shelving: 'ListOrdered',
    'Display Systems': 'Monitor',
    Roofing: 'Home',
    Flooring: 'Grid3x3',
    'General Woodworking': 'Hammer',
    'Commercial Projects': 'Building',
    'Interior Fit-Out': 'Home',
  };

  return (
    <>
      {/* Top banner: title only */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden pt-32 pb-14">
        <div className="absolute inset-0 z-0">
          <img
            src={product.detailImage}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/60 to-forest-950/20" />
        </div>

        <div className="relative z-10 section-padding w-full">
          <Reveal>
            <h1 className="text-display-lg font-extrabold text-white">{product.name}</h1>
          </Reveal>
        </div>
      </section>

      {/* Overview: explanation + image scroll */}
      <section className="bg-warm-50 section-padding py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-timber-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-timber-600">Overview</span>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-display-sm font-extrabold text-forest-900 mb-5">{product.name}</h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-lg text-charcoal-700 leading-relaxed">{product.overview}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-3 min-w-0">
            <Reveal delay={2}>
              <ImageCarousel
                key={product.slug}
                images={product.gallery}
                slideClassName="w-full"
                aspectClassName="aspect-[4/3]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-warm-100 section-padding py-20 lg:py-28">
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-timber-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-timber-600">Applications</span>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="text-display-sm font-extrabold text-forest-900 mb-10">Applications</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {product.applications.map((app, i) => {
            const iconName = applicationIcons[app] || 'Check';
            const Icon = (Icons[iconName as keyof typeof Icons] || Icons.Check) as Icons.LucideIcon;
            return (
              <Reveal key={app} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="p-6 bg-white rounded-xl border border-charcoal-200/40 card-hover">
                  <div className="w-10 h-10 rounded-lg bg-forest-100 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-forest-700" />
                  </div>
                  <div className="font-semibold text-forest-900">{app}</div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-warm-50 section-padding py-20">
        <Reveal>
          <h2 className="text-display-sm font-extrabold text-forest-900 mb-10">Explore Other Products</h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.filter((p) => p.slug !== product.slug).map((p, i) => (
            <Reveal key={p.slug} delay={((i % 4) + 1) as 1 | 2 | 3 | 4 | 5}>
              <Link
                to={`/products/${p.slug}`}
                className="group block bg-white rounded-xl overflow-hidden card-hover"
              >
                <div className="image-zoom aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <div className="font-bold text-forest-900 group-hover:text-timber-600 transition-colors text-sm">
                    {p.name}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
