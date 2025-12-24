import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Soft Lime Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#a8e6cf]/40 rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite]" />
      
      {/* Green Blob */}
      <div className="absolute top-[20%] right-[-5%] w-[40vw] h-[40vw] bg-[#299617]/10 rounded-full blur-[100px] animate-[pulse_10s_ease-in-out_infinite_reverse]" />
      
      {/* Teal/Emerald Blob */}
      <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-[#1fab89]/20 rounded-full blur-[120px] animate-[pulse_12s_ease-in-out_infinite]" />
      
      {/* White overlay to soften everything but keep it light */}
      <div className="absolute inset-0 bg-white/20" />
    </div>
  );
};

export default Background;