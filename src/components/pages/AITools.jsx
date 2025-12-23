import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, Clock3, Presentation } from 'lucide-react';

const iconMap = {
  notes: Clock3,
  presentation: Presentation,
  search: ShieldCheck,
  internal: ShieldCheck,
  chat: ShieldCheck,
  email: ShieldCheck,
  data: ShieldCheck,
  voice: Clock3,
  design: Presentation,
  analytics: ShieldCheck,
};

export const AITools = ({ t, lang = 'he' }) => {
  const tools = t.ai_tools.items;

  return (
    <section className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#F0F0FF] text-[#817DFF] font-bold text-xs font-mono uppercase tracking-wide">
            <Sparkles size={16} /> {t.ai_tools.tagline}
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-[#172736] mt-6 mb-4 font-display">
            {t.ai_tools.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t.ai_tools.subtitle}
          </p>
          
          {/* SEO Content Section - Hidden visually but available for search engines */}
          <div className="sr-only">
            <h2>{lang === 'en' ? 'What does Easily AI do?' : 'מה Easily AI עושה?'}</h2>
            <p>
              {lang === 'en'
                ? 'Easily AI helps small and medium businesses automate processes using custom GPT solutions, chatbots, and data systems. We provide AI automation for customer support, internal knowledge management, workflow optimization, and business analytics.'
                : 'Easily AI עוזרת לעסקים קטנים ובינוניים לאוטמט תהליכים באמצעות פתרונות GPT מותאמים אישית, צ\'אטבוטים ומערכות נתונים. אנחנו מספקים אוטומציה מבוססת AI לשירות לקוחות, ניהול ידע פנימי, ייעול תהליכי עבודה ואנליטיקה עסקית.'}
            </p>
            
            <h2>{lang === 'en' ? 'Frequently Asked Questions' : 'שאלות נפוצות'}</h2>
            
            <div>
              <h3>{lang === 'en' ? 'What AI tools does Easily AI recommend?' : 'אילו כלי AI Easily AI ממליצה?'}</h3>
              <p>
                {lang === 'en'
                  ? 'Easily AI recommends proven AI tools including Notta.ai for automated meeting transcription, GenSpark AI for presentation creation, and Base44 for building internal apps and automations. These tools are specifically selected for their value to small and medium businesses.'
                  : 'Easily AI ממליצה על כלי AI מוכחים כולל Notta.ai לתמלול פגישות אוטומטי, GenSpark AI ליצירת מצגות, ו-Base44 לבניית אפליקציות פנימיות ואוטומציות. הכלים האלה נבחרו במיוחד בשל הערך שלהם לעסקים קטנים ובינוניים.'}
              </p>
            </div>
            
            <div>
              <h3>{lang === 'en' ? 'How do AI tools help small businesses?' : 'איך כלי AI עוזרים לעסקים קטנים?'}</h3>
              <p>
                {lang === 'en'
                  ? 'AI tools help small businesses automate routine tasks, improve productivity, and deliver better customer experiences without extensive technical expertise or large budgets. Tools like automated meeting transcription save hours of note-taking, AI presentation builders create professional decks in minutes, and internal app builders enable custom workflows without coding.'
                  : 'כלי AI עוזרים לעסקים קטנים לאוטמט משימות שגרתיות, לשפר פרודוקטיביות ולספק חוויות לקוח טובות יותר ללא ידע טכני נרחב או תקציבים גדולים. כלים כמו תמלול פגישות אוטומטי חוסכים שעות של רישום הערות, בוני מצגות מבוססי AI יוצרים מצגות מקצועיות תוך דקות, ובוני אפליקציות פנימיות מאפשרים תהליכי עבודה מותאמים אישית ללא קוד.'}
              </p>
            </div>
            
            <div>
              <h3>{lang === 'en' ? 'How long does AI implementation take?' : 'כמה זמן לוקח להטמיע AI?'}</h3>
              <p>
                {lang === 'en'
                  ? 'Most projects take 2-6 weeks, depending on scope. Simple chatbot implementations can be completed in 2-3 weeks, while more complex knowledge management systems may take 4-6 weeks.'
                  : 'רוב הפרויקטים לוקחים 2-6 שבועות, תלוי בהיקף. הטמעות צ\'אטבוט פשוטות יכולות להסתיים תוך 2-3 שבועות, בעוד שמערכות ניהול ידע מורכבות יותר עשויות לקחת 4-6 שבועות.'}
              </p>
            </div>
            
            <div>
              <h3>{lang === 'en' ? 'Do I need technical knowledge to use these AI tools?' : 'האם אני צריך ידע טכני כדי להשתמש בכלי AI האלה?'}</h3>
              <p>
                {lang === 'en'
                  ? 'Most recommended AI tools are designed to be user-friendly and require minimal technical knowledge. However, Easily AI can help with tool selection, integration into your business processes, and custom implementation if needed.'
                  : 'רוב כלי ה-AI המומלצים מתוכננים להיות ידידותיים למשתמש ודורשים ידע טכני מינימלי. עם זאת, Easily AI יכולה לעזור בבחירת כלים, אינטגרציה לתהליכי העסק שלכם, והטמעה מותאמת אישית במידת הצורך.'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {tools.map((tool) => {
            const Icon = iconMap[tool.icon] || ShieldCheck;
            return (
              <div
                key={tool.id}
                className="relative overflow-hidden px-6 py-5 md:px-8 md:py-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#817DFF] transition-all duration-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8"
              >
                <div className="absolute -top-16 -right-10 w-40 h-40 bg-[#817DFF] opacity-10 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-[#172736] opacity-5 blur-3xl pointer-events-none" />

                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#817DFF] to-[#172736] text-white flex items-center justify-center shadow-md shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0F0FF] text-[#172736] text-xs font-bold font-mono uppercase tracking-wide">
                      {tool.category}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl md:text-2xl font-black text-[#172736] font-display leading-tight">{tool.name}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">{tool.description}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-5 self-stretch md:self-auto">
                  <div className="text-gray-600 text-xs font-mono whitespace-nowrap">{tool.price}</div>
                  <button
                    onClick={() => window.open(tool.link, '_blank')}
                  className="inline-flex items-center justify-center gap-2 bg-[#172736] text-white px-5 py-3 rounded-xl font-bold shadow-md hover:bg-[#2a415f] transition-colors text-sm md:text-base whitespace-nowrap"
                  >
                    {t.ai_tools.try_label} <ArrowRight size={14} className="rtl:rotate-180" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="text-gray-600 mb-4">{t.ai_tools.help_text}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#817DFF] hover:bg-[#6c68e3] text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-colors"
          >
            {t.ai_tools.cta_button} <ArrowRight size={18} className="rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
};

