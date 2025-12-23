import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Workflow, Bot, CheckCircle2, Linkedin, Award, Users, TrendingUp, Clock } from 'lucide-react';

// Credentials and achievements
const credentials = {
  he: [
    { icon: Clock, text: 'למעלה מ-10 שנות ניסיון בדאטה ואנליטיקה' },
    { icon: Users, text: 'עבודה עם עשרות עסקים קטנים ובינוניים' },
    { icon: TrendingUp, text: 'שיפור ממוצע של 40% בזמני תהליכים' },
    { icon: Award, text: 'התמחות בפתרונות AI מותאמים לשוק הישראלי' },
  ],
  en: [
    { icon: Clock, text: '10+ years experience in data & analytics' },
    { icon: Users, text: 'Worked with dozens of SMBs' },
    { icon: TrendingUp, text: 'Average 40% improvement in process times' },
    { icon: Award, text: 'Specialized in AI solutions for the Israeli market' },
  ]
};

// Testimonial/success snippet
const successStory = {
  he: {
    quote: 'תוך שבועיים מההטמעה, חסכנו כ-15 שעות עבודה שבועיות על תהליכי אדמיניסטרציה.',
    attribution: '— לקוח בתחום השירותים הפיננסיים'
  },
  en: {
    quote: 'Within two weeks of implementation, we saved about 15 hours per week on admin processes.',
    attribution: '— Financial services client'
  }
};

export const About = ({ t, withLangPath, lang = 'he' }) => {
  const navigate = useNavigate();
  const creds = credentials[lang] || credentials.he;
  const story = successStory[lang] || successStory.he;
  
  return (
  <section className="py-24 bg-[#172736] text-white relative overflow-hidden">
    {/* Decorative background */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" aria-hidden="true">
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
                <Workflow size={20} aria-hidden="true" /> {t.about.mission_title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">{t.about.mission_text}</p>
            </div>
            <div>
              <h3 className="text-[#817DFF] text-xl font-bold mb-4 flex items-center gap-2 font-mono">
                <Bot size={20} aria-hidden="true" /> {t.about.founder_title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">{t.about.founder_text}</p>
            </div>
            
            {/* Credentials/Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {creds.map((cred, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <cred.icon size={20} className="text-[#817DFF] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm text-gray-300">{cred.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <h4 className="text-white font-bold mb-4 font-display">
                {lang === 'he' ? 'הערכים שלנו' : 'Our Values'}
              </h4>
              <ul className="space-y-4">
                {t.about.values.map((val, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg font-medium text-white">
                    <CheckCircle2 className="text-[#817DFF] shrink-0" aria-hidden="true" />
                    {val}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Success Story / Testimonial */}
            <blockquote className="border-l-4 border-[#817DFF] pl-6 py-2">
              <p className="text-lg text-gray-300 italic mb-2">"{story.quote}"</p>
              <cite className="text-sm text-gray-400 not-italic">{story.attribution}</cite>
            </blockquote>
          </div>
          
          <button 
            onClick={() => navigate(withLangPath ? withLangPath('/contact') : '/contact')}
            className="mt-12 bg-[#817DFF] hover:bg-[#6c68e3] text-white px-10 py-4 rounded-xl font-bold shadow-lg inline-flex items-center gap-2 transition-transform hover:scale-105"
          >
            {t.contact.form.submit}
          </button>
        </div>
        
        <div className="relative">
          <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
             <div className="aspect-[4/5] bg-gray-200 rounded-[2.3rem] overflow-hidden relative group">
                {/* Fallback image placeholder */}
                <div 
                  className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-400"
                  role="img"
                  aria-label="Omer Lewinsky - Founder & AI Architect"
                >
                  <span className="text-center p-4 font-mono">Omer Lewinsky<br/>(Founder Image)</span>
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-10 pt-32">
                  <h4 className="text-3xl font-bold text-white font-display">Omer Lewinsky</h4>
                  <p className="text-[#817DFF] font-medium font-mono mt-2">
                    {lang === 'he' ? 'מייסד ואדריכל AI' : 'Founder & AI Architect'}
                  </p>
                  <a 
                    href="https://www.linkedin.com/in/omer-lewinsky/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-block mt-4 text-white/80 hover:text-white"
                    aria-label="Connect with Omer Lewinsky on LinkedIn"
                  >
                    <Linkedin size={24} aria-hidden="true" />
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

