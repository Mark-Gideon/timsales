import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Youtube, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { navLinks } from '@/data/content';
import { products } from '@/data/products';

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-warm-100">
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-11 h-11 rounded-lg">
                <img src="/assets/logos/logo-yellow.png" alt="TIMSALES Logo" className="w-10 h-10" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-white font-extrabold text-xl tracking-tight">TIMSALES</span>
                <span className="text-warm-100/60 text-[10px] font-medium uppercase tracking-[0.15em]">
                  Wood Products
                </span>
              </div>
            </Link>
            <p className="text-warm-100/70 text-sm leading-relaxed max-w-xs">
              Quality Wood Products. Built for Africa.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-timber-500 flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4 text-warm-100" />
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-timber-500 flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 text-warm-100" />
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-timber-500 flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 text-warm-100" />
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-timber-500 flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4 text-warm-100" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-warm-100/70 hover:text-timber-400 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Products</h3>
            <ul className="space-y-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link to={`/products/${product.slug}`} className="text-warm-100/70 hover:text-timber-400 text-sm transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-warm-100/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-timber-500" />
                <span>Elburgon, Molo Road — Head Office &amp; Factory</span>
              </li>
              <li className="flex items-center gap-3 text-warm-100/70 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-timber-500" />
                <span>0722 203 919 / 0723 945 279</span>
              </li>
              <li className="flex items-center gap-3 text-warm-100/70 text-sm">
                <Mail className="w-4 h-4 shrink-0 text-timber-500" />
                <span>info@timsales.com</span>
              </li>
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-5 text-timber-400 hover:text-timber-300 text-sm font-semibold transition-colors">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-100/50 text-xs">
            &copy; {new Date().getFullYear()} Timsales. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-warm-100/50 hover:text-warm-100 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-warm-100/50 hover:text-warm-100 text-xs transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
