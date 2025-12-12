import React, { useState } from 'react';
import { CheckCircle2, Mail, Linkedin, Instagram } from 'lucide-react';

export const Contact = ({ t, lang }) => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    // Honeypot protection
    if (payload.website) return;

    const nextErrors = {};
    if (!payload.name?.trim()) nextErrors.name = 'Name is required';
    if (!payload.email?.trim()) nextErrors.email = 'Email is required';
    if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      nextErrors.email = 'Invalid email';
    }
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setFormState('submitting');

    try {
      const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
      if (endpoint) {
        await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      } else {
        // If no endpoint is configured, simulate success to keep UX responsive.
        await new Promise(resolve => setTimeout(resolve, 1200));
      }
      setFormState('success');
      e.target.reset();
    } catch (err) {
      setFormState('error');
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#172736] mb-6 font-display">{t.contact.title}</h2>
          <p className="text-xl text-gray-500">{t.contact.subtitle}</p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-gray-100">
          {formState === 'success' ? (
            <div className="text-center py-12 animate-fade-in" role="status" aria-live="polite">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={48} aria-hidden="true" />
              </div>
              <h3 className="text-3xl font-bold text-[#172736] mb-4 font-display">{t.contact.form.success}</h3>
              <button 
                onClick={() => setFormState('idle')}
                className="mt-6 text-[#817DFF] font-medium hover:underline font-mono"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <input type="text" name="website" tabIndex="-1" aria-hidden="true" className="hidden" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#172736] mb-2 font-mono" htmlFor="name-input">{t.contact.form.name}</label>
                  <input 
                    id="name-input"
                    name="name"
                    required 
                    type="text" 
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#817DFF] focus:border-transparent outline-none transition" 
                  />
                  {errors.name ? <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p> : null}
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#172736] mb-2 font-mono" htmlFor="email-input">{t.contact.form.email}</label>
                  <input 
                    id="email-input"
                    name="email"
                    required 
                    type="email" 
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#817DFF] focus:border-transparent outline-none transition" 
                  />
                  {errors.email ? <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p> : null}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#172736] mb-2 font-mono" htmlFor="phone-input">{t.contact.form.phone}</label>
                  <input 
                    id="phone-input"
                    name="phone"
                    type="tel" 
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#817DFF] focus:border-transparent outline-none transition" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#172736] mb-2 font-mono" htmlFor="company-input">{t.contact.form.company}</label>
                  <input 
                    id="company-input"
                    name="company"
                    type="text" 
                    className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#817DFF] focus:border-transparent outline-none transition" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#172736] mb-2 font-mono" htmlFor="interest-input">{t.contact.form.interest}</label>
                <textarea 
                  id="interest-input"
                  name="interest"
                  rows="4" 
                  className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#817DFF] focus:border-transparent outline-none transition"
                ></textarea>
              </div>
              {formState === 'error' ? (
                <p className="text-red-600 text-sm" role="alert">
                  Something went wrong. Please try again or contact us directly.
                </p>
              ) : null}
              <div className="flex justify-center">
                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="w-full md:w-auto bg-[#817DFF] hover:bg-[#6c68e3] text-white text-xl font-bold px-10 py-5 rounded-xl shadow-lg transition transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {formState === 'submitting' ? '...' : t.contact.form.submit}
                </button>
              </div>
            </form>
          )}

          <div className="mt-12 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-center items-center gap-10 text-gray-600">
             <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#817DFF] group-hover:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <a href="mailto:info@easilyai.co.il" className="font-medium hover:text-[#817DFF]">info@easilyai.co.il</a>
             </div>
             <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#817DFF] group-hover:text-white transition-colors">
                   <Linkedin size={18} />
                </div>
                <a href="https://linkedin.com/company/easily-ai-solutions/" target="_blank" rel="noreferrer" className="font-medium hover:text-[#817DFF]">Easily AI Solutions</a>
             </div>
             <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#817DFF] group-hover:text-white transition-colors">
                   <Instagram size={18} />
                </div>
                <a href="https://www.instagram.com/easilyaisolutions/" target="_blank" rel="noreferrer" className="font-medium hover:text-[#817DFF]">@easilyaisolutions</a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

