import React, { useState } from 'react';
import { CheckCircle2, Mail, Linkedin, Instagram } from 'lucide-react';

export const Contact = ({ t, lang }) => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
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
            <div className="text-center py-12 animate-fade-in">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 size={48} />
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#172736] mb-2 font-mono">{t.contact.form.name}</label>
                  <input required type="text" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#817DFF] focus:border-transparent outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#172736] mb-2 font-mono">{t.contact.form.email}</label>
                  <input required type="email" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#817DFF] focus:border-transparent outline-none transition" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#172736] mb-2 font-mono">{t.contact.form.phone}</label>
                  <input type="tel" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#817DFF] focus:border-transparent outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#172736] mb-2 font-mono">{t.contact.form.company}</label>
                  <input type="text" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#817DFF] focus:border-transparent outline-none transition" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#172736] mb-2 font-mono">{t.contact.form.interest}</label>
                <textarea rows="4" className="w-full px-6 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#817DFF] focus:border-transparent outline-none transition"></textarea>
              </div>
              <button 
                type="submit" 
                disabled={formState === 'submitting'}
                className="w-full bg-[#817DFF] hover:bg-[#6c68e3] text-white text-xl font-bold py-5 rounded-xl shadow-lg transition transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {formState === 'submitting' ? '...' : t.contact.form.submit}
              </button>
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

