import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { IconMap } from '../ui/IconMap';
import { VisualPlaceholder } from '../ui/VisualPlaceholder';
import { content } from '../../content';

export const ServiceDetail = ({ service, t, onBack }) => (
  <div className="py-24 bg-white min-h-screen">
    <div className="max-w-6xl mx-auto px-4">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-[#817DFF] mb-8 font-medium font-mono text-sm">
        <ArrowRight size={18} className="rtl:rotate-180" /> {t.nav.back}
      </button>
      
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <div className="w-16 h-16 bg-[#F0F0FF] rounded-2xl flex items-center justify-center text-[#817DFF] mb-6">
            <IconMap name={service.icon} className="w-8 h-8" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-[#172736] mb-6 font-display leading-tight">{service.full_content.headline}</h1>
          <p className="text-xl text-gray-500 mb-8 leading-relaxed">{service.short_desc}</p>
          
          {/* Image Placeholder */}
          <div className="w-full h-64 bg-gray-50 rounded-3xl mb-8 overflow-hidden shadow-sm border border-gray-100 lg:hidden">
             <VisualPlaceholder type="service" />
          </div>

          <div className="space-y-8">
            <div className="bg-red-50/50 p-8 rounded-3xl border border-red-100">
              <h3 className="text-xl font-bold text-red-900 mb-4 font-display">🛑 {content.he === t ? "הבעיה" : "The Pain Point"}</h3>
              <p className="text-red-900/80 text-lg leading-relaxed">{service.full_content.pain_point}</p>
            </div>

            <div className="bg-green-50/50 p-8 rounded-3xl border border-green-100">
              <h3 className="text-xl font-bold text-green-900 mb-4 font-display">✅ {content.he === t ? "הפתרון שלנו" : "Our Solution"}</h3>
              <p className="text-green-900/80 text-lg leading-relaxed">{service.full_content.solution}</p>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block">
           <div className="sticky top-32">
              <div className="w-full h-80 bg-gray-50 rounded-[2.5rem] mb-12 overflow-hidden shadow-lg border border-gray-100">
                 <VisualPlaceholder type="service" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#172736] mb-6 font-display">{content.he === t ? "למה זה משתלם?" : "Key Benefits"}</h3>
                <div className="space-y-4">
                  {service.full_content.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-[#817DFF] transition-colors">
                      <CheckCircle2 className="text-[#817DFF] shrink-0 mt-1" />
                      <span className="font-medium text-[#172736] leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-12 text-center">
                 <button className="bg-[#172736] text-white w-full py-4 rounded-xl font-bold shadow-lg hover:bg-[#2a415f] transition-colors">
                    {t.nav.cta}
                 </button>
              </div>
           </div>
        </div>
      </div>
      
      {/* Mobile Benefits Section */}
      <div className="lg:hidden mt-12">
        <h3 className="text-2xl font-bold text-[#172736] mb-6 font-display">{content.he === t ? "למה זה משתלם?" : "Key Benefits"}</h3>
        <div className="grid gap-4">
          {service.full_content.benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm">
              <CheckCircle2 className="text-[#817DFF] shrink-0 mt-1" />
              <span className="font-medium text-[#172736] leading-relaxed">{benefit}</span>
            </div>
          ))}
        </div>
        <div className="mt-12">
           <button className="bg-[#172736] text-white w-full py-4 rounded-xl font-bold shadow-lg">
              {t.nav.cta}
           </button>
        </div>
      </div>
    </div>
  </div>
);

