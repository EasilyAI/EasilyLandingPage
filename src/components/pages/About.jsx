import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Workflow, Bot, CheckCircle2, Linkedin } from 'lucide-react';

export const About = ({ t }) => {
  const navigate = useNavigate();
  
  return (
  <section className="py-24 bg-[#172736] text-white relative overflow-hidden">
    {/* Decorative background */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
       <div className="absolute right-0 top-0 w-96 h-96 bg-[#817DFF] rounded-full blur-[100px]"></div>
       <div className="absolute left-0 bottom-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px]"></div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tight font-display">{t.about.title}</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-[#817DFF] text-xl font-bold mb-4 flex items-center gap-2 font-mono">
                <Workflow size={20} /> {t.about.mission_title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">{t.about.mission_text}</p>
            </div>
            <div>
              <h3 className="text-[#817DFF] text-xl font-bold mb-4 flex items-center gap-2 font-mono">
                <Bot size={20} /> {t.about.founder_title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">{t.about.founder_text}</p>
            </div>
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <ul className="space-y-4">
                {t.about.values.map((val, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg font-medium text-white">
                    <CheckCircle2 className="text-[#817DFF] shrink-0" />
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button 
            onClick={() => navigate('/contact')}
            className="mt-12 bg-[#817DFF] hover:bg-[#6c68e3] text-white px-10 py-4 rounded-xl font-bold shadow-lg inline-flex items-center gap-2 transition-transform hover:scale-105"
          >
            {t.contact.form.submit}
          </button>
        </div>
        
        <div className="relative">
          <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
             <div className="aspect-[4/5] bg-gray-200 rounded-[2.3rem] overflow-hidden relative group">
                {/* Fallback image placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400">
                  <span className="text-center p-4 font-mono">Omer Lewinsky<br/>(Founder Image)</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-10 pt-32">
                  <h4 className="text-3xl font-bold text-white font-display">Omer Lewinsky</h4>
                  <p className="text-[#817DFF] font-medium font-mono mt-2">Founder & AI Architect</p>
                  <a href="https://www.linkedin.com/in/omer-lewinsky/" target="_blank" rel="noreferrer" className="inline-block mt-4 text-white/80 hover:text-white">
                    <Linkedin size={24} />
                  </a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

