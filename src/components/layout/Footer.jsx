import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram } from 'lucide-react';

export const Footer = ({ t }) => (
  <footer className="bg-[#172736] text-gray-400 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray-700 pb-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="text-2xl font-black text-white mb-6 tracking-wider font-display block hover:text-[#817DFF] transition-colors">EASILY AI</Link>
          <p className="text-sm leading-relaxed mb-6">
            Transforming businesses with intelligent automation and data strategies.
          </p>
          <div className="flex gap-4">
            <a href="https://linkedin.com/company/easily-ai-solutions/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin /></a>
            <a href="https://www.instagram.com/easilyaisolutions/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Instagram /></a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-lg font-display">{t.nav.services}</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services" className="hover:text-[#817DFF] transition-colors">All Services</Link></li>
            <li className="hover:text-[#817DFF] cursor-pointer">Chatbots</li>
            <li className="hover:text-[#817DFF] cursor-pointer">Automation</li>
            <li className="hover:text-[#817DFF] cursor-pointer">Data Strategy</li>
          </ul>
        </div>
        <div>
           <h4 className="text-white font-bold mb-6 text-lg font-display">{t.nav.contact}</h4>
           <ul className="space-y-3 text-sm">
             <li><Link to="/contact" className="hover:text-[#817DFF] transition-colors">Contact Us</Link></li>
             <li>info@easilyai.co.il</li>
             <li>Tel Aviv, Israel</li>
             <li>050-1234567</li>
           </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 text-lg font-display">Legal</h4>
          <ul className="space-y-3 text-sm">
             <li className="hover:text-[#817DFF] cursor-pointer">Privacy Policy</li>
             <li className="hover:text-[#817DFF] cursor-pointer">Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm flex flex-col md:flex-row justify-between items-center font-mono">
        <span>&copy; {new Date().getFullYear()} Easily AI. All rights reserved.</span>
        <span className="mt-2 md:mt-0 opacity-50">Designed for Business Growth</span>
      </div>
    </div>
  </footer>
);

