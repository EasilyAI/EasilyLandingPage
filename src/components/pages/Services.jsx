import React from 'react';
import { ArrowRight } from 'lucide-react';
import { IconMap } from '../ui/IconMap';

export const Services = ({ t, onSelectService }) => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-black text-[#172736] mb-6 font-display">{t.services.title}</h2>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">{t.services.subtitle}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.services.items.map((item, index) => (
          <div 
            key={index} 
            onClick={() => onSelectService(item)}
            className="group p-8 rounded-[2rem] bg-white border border-gray-100 hover:border-[#817DFF] shadow-sm hover:shadow-2xl transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col h-full"
          >
            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-[#817DFF] mb-6 border border-gray-50 group-hover:scale-110 transition-transform">
                <IconMap name={item.icon} className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#172736] mb-4 font-display">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3">{item.short_desc}</p>
              <div className="mt-auto text-[#817DFF] font-bold flex items-center gap-2 text-sm font-mono group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform">
                {t.blog.read_more} <ArrowRight size={16} className="rtl:rotate-180" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

