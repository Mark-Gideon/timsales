import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Products from '@/components/sections/Products';
import Manufacturing from '@/components/sections/Manufacturing';
import Quality from '@/components/sections/Quality';
import Applications from '@/components/sections/Applications';
import Sustainability from '@/components/sections/Sustainability';
import Markets from '@/components/sections/Markets';
// import Projects from '@/components/sections/Projects';
import WhyTimsales from '@/components/sections/WhyTimsales';
import IndustrialFacility from '@/components/sections/IndustrialFacility';
import CTABanner from '@/components/sections/CTABanner';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Manufacturing />
      <Quality />
      <Applications />
      <Sustainability />
      <Markets />
      {/* <Projects /> */}
      <WhyTimsales />
      <IndustrialFacility />
      <CTABanner />
    </>
  );
}
