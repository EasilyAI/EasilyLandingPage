import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

// Localized footer content
const footerContent = {
  he: {
    tagline: 'מובילים עסקים לעידן ה-AI עם אוטומציה חכמה ואסטרטגיית נתונים.',
    services: 'שירותים',
    allServices: 'כל השירותים',
    chatbots: 'צ׳אטבוטים וסוכני AI',
    automation: 'אוטומציות',
    dataStrategy: 'אסטרטגיית דאטה',
    contact: 'צור קשר',
    contactUs: 'דברו איתנו',
    legal: 'משפטי',
    privacy: 'מדיניות פרטיות',
    terms: 'תנאי שימוש',
    rights: 'כל הזכויות שמורות.',
    madeWith: 'נבנה לצמיחה עסקית'
  },
  en: {
    tagline: 'Transforming businesses with intelligent automation and data strategies.',
    services: 'Services',
    allServices: 'All Services',
    chatbots: 'Chatbots & AI Agents',
    automation: 'Automations',
    dataStrategy: 'Data Strategy',
    contact: 'Contact',
    contactUs: 'Contact Us',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    rights: 'All rights reserved.',
    madeWith: 'Designed for Business Growth'
  }
};

export const Footer = ({ t, withLangPath, lang = 'he' }) => {
  const ft = footerContent[lang] || footerContent.he;
  
  return (
    <footer className="bg-[#172736] text-gray-400 py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray-700 pb-12">
          <div className="col-span-1 md:col-span-1">
            <Link 
              to={withLangPath ? withLangPath('/') : '/'} 
              className="text-2xl font-black text-white mb-6 tracking-wider font-display block hover:text-[#817DFF] transition-colors"
              aria-label="Easily AI - Home"
            >
              EASILY AI
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              {ft.tagline}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/company/easily-ai-solutions/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin aria-hidden="true" />
              </a>
              <a 
                href="https://www.instagram.com/easilyaisolutions/" 
                target="_blank" 
                rel="noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram aria-hidden="true" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg font-display">{ft.services}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to={withLangPath ? withLangPath('/services') : '/services'} className="hover:text-[#817DFF] transition-colors">
                  {ft.allServices}
                </Link>
              </li>
              <li>
                <Link to={withLangPath ? withLangPath('/ai-tools') : '/ai-tools'} className="hover:text-[#817DFF] transition-colors">
                  {t?.nav?.ai_tools || 'AI Tools'}
                </Link>
              </li>
              <li>
                <Link to={withLangPath ? withLangPath('/services/chatbots') : '/services/chatbots'} className="hover:text-[#817DFF] transition-colors">
                  {ft.chatbots}
                </Link>
              </li>
              <li>
                <Link to={withLangPath ? withLangPath('/services/automation') : '/services/automation'} className="hover:text-[#817DFF] transition-colors">
                  {ft.automation}
                </Link>
              </li>
              <li>
                <Link to={withLangPath ? withLangPath('/services/infrastructure') : '/services/infrastructure'} className="hover:text-[#817DFF] transition-colors">
                  {ft.dataStrategy}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg font-display">{ft.contact}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to={withLangPath ? withLangPath('/contact') : '/contact'} className="hover:text-[#817DFF] transition-colors">
                  {ft.contactUs}
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} aria-hidden="true" className="text-[#817DFF]" />
                <a href="mailto:info@easilyai.co.il" className="hover:text-[#817DFF] transition-colors">
                  info@easilyai.co.il
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} aria-hidden="true" className="text-[#817DFF]" />
                <span>{lang === 'he' ? 'תל אביב, ישראל' : 'Tel Aviv, Israel'}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} aria-hidden="true" className="text-[#817DFF]" />
                <a href="tel:+972501234567" className="hover:text-[#817DFF] transition-colors">
                  050-123-4567
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-lg font-display">{ft.legal}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to={withLangPath ? withLangPath('/privacy') : '/privacy'} className="hover:text-[#817DFF] transition-colors">
                  {ft.privacy}
                </Link>
              </li>
              <li>
                <Link to={withLangPath ? withLangPath('/terms') : '/terms'} className="hover:text-[#817DFF] transition-colors">
                  {ft.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-sm flex flex-col md:flex-row justify-between items-center font-mono">
          <span>&copy; {new Date().getFullYear()} Easily AI. {ft.rights}</span>
          <span className="mt-2 md:mt-0 opacity-50">{ft.madeWith}</span>
        </div>
      </div>
    </footer>
  );
};

