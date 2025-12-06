import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Blog = ({ t, onSelectPost }) => (
  <section className="py-24 bg-[#FAFAFA]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-[#172736] mb-4 font-display">{t.blog.title}</h2>
        <p className="text-xl text-gray-500 font-medium">{t.blog.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {t.blog.items.map((post) => (
          <div 
            key={post.id} 
            onClick={() => onSelectPost(post)}
            className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer group"
          >
            <div className="p-10 flex-grow">
              <div className="flex justify-between items-center text-sm mb-6">
                <span className="bg-[#F0F0FF] text-[#817DFF] px-3 py-1 rounded-full font-bold text-xs font-mono uppercase">{post.category}</span>
                <span className="text-gray-400 font-mono text-xs">{post.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-[#172736] mb-4 group-hover:text-[#817DFF] transition-colors leading-tight font-display">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-8 text-lg line-clamp-3 leading-relaxed">{post.excerpt}</p>
              
              <div className="flex items-center text-[#817DFF] font-bold mt-auto group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform font-mono text-sm">
                 {t.blog.read_more} <ArrowRight size={18} className="mx-2 rtl:rotate-180" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

