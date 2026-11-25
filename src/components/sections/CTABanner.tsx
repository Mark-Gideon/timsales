import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

export default function CTABanner() {
  return (
    <section className="bg-forest-900 section-padding py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-timber-500/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-timber-500/10 blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <Reveal>
          <h2 className="text-display-lg font-extrabold text-white text-balance">
            Looking for Reliable Wood Products?
          </h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="mt-5 text-lg text-warm-100/80 max-w-xl mx-auto">
            Talk to the Timsales team about your next project, order or distribution requirement.
          </p>
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline-light">
              <Mail className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
