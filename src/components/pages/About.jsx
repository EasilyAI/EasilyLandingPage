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
          <h1 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tight font-display">{t.about.title}</h1>
          <div className="space-y-12">
            <div>
              <h2 className="text-[#817DFF] text-xl font-bold mb-4 flex items-center gap-2 font-mono">
                <Workflow size={20} aria-hidden="true" /> {t.about.mission_title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">{t.about.mission_text}</p>
              {/* SEO Content - Hidden visually but available for search engines */}
              <div className="sr-only">
                <p>
                  {lang === 'en'
                    ? 'We focus on delivering AI solutions that solve real business problems. Whether it\'s automating customer service, streamlining internal processes, or building intelligent knowledge systems, every solution we create is designed to generate measurable results. We work closely with small and medium-sized businesses to understand their unique challenges and deliver customized AI implementations that fit their budget and scale.'
                    : 'אנחנו מתמקדים במסירת פתרונות AI שפותרים בעיות עסקיות אמיתיות. בין אם זה אוטומציה של שירות לקוחות, ייעול תהליכים פנימיים, או בניית מערכות ידע חכמות, כל פתרון שאנחנו יוצרים מתוכנן לייצר תוצאות מדידות. אנחנו עובדים בצמוד עם עסקים קטנים ובינוניים כדי להבין את האתגרים הייחודיים שלהם ולספק הטמעות AI מותאמות אישית שמתאימות לתקציב ולקנה המידה שלהם.'}
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-[#817DFF] text-xl font-bold mb-4 flex items-center gap-2 font-mono">
                <Bot size={20} aria-hidden="true" /> {t.about.founder_title}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">{t.about.founder_text}</p>
              {/* SEO Content - Hidden visually but available for search engines */}
              <div className="sr-only">
                <p>
                  {lang === 'en'
                    ? 'With over a decade of experience in data analytics and business intelligence, I\'ve seen firsthand how AI can transform operations when implemented correctly. However, I also noticed that many SMBs were being left behind because enterprise AI solutions were too complex, too expensive, or simply not designed for their needs. Easily AI was created to bridge that gap—offering sophisticated AI capabilities with the simplicity and affordability that small businesses require.'
                    : 'עם למעלה מעשור של ניסיון באנליטיקה עסקית ואינטליגנציה עסקית, ראיתי במו עיניי איך AI יכול לשנות פעילות כאשר הוא מיושם נכון. עם זאת, גם הבחנתי שרבים מהעסקים הקטנים והבינוניים נשארו מאחור כי פתרונות AI ברמת ארגון גדול היו מורכבים מדי, יקרים מדי, או פשוט לא תוכננו לצרכים שלהם. Easily AI נוצרה כדי לגשר על הפער הזה—מציעה יכולות AI מתוחכמות עם הפשטות והמחיר הנגיש שעסקים קטנים דורשים.'}
                </p>
              </div>
            </div>
            
            {/* SEO Content - Hidden visually but available for search engines */}
            <div className="sr-only">
              <h2>{lang === 'en' ? 'What does Easily AI do?' : 'מה Easily AI עושה?'}</h2>
              <p>
                {lang === 'en'
                  ? 'Easily AI helps small and medium businesses automate processes using custom GPT solutions, chatbots, and data systems. We provide AI automation for customer support, internal knowledge management, workflow optimization, and business analytics.'
                  : 'Easily AI עוזרת לעסקים קטנים ובינוניים לאוטמט תהליכים באמצעות פתרונות GPT מותאמים אישית, צ\'אטבוטים ומערכות נתונים. אנחנו מספקים אוטומציה מבוססת AI לשירות לקוחות, ניהול ידע פנימי, ייעול תהליכי עבודה ואנליטיקה עסקית.'}
              </p>
              
              <h2>{lang === 'en' ? 'Frequently Asked Questions' : 'שאלות נפוצות'}</h2>
              
              <div>
                <h3>{lang === 'en' ? 'Who is Easily AI for?' : 'מי Easily AI מיועדת?'}</h3>
                <p>
                  {lang === 'en'
                    ? 'Easily AI is designed for small and medium-sized businesses that want to improve efficiency, reduce costs, and scale operations without proportionally increasing overhead. We work with businesses across retail, professional services, healthcare, real estate, and e-commerce industries.'
                    : 'Easily AI מתוכננת עבור עסקים קטנים ובינוניים שרוצים לשפר יעילות, להפחית עלויות ולהרחיב פעילות ללא הגדלה פרופורציונלית של תקורה. אנחנו עובדים עם עסקים בקמעונאות, שירותים מקצועיים, בריאות, נדל"ן ומסחר אלקטרוני.'}
                </p>
              </div>
              
              <div>
                <h3>{lang === 'en' ? 'What problems does Easily AI solve?' : 'אילו בעיות Easily AI פותרת?'}</h3>
                <p>
                  {lang === 'en'
                    ? 'Easily AI solves common small business challenges including limited customer support hours, manual data entry errors, scattered organizational knowledge, and inability to scale operations efficiently. Our solutions provide 24/7 customer support, automated workflows, instant access to company knowledge, and data-driven insights.'
                    : 'Easily AI פותרת אתגרים נפוצים של עסקים קטנים כולל שעות תמיכה מוגבלות, טעויות בהזנת נתונים ידנית, ידע ארגוני מפוזר, וחוסר יכולת להרחיב פעילות ביעילות. הפתרונות שלנו מספקים שירות לקוחות 24/7, תהליכי עבודה אוטומטיים, גישה מיידית לידע החברה ותובנות מבוססות נתונים.'}
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
                <h3>{lang === 'en' ? 'Do I need technical knowledge to use Easily AI?' : 'האם אני צריך ידע טכני כדי להשתמש ב-Easily AI?'}</h3>
                <p>
                  {lang === 'en'
                    ? 'No technical knowledge is required. We handle all implementation, training, and ongoing support. Our solutions are designed to be user-friendly and integrate seamlessly with your existing systems.'
                    : 'לא נדרש ידע טכני. אנחנו מטפלים בכל ההטמעה, ההדרכה והתמיכה המתמשכת. הפתרונות שלנו מתוכננים להיות ידידותיים למשתמש ולהשתלב בצורה חלקה עם המערכות הקיימות שלכם.'}
                </p>
              </div>
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
                {/* Profile image */}
                <img 
                  src="/profile_image.png"
                  alt="Omer Lewinsky - Founder & AI Architect"
                  className="w-full h-full object-cover"
                />
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

