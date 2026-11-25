import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Download, FileText, Info, Check } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { getProduct, products } from '@/data/products';
import CTABanner from '@/components/sections/CTABanner';
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
    'Residential': 'Home',
    'Commercial': 'Building',
    'Institutional': 'Building',
    'Hospitality': 'Building',
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
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-32 pb-16">
        <div className="absolute inset-0 z-0">
          <img
            src={product.detailImage}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/70 to-forest-950/30" />
        </div>

        <div className="relative z-10 section-padding w-full">
          <Reveal>
            <div className="flex items-center gap-3 mb-5">
              <Link to="/products" className="text-warm-100/60 hover:text-timber-400 text-sm font-semibold transition-colors">
                Products
              </Link>
              <span className="text-warm-100/40">/</span>
              <span className="text-timber-400 text-sm font-semibold">{product.name}</span>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="text-display-lg font-extrabold text-white">{product.name}</h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-4 text-xl text-warm-100/80 max-w-2xl">{product.tagline}</p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-8">
              <Link to="/contact" className="btn-primary" state={{ product: product.name }}>
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-warm-50 section-padding py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-timber-500" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-timber-600">Overview</span>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <h2 className="text-display-sm font-extrabold text-forest-900 mb-5">Product Overview</h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="text-lg text-charcoal-700 leading-relaxed">{product.overview}</p>
            </Reveal>
          </div>

          <Reveal delay={2}>
            <div className="bg-forest-900 rounded-2xl p-7">
              <h3 className="text-white font-bold text-lg mb-4">Downloads</h3>
              <div className="space-y-3">
                <button className="flex items-center gap-3 w-full p-3.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left group">
                  <Download className="w-5 h-5 text-timber-400" />
                  <div>
                    <div className="text-white text-sm font-semibold">Product Catalogue</div>
                    <div className="text-warm-100/50 text-xs">Download PDF</div>
                  </div>
                </button>
                <button className="flex items-center gap-3 w-full p-3.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left group">
                  <FileText className="w-5 h-5 text-timber-400" />
                  <div>
                    <div className="text-white text-sm font-semibold">Technical Datasheet</div>
                    <div className="text-warm-100/50 text-xs">Download PDF</div>
                  </div>
                </button>
                <Link to="/contact" className="flex items-center gap-3 w-full p-3.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-left group">
                  <Info className="w-5 h-5 text-timber-400" />
                  <div>
                    <div className="text-white text-sm font-semibold">Request Information</div>
                    <div className="text-warm-100/50 text-xs">Contact our team</div>
                  </div>
                </Link>
              </div>
            </div>
          </Reveal>
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

      <section className="bg-warm-50 section-padding py-20 lg:py-28">
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-timber-500" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-timber-600">Specifications</span>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <h2 className="text-display-sm font-extrabold text-forest-900 mb-10">Technical Specifications</h2>
        </Reveal>
        <Reveal delay={2}>
          <div className="max-w-3xl">
            <div className="bg-white rounded-2xl overflow-hidden border border-charcoal-200/40">
              {product.specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`grid grid-cols-2 ${i !== product.specs.length - 1 ? 'border-b border-charcoal-200/30' : ''}`}
                >
                  <div className="px-6 py-4 font-semibold text-forest-900 bg-warm-100/50">{spec.label}</div>
                  <div className="px-6 py-4 text-charcoal-600">{spec.value}</div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-charcoal-400">
              Specifications are populated through CMS fields and can be updated by the Timsales team. Replace [Add specification] placeholders with verified technical data.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-warm-100 section-padding py-20">
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

      <CTABanner />
    </>
  );
}
