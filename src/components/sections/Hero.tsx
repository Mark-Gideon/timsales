import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/images/about_us.jpg"
          alt="Industrial timber processing facility with workers operating machinery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      <div className="relative z-10 section-padding pt-32 pb-20 w-full">
        <div className="max-w-5xl">
          <div className="flex items-center gap-3 mb-6 animate-fade-in-down">
            <span className="h-px w-10 bg-timber-500" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-timber-400">
              Kenyan Wood Manufacturing
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[0.95] tracking-tight animate-fade-in-up">
            WOOD PRODUCTS
            <br />
            BUILT FOR AFRICA.
          </h1>

          <p className="mt-6 text-base md:text-lg text-warm-100/85 max-w-2xl leading-relaxed animate-fade-in-up [animation-delay:0.2s]">
            From timber to engineered wood products, we manufacture materials that build homes,
            businesses and industries across Africa.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.4s]">
            <Link to="/products" className="btn-primary">
              Explore Our Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline-light">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-warm-100/50 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-warm-100/30 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-timber-400 rounded-full animate-scroll-indicator" />
        </div>
        <ChevronDown className="w-4 h-4 text-warm-100/40" />
      </div>
    </section>
  );
}
