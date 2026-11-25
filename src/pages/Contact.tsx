import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { locations } from '@/data/content';
import { products } from '@/data/products';

export default function Contact() {
  const location = useLocation();
  const state = location.state as { product?: string } | null;
  const preselectedProduct = state?.product || '';

  const [form, setForm] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product: preselectedProduct,
    quantity: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedProduct) {
      setForm((prev) => ({ ...prev, product: preselectedProduct }));
    }
  }, [preselectedProduct]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.fullName.trim()) e.fullName = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email';
    if (!form.message.trim()) e.message = 'Please tell us about your requirements';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const e_ = validate();
    if (Object.keys(e_).length > 0) {
      setErrors(e_);
      return;
    }
    setErrors({});
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setForm({
        fullName: '', company: '', email: '', phone: '', country: '',
        product: '', quantity: '', message: '',
      });
    }, 1200);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Request a Quote</>}
        description="Talk to the Timsales team about your next project, order or distribution requirement. Fill out the form below and our team will get back to you."
        image="/assets/images/lorry.jpg"
      />

      <section className="bg-warm-50 section-padding py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-3">
            <SectionHeading
              eyebrow="Enquiry Form"
              title={<>Tell Us What You Need</>}
              description="Fill in the form below with your requirements. Fields marked with * are required."
            />

            {status === 'success' ? (
              <Reveal delay={1}>
                <div className="mt-8 p-8 bg-forest-100 rounded-2xl border border-forest-200 text-center">
                  <CheckCircle2 className="w-12 h-12 text-forest-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-forest-900">Thank You for Your Enquiry</h3>
                  <p className="mt-2 text-charcoal-600">
                    Your message has been received. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary mt-6"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </Reveal>
            ) : (
              <Reveal delay={1}>
                <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      label="Full Name *"
                      value={form.fullName}
                      onChange={(v) => handleChange('fullName', v)}
                      error={errors.fullName}
                      placeholder="Your name"
                    />
                    <FormField
                      label="Company"
                      value={form.company}
                      onChange={(v) => handleChange('company', v)}
                      placeholder="Company name"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      label="Email *"
                      type="email"
                      value={form.email}
                      onChange={(v) => handleChange('email', v)}
                      error={errors.email}
                      placeholder="you@example.com"
                    />
                    <FormField
                      label="Phone"
                      type="tel"
                      value={form.phone}
                      onChange={(v) => handleChange('phone', v)}
                      placeholder="+254 ..."
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      label="Country"
                      value={form.country}
                      onChange={(v) => handleChange('country', v)}
                      placeholder="Kenya"
                    />
                    <div>
                      <label className="block text-sm font-semibold text-forest-900 mb-1.5">
                        Product Interested In
                      </label>
                      <select
                        value={form.product}
                        onChange={(e) => handleChange('product', e.target.value)}
                        className="w-full px-4 py-3 bg-white rounded-lg border border-charcoal-200 text-charcoal-700 focus:outline-none focus:ring-2 focus:ring-timber-400 focus:border-transparent transition-all"
                      >
                        <option value="">Select a product</option>
                        {products.map((p) => (
                          <option key={p.slug} value={p.name}>{p.name}</option>
                        ))}
                        <option value="Other">Other / Multiple Products</option>
                      </select>
                    </div>
                  </div>
                  <FormField
                    label="Quantity / Requirements"
                    value={form.quantity}
                    onChange={(v) => handleChange('quantity', v)}
                    placeholder="e.g. 500 sheets of 18mm plywood"
                  />
                  <div>
                    <label className="block text-sm font-semibold text-forest-900 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={5}
                      placeholder="Tell us about your project or requirements..."
                      className={`w-full px-4 py-3 bg-white rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-timber-400 focus:border-transparent ${
                        errors.message ? 'border-red-400' : 'border-charcoal-200'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="btn-primary w-full md:w-auto disabled:opacity-60"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </Reveal>
            )}
          </div>

          <div className="lg:col-span-2">
            <Reveal delay={2}>
              <div className="bg-forest-900 rounded-2xl p-7 lg:p-8 sticky top-28">
                <h3 className="text-white font-bold text-lg mb-5">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-timber-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-warm-100/60 text-xs uppercase tracking-wider">Phone</div>
                      <div className="text-white text-sm mt-0.5">0722 203 961 / 0733 333 307</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-timber-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-warm-100/60 text-xs uppercase tracking-wider">Email</div>
                      <div className="text-white text-sm mt-0.5">info@timsales.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-timber-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-warm-100/60 text-xs uppercase tracking-wider">Nairobi Office</div>
                      <div className="text-white text-sm mt-0.5">Enterprise Road, Industrial Area, Nairobi, Kenya</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-warm-100/50 text-xs leading-relaxed">
                    Our Elburgon head office and Nairobi office serve customers across Kenya and international markets.
                  </p>
                </div>
                <img
                  src="/assets/images/5577437979198775261.png"
                  alt="Official Timsales contact details and company identity"
                  className="mt-6 w-full rounded-lg bg-timber-400 object-contain aspect-[16/9]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-warm-100 section-padding py-20 lg:py-28">
        <SectionHeading
          eyebrow="Our Locations"
          title={<>Find Us Across Kenya</>}
          description="Timsales operates from multiple locations across Kenya — from our manufacturing facility to regional distribution offices."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <Reveal key={loc.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="p-6 bg-white rounded-2xl border border-charcoal-200/40 card-hover h-full">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-forest-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-forest-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-forest-900 text-lg">{loc.name}</h3>
                    <div className="text-xs font-semibold text-timber-600 uppercase tracking-wider mt-0.5">
                      {loc.role}
                    </div>
                  </div>
                </div>
                <div className="mt-4 space-y-2.5 text-sm">
                  <div className="text-charcoal-500 leading-relaxed">{loc.address}</div>
                  <div className="flex items-center gap-2 text-charcoal-500">
                    <Phone className="w-4 h-4 text-timber-500" />
                    {loc.phone}
                  </div>
                  <div className="flex items-center gap-2 text-charcoal-500">
                    <Mail className="w-4 h-4 text-timber-500" />
                    {loc.email}
                  </div>
                </div>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-4 text-timber-600 hover:text-timber-700 text-sm font-semibold transition-colors"
                >
                  View on Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* <Reveal delay={3}>
          <div className="mt-10 p-6 bg-warm-50 rounded-2xl border border-charcoal-200/40">
            <p className="text-charcoal-500 text-sm leading-relaxed">
              Location and contact details shown above use placeholders. Replace with verified information for each location before publishing. Verify phone numbers, email addresses and physical addresses with the Timsales team.
            </p>
          </div>
        </Reveal> */}
      </section>
    </>
  );
}

function FormField({
  label,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-forest-900 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full px-4 py-3 bg-white rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-timber-400 focus:border-transparent ${
          error ? 'border-red-400' : 'border-charcoal-200'
        }`}
      />
      {error && (
        <p className="mt-1.5 text-sm text-red-500 flex items-center gap-1.5">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
}
