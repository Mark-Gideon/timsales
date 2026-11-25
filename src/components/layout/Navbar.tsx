import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { navLinks } from '@/data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const isHome = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || !isHome
            ? 'bg-forest-900/95 backdrop-blur-md shadow-lg shadow-forest-950/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="section-padding h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg transition-colors">
              <img src="/assets/logos/logo-yellow.png" alt="TIMSALES Logo" className="w-10 h-10" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-extrabold text-xl tracking-tight">TIMSALES</span>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ${
                      active
                        ? 'text-timber-400'
                        : 'text-warm-100/80 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-forest-950/95 backdrop-blur-md" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-forest-900 shadow-2xl transition-transform duration-500 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-24 px-6 pb-8 h-full overflow-y-auto flex flex-col">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`block px-4 py-3.5 text-lg font-semibold rounded-lg transition-colors ${
                        active ? 'text-timber-400 bg-timber-500/10' : 'text-warm-100 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="mt-auto pt-8 space-y-3">
              <Link to="/contact" className="btn-primary w-full">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+254202034188" className="flex items-center gap-2 text-warm-100/70 text-sm px-4">
                <Phone className="w-4 h-4" />
                (020) 2034188 / 3573136
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
