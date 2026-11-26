import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselImage {
  src: string;
  caption?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  /** Tailwind classes controlling the width of each slide, e.g. "w-full" or "w-[85%] md:w-1/2 lg:w-1/3" */
  slideClassName?: string;
  aspectClassName?: string;
  autoPlayMs?: number;
  className?: string;
}

export default function ImageCarousel({
  images,
  slideClassName = 'w-full',
  aspectClassName = 'aspect-[4/3]',
  autoPlayMs = 4500,
  className = '',
}: ImageCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  const scrollByPage = useCallback((dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const step = first ? first.getBoundingClientRect().width + 16 : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    updateButtons();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);
    return () => {
      el.removeEventListener('scroll', updateButtons);
      window.removeEventListener('resize', updateButtons);
    };
  }, [updateButtons, images.length]);

  useEffect(() => {
    if (!autoPlayMs || images.length < 2) return;
    const id = window.setInterval(() => {
      const el = trackRef.current;
      if (!el || pausedRef.current) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      if (atEnd) el.scrollTo({ left: 0, behavior: 'smooth' });
      else scrollByPage(1);
    }, autoPlayMs);
    return () => window.clearInterval(id);
  }, [autoPlayMs, images.length, scrollByPage]);

  if (images.length === 0) return null;

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onTouchStart={() => (pausedRef.current = true)}
    >
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {images.map((img, i) => (
          <figure
            key={img.src}
            className={`snap-start shrink-0 ${slideClassName}`}
          >
            <div className={`relative ${aspectClassName} rounded-2xl overflow-hidden bg-forest-900 shadow-lg shadow-forest-950/10`}>
              {/* blurred backdrop so portrait photos still fill the frame */}
              <img
                src={img.src}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-60"
                loading="lazy"
              />
              <img
                src={img.src}
                alt={img.caption || `Timsales photo ${i + 1}`}
                className="relative w-full h-full object-contain"
                loading={i < 2 ? 'eager' : 'lazy'}
              />
              {img.caption && (
                <figcaption className="absolute left-0 right-0 bottom-0 px-4 py-3 bg-gradient-to-t from-forest-950/85 to-transparent text-white text-sm font-semibold">
                  {img.caption}
                </figcaption>
              )}
            </div>
          </figure>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => scrollByPage(-1)}
            disabled={!canPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-forest-900 shadow-md flex items-center justify-center hover:bg-timber-400 transition disabled:opacity-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => scrollByPage(1)}
            disabled={!canNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-forest-900 shadow-md flex items-center justify-center hover:bg-timber-400 transition disabled:opacity-0"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
}
