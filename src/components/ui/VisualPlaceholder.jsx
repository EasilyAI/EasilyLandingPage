import React from 'react';

export const VisualPlaceholder = ({ type }) => {
  return (
    <div className="w-full h-full bg-[#FAFAFA] relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
      
      {/* Content based on type */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        {type === 'service' ? (
           <div className="grid grid-cols-3 gap-4 rotate-12">
             {[...Array(9)].map((_, i) => (
               <div key={i} className="w-12 h-12 border-2 border-[#172736] rounded-lg"></div>
             ))}
           </div>
        ) : (
           <div className="flex gap-4 -rotate-6">
              <div className="w-32 h-64 border-4 border-[#817DFF] rounded-2xl"></div>
              <div className="w-32 h-64 border-4 border-[#172736] rounded-2xl mt-12"></div>
           </div>
        )}
      </div>
    </div>
  );
};

