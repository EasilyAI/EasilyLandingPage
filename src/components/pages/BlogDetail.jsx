import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { VisualPlaceholder } from '../ui/VisualPlaceholder';

export const BlogDetail = ({ post, t, onBack }) => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      navigate('/blog');
    }
  };
  
  return (
  <div className="py-24 bg-white min-h-screen">
    <div className="max-w-3xl mx-auto px-4">
      <button onClick={handleBack} className="flex items-center gap-2 text-gray-500 hover:text-[#817DFF] mb-8 font-medium font-mono text-sm">
        <ArrowRight size={18} className="rtl:rotate-180" /> {t.nav.back}
      </button>

      <div className="mb-8 flex items-center gap-4">
        <span className="bg-[#F0F0FF] text-[#817DFF] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide font-mono uppercase">
          {post.category}
        </span>
        <span className="text-gray-400 text-sm font-mono">{post.date}</span>
      </div>

      <h1 className="text-3xl md:text-5xl font-black text-[#172736] mb-10 leading-tight font-display">
        {post.title}
      </h1>

      {/* Visual Header for Blog Post */}
      <div className="w-full h-64 md:h-80 bg-gray-50 rounded-[2rem] mb-12 overflow-hidden shadow-sm border border-gray-100">
          <VisualPlaceholder type="blog" />
      </div>

      <div className="prose prose-lg prose-indigo max-w-none text-gray-600 leading-relaxed space-y-6">
        {post.content.map((paragraph, idx) => (
          <p key={idx} className={idx === 0 ? "text-xl text-gray-800 font-medium" : ""}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-20 p-10 bg-[#FAFAFA] rounded-[2rem] text-center border border-gray-100">
        <h3 className="text-2xl font-bold text-[#172736] mb-6 font-display">
          {t.nav.cta}
        </h3>
        <button onClick={() => navigate('/contact')} className="bg-[#172736] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-[#2a415f] transition-colors">
          {t.contact.form.submit}
        </button>
      </div>
    </div>
  </div>
  );
};

