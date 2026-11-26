import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import ProductDetail from '@/pages/ProductDetail';
import Manufacturing from '@/pages/Manufacturing';
import Sustainability from '@/pages/Sustainability';
import Markets from '@/pages/Markets';
// import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/flush-doors" element={<Navigate to="/products/doors" replace />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/markets" element={<Markets />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
