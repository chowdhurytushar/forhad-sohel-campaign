import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          
          <h1 className="text-6xl md:text-8xl font-extrabold text-[#004830] leading-tight mb-4 tracking-tight drop-shadow-sm">
            ফরহাদ  <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#299617] to-[#004830]">
              সোহেল 
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#004830]/80 font-medium mb-10 max-w-lg leading-relaxed">
            স্বচ্ছতা ও সেবার অঙ্গীকার। আপনার কণ্ঠস্বর, আমাদের শক্তি। একটি আধুনিক কুমিল্লার স্বপ্নে আমরা ঐক্যবদ্ধ।
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="group relative overflow-hidden bg-gradient-to-r from-[#299617] to-[#004830] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-[#299617]/30 transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                অংশ নিন <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <button className="px-8 py-4 rounded-full bg-white/30 border border-white/50 backdrop-blur-md text-[#004830] font-bold text-lg hover:bg-white/50 transition-all hover:shadow-lg">
              আমাদের ভিশন দেখুন
            </button>
          </div>
        </div>

        {/* Hero Image / Visual */}
        <div className="order-1 lg:order-2 relative h-[50vh] lg:h-[80vh] flex items-center justify-center">
            {/* Decorative background circle behind image */}
            <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-[#299617]/20 to-[#a8e6cf] rounded-full blur-3xl opacity-60 animate-pulse" />
            
            {/* Simulated Cutout Image using a placeholder that looks professional */}
            <div className="relative z-10 w-full h-full flex items-end justify-center">
                 {/* Using a placeholder image that represents a candidate. */}
                 <img 
                    src="/profile.png" 
                    alt="Forhad Sohel"
                    className="h-full w-auto object-cover object-top mask-image-gradient rounded-b-[3rem] drop-shadow-2xl"
                    style={{
                        maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                        borderRadius: '40px'
                    }}
                 />
                 
                 {/* Spinning Text Badge - Replaces previous floating card */}
                 <div className="absolute top-10 right-0 md:-right-4 w-32 h-32 md:w-40 md:h-40 glass-panel rounded-full flex items-center justify-center shadow-lg border-2 border-white/40">
                    <div className="relative w-full h-full animate-spin-slow">
                        <svg viewBox="0 0 100 100" className="w-full h-full">
                            <defs>
                                <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                            </defs>
                            <text fontSize="11" fontWeight="bold" fill="#004830" letterSpacing="2">
                                <textPath xlinkHref="#circle">
                                   • ফরহাদ সোহেল    • কুমিল্লা-৪   
                                </textPath>
                            </text>
                        </svg>
                    </div>
                    {/* Inner static circle/icon */}
                    <div className="absolute inset-0 m-auto w-12 h-12 bg-[#299617] rounded-full flex items-center justify-center text-white font-bold shadow-inner">
                        <ArrowRight size={24} className="-rotate-45" />
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;