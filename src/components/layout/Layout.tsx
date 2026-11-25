import { type ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-warm-50">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />

      <Link
        to="/contact"
        className="lg:hidden fixed bottom-5 right-5 z-40 btn-primary shadow-xl shadow-timber-500/40 px-5 py-3"
      >
        Get in Touch
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
