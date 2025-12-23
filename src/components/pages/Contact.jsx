import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Mail, Linkedin, Instagram, Shield, Lock } from 'lucide-react';

export const Contact = ({ t, lang }) => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});
  const [activeTab, setActiveTab] = useState('book'); // book | form
  const calendlyUrl = 'https://calendly.com/omer-easilyai/free-ai-consultation';
  const calendlyRef = useRef(null);
  const subtitleText = lang === 'he'
    ? 'קבעו פגישה או השאירו פרטים ונחזור אליכם.'
    : 'Book a slot , or leave details and we’ll follow up.';

  useEffect(() => {
    const calendlyScriptSrc = 'https://assets.calendly.com/assets/external/widget.js';
    const existingScript = document.querySelector(`script[src="${calendlyScriptSrc}"]`);
    if (existingScript) return;

    const script = document.createElement('script');
    script.src = calendlyScriptSrc;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (activeTab !== 'book') return;
    if (!calendlyRef.current) return;
    if (calendlyRef.current.querySelector('iframe')) return; // already initialized
    if (window.Calendly?.initInlineWidget) {
      window.Calendly.initInlineWidget({
        url: `${calendlyUrl}?hide_landing_page_details=1&primary_color=817DFF&text_color=172736`,
        parentElement: calendlyRef.current,
      });
    }
  }, [activeTab, calendlyUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    // Honeypot protection
    if (payload.website) return;

    const nextErrors = {};
    if (!payload.name?.trim()) nextErrors.name = lang === 'he' ? 'שדה חובה' : 'Name is required';
    if (!payload.email?.trim()) nextErrors.email = lang === 'he' ? 'שדה חובה' : 'Email is required';
    if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      nextErrors.email = lang === 'he' ? 'כתובת אימייל לא תקינה' : 'Invalid email';
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
    <section className="pt-8 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-black text-[#172736] mb-3 font-display">{t.contact.title}</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">{subtitleText}</p>
          
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
              <h3>{lang === 'en' ? 'How long does AI implementation take?' : 'כמה זמן לוקח להטמיע AI?'}</h3>
              <p>
                {lang === 'en'
                  ? 'Most projects take 2-6 weeks, depending on scope. Simple chatbot implementations can be completed in 2-3 weeks, while more complex knowledge management systems may take 4-6 weeks.'
                  : 'רוב הפרויקטים לוקחים 2-6 שבועות, תלוי בהיקף. הטמעות צ\'אטבוט פשוטות יכולות להסתיים תוך 2-3 שבועות, בעוד שמערכות ניהול ידע מורכבות יותר עשויות לקחת 4-6 שבועות.'}
              </p>
            </div>
            <div>
              <h3>{lang === 'en' ? 'What types of businesses does Easily AI work with?' : 'עם אילו סוגי עסקים Easily AI עובדת?'}</h3>
              <p>
                {lang === 'en'
                  ? 'We work with small and medium-sized businesses across various industries including retail, professional services, healthcare, real estate, and e-commerce. Our solutions are designed for businesses that want to improve efficiency and scale operations without proportionally increasing costs.'
                  : 'אנחנו עובדים עם עסקים קטנים ובינוניים במגוון תעשיות כולל קמעונאות, שירותים מקצועיים, בריאות, נדל"ן ומסחר אלקטרוני. הפתרונות שלנו מתוכננים עבור עסקים שרוצים לשפר יעילות ולהרחיב פעילות ללא הגדלה פרופורציונלית של עלויות.'}
              </p>
            </div>
            <div>
              <h3>{lang === 'en' ? 'Do I need technical knowledge to use Easily AI solutions?' : 'האם אני צריך ידע טכני כדי להשתמש בפתרונות Easily AI?'}</h3>
              <p>
                {lang === 'en'
                  ? 'No technical knowledge is required. We handle all implementation, training, and ongoing support. Our solutions are designed to be user-friendly and integrate seamlessly with your existing systems.'
                  : 'לא נדרש ידע טכני. אנחנו מטפלים בכל ההטמעה, ההדרכה והתמיכה המתמשכת. הפתרונות שלנו מתוכננים להיות ידידותיים למשתמש ולהשתלב בצורה חלקה עם המערכות הקיימות שלכם.'}
              </p>
            </div>
            <div>
              <h3>{lang === 'en' ? 'How much does AI implementation cost?' : 'כמה עולה הטמעת AI?'}</h3>
              <p>
                {lang === 'en'
                  ? 'Costs vary based on project scope and requirements. We offer a free consultation to assess your needs and provide a detailed quote. Most small business implementations start from affordable monthly packages.'
                  : 'העלויות משתנות בהתאם להיקף הפרויקט והדרישות. אנחנו מציעים ייעוץ חינם כדי להעריך את הצרכים שלכם ולספק הצעת מחיר מפורטת. רוב ההטמעות לעסקים קטנים מתחילות מחבילות חודשיות במחיר נגיש.'}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-gray-100">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6 mb-6">
            <div className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-gray-50/90 p-1.5 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTab('book')}
                className={`px-5 py-3 text-sm md:text-base font-bold rounded-xl transition shadow-sm ${activeTab === 'book' ? 'bg-white text-[#172736] ring-1 ring-[#817DFF]/30 shadow-md' : 'text-gray-500 hover:text-[#172736]'}`}
              >
                {lang === 'he' ? 'שריינו פגישה' : 'Book a meeting'}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('form')}
                className={`px-5 py-3 text-sm md:text-base font-bold rounded-xl transition shadow-sm ${activeTab === 'form' ? 'bg-white text-[#172736] ring-1 ring-[#817DFF]/30 shadow-md' : 'text-gray-500 hover:text-[#172736]'}`}
              >
                {lang === 'he' ? 'השאירו פרטים' : 'Leave details'}
              </button>
            </div>
            <p className="text-sm text-gray-500">
              {activeTab === 'book'
                ? (lang === 'he' ? 'קבעו זמן ביומן שלנו דרך Calendly.' : 'Schedule instantly via Calendly.')
                : (lang === 'he' ? 'לא מסתדר לכם עכשיו? השאירו פרטים ונחזור.' : 'Prefer async? Leave details and we’ll reply.')}
            </p>
          </div>

          <div className="space-y-6">
            <div
              aria-hidden={activeTab !== 'book'}
              className={`${activeTab === 'book' ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'} transition-opacity duration-150 rounded-[1.75rem] bg-[#F8F8FF] border border-gray-100 p-6 md:p-8 shadow-sm`}
              style={{ position: activeTab === 'book' ? 'relative' : 'absolute' }}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6 mb-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#817DFF] font-bold text-xs font-mono uppercase tracking-wide shadow-sm">
                  {lang === 'he' ? 'שריינו זמן ביומן' : 'Book a slot'}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {lang === 'he' 
                    ? 'בחרו שעה שנוחה לכם ואשרו בלחיצה אחת.'
                    : 'Pick a time that works for you and confirm in one click.'}
                </div>
              </div>
              <div
                ref={calendlyRef}
                className="calendly-inline-widget w-full rounded-xl overflow-hidden"
                data-url={`${calendlyUrl}?hide_landing_page_details=1&primary_color=817DFF&text_color=172736`}
                style={{ minWidth: '320px', height: '860px' }}
              />
            </div>

            <div
              aria-hidden={activeTab !== 'form'}
              className={`${activeTab === 'form' ? 'opacity-100' : 'opacity-0 pointer-events-none absolute inset-0'} transition-opacity duration-150`}
              style={{ position: activeTab === 'form' ? 'relative' : 'absolute' }}
            >
              {formState === 'success' ? (
                <div className="text-center py-12 animate-fade-in" role="status" aria-live="polite">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={48} aria-hidden="true" />
                  </div>
                  <h3 className="text-3xl font-bold text-[#172736] mb-4 font-display">{t.contact.form.success}</h3>
                  <p className="text-gray-600 mb-6">
                    {lang === 'he' 
                      ? 'צפו להודעה מאיתנו תוך 24 שעות עם מועד לפגישת הייעוץ שלכם.'
                      : 'Expect to hear from us within 24 hours with your consultation meeting time.'}
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-6 text-[#817DFF] font-medium hover:underline font-mono"
                  >
                    {lang === 'he' ? 'שליחת הודעה נוספת' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <input type="text" name="website" tabIndex="-1" aria-hidden="true" className="hidden" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[#172736] mb-2 font-mono" htmlFor="name-input">
                        {t.contact.form.name} <span className="text-[#817DFF]">*</span>
                      </label>
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
                      <label className="block text-sm font-bold text-[#172736] mb-2 font-mono" htmlFor="email-input">
                        {t.contact.form.email} <span className="text-[#817DFF]">*</span>
                      </label>
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
                      {lang === 'he' 
                        ? 'משהו השתבש. אנא נסו שוב או צרו קשר ישירות.'
                        : 'Something went wrong. Please try again or contact us directly.'}
                    </p>
                  ) : null}
                  
                  {/* Privacy Notice */}
                  <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <Lock size={18} className="text-[#817DFF] mt-0.5 shrink-0" aria-hidden="true" />
                    <p className="text-sm text-gray-600">
                      {t.contact.form.privacy}
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <button 
                      type="submit" 
                      disabled={formState === 'submitting'}
                      className="w-full md:w-auto bg-[#817DFF] hover:bg-[#6c68e3] text-white text-xl font-bold px-10 py-5 rounded-xl shadow-lg transition transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed mt-4 flex items-center justify-center gap-2"
                    >
                      <Shield size={20} aria-hidden="true" />
                      {formState === 'submitting' ? '...' : t.contact.form.submit}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

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

