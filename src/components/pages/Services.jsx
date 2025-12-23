import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { IconMap } from '../ui/IconMap';

export const Services = ({ t, onSelectService, withLangPath, lang = 'he' }) => {
  const navigate = useNavigate();
  
  const handleServiceClick = (service) => {
    if (onSelectService) {
      onSelectService(service);
    } else {
      const target = withLangPath ? withLangPath(`/services/${service.id}`) : `/services/${service.id}`;
      navigate(target);
    }
  };
  
  return (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h1 className="text-3xl md:text-5xl font-black text-[#172736] mb-6 font-display">{t.services.title}</h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-8">{t.services.subtitle}</p>
        
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
            <h3>{lang === 'en' ? 'What AI solutions does Easily AI offer?' : 'אילו פתרונות AI Easily AI מציעה?'}</h3>
            <p>
              {lang === 'en'
                ? 'Easily AI offers AI chatbots for customer support, GPT-based internal knowledge systems (RAG), workflow automation, call analytics, data strategy, and real-time web agents. All solutions are customized for small and medium businesses.'
                : 'Easily AI מציעה צ\'אטבוטים מבוססי AI לשירות לקוחות, מערכות ידע פנימיות מבוססות GPT (RAG), אוטומציה של תהליכי עבודה, אנליטיקה של שיחות, אסטרטגיית נתונים וסוכני רשת בזמן אמת. כל הפתרונות מותאמים אישית לעסקים קטנים ובינוניים.'}
            </p>
          </div>
          
          <div>
            <h3>{lang === 'en' ? 'How do AI chatbots help small businesses?' : 'איך צ\'אטבוטים מבוססי AI עוזרים לעסקים קטנים?'}</h3>
            <p>
              {lang === 'en'
                ? 'AI chatbots provide 24/7 customer support without additional staff costs. They handle inquiries, process orders, schedule appointments, and close sales using natural language understanding. This allows small businesses to compete with larger companies while maintaining personalized customer service.'
                : 'צ\'אטבוטים מבוססי AI מספקים שירות לקוחות 24/7 ללא עלויות צוות נוסף. הם מטפלים בשאלות, מעבדים הזמנות, קובעים פגישות וסוגרים מכירות באמצעות הבנת שפה טבעית. זה מאפשר לעסקים קטנים להתחרות עם חברות גדולות תוך שמירה על שירות לקוחות מותאם אישית.'}
            </p>
          </div>
          
          <div>
            <h3>{lang === 'en' ? 'What is a GPT-based knowledge system?' : 'מה זו מערכת ידע מבוססת GPT?'}</h3>
            <p>
              {lang === 'en'
                ? 'A GPT-based knowledge system (RAG) is an internal search engine that uses your company data to answer employee questions instantly. Employees ask questions in natural language and receive accurate answers with source citations. This reduces time spent searching for information and ensures everyone has access to the latest policies and procedures.'
                : 'מערכת ידע מבוססת GPT (RAG) היא מנוע חיפוש פנימי שמשתמש בנתוני החברה שלכם כדי לענות על שאלות עובדים באופן מיידי. עובדים שואלים שאלות בשפה טבעית ומקבלים תשובות מדויקות עם ציטוטי מקור. זה מפחית את הזמן המושקע בחיפוש מידע ומבטיח שלכולם יש גישה למדיניות ונהלים עדכניים.'}
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
            <h3>{lang === 'en' ? 'What industries does Easily AI serve?' : 'אילו תעשיות Easily AI משרתת?'}</h3>
            <p>
              {lang === 'en'
                ? 'Easily AI works with small and medium businesses across various industries including retail, professional services, healthcare, real estate, and e-commerce. Our AI solutions are adaptable to any industry that needs process automation and improved customer service.'
                : 'Easily AI עובדת עם עסקים קטנים ובינוניים במגוון תעשיות כולל קמעונאות, שירותים מקצועיים, בריאות, נדל"ן ומסחר אלקטרוני. פתרונות ה-AI שלנו ניתנים להתאמה לכל תעשייה שצריכה אוטומציה של תהליכים ושיפור שירות לקוחות.'}
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.services.items.map((item, index) => (
          <div 
            key={index} 
            onClick={() => handleServiceClick(item)}
            className="group p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-[#817DFF] shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col h-full"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#817DFF] mb-6 border border-gray-50 group-hover:scale-110 transition-transform">
                <IconMap name={item.icon} className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#172736] mb-4 font-display">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3">{item.short_desc}</p>
              <div className="mt-auto text-[#817DFF] font-bold flex items-center gap-2 text-sm font-mono group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform">
                {t.services.read_more} <ArrowRight size={16} className="rtl:rotate-180" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

