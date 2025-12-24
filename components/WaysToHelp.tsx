import React from 'react';
import { Heart, Users, Share2, ArrowRight } from 'lucide-react';

const WaysToHelp: React.FC = () => {
  return (
    <section id="help" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#004830]">পরিবর্তনের অংশ হোন</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Volunteer Card */}
          <div className="glass-panel rounded-[2.5rem] p-8 relative overflow-hidden group hover:bg-white/60 transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#299617]/10 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-[#299617]/20" />
            
            <div className="w-16 h-16 rounded-2xl bg-[#004830]/5 flex items-center justify-center mb-6 text-[#299617] group-hover:scale-110 transition-transform">
              <Users size={32} />
            </div>
            
            <h3 className="text-2xl font-bold text-[#004830] mb-3">স্বেচ্ছাসেবী হন</h3>
            <p className="text-[#004830]/70 mb-8 leading-relaxed">
              মাঠে কাজ করুন, মানুষের কথা শুনুন এবং আমাদের বার্তা পৌঁছে দিন প্রতিটি ঘরে।
            </p>
            
            <button className="w-full py-3 rounded-xl border border-[#299617]/30 text-[#004830] font-bold hover:bg-[#299617] hover:text-white transition-all flex items-center justify-center gap-2">
              যোগদান করুন <ArrowRight size={18} />
            </button>
          </div>

          {/* Donate Card */}
          <div className="glass-panel rounded-[2.5rem] p-8 relative overflow-hidden group hover:bg-white/60 transition-colors border-[#299617]/20 shadow-xl">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#299617]/20 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-[#299617]/30" />
            
            <div className="w-16 h-16 rounded-2xl bg-[#299617]/10 flex items-center justify-center mb-6 text-[#299617] group-hover:scale-110 transition-transform">
              <Heart size={32} fill="currentColor" className="text-[#299617]" />
            </div>
            
            <h3 className="text-2xl font-bold text-[#004830] mb-3">অনুদান দিন</h3>
            <p className="text-[#004830]/70 mb-8 leading-relaxed">
              স্বচ্ছ রাজনীতি এবং নির্বাচনী প্রচারণার জন্য আপনার সামর্থ্য অনুযায়ী অনুদান প্রদান করুন।
            </p>
            
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#299617] to-[#004830] text-white font-bold shadow-lg shadow-[#299617]/20 hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2">
              এখনই অনুদান দিন <ArrowRight size={18} />
            </button>
          </div>

          {/* Share Card */}
          <div className="glass-panel rounded-[2.5rem] p-8 relative overflow-hidden group hover:bg-white/60 transition-colors">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#299617]/10 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-[#299617]/20" />
            
            <div className="w-16 h-16 rounded-2xl bg-[#004830]/5 flex items-center justify-center mb-6 text-[#299617] group-hover:scale-110 transition-transform">
              <Share2 size={32} />
            </div>
            
            <h3 className="text-2xl font-bold text-[#004830] mb-3">প্রচার করুন</h3>
            <p className="text-[#004830]/70 mb-8 leading-relaxed">
              সামাজিক যোগাযোগ মাধ্যমে আমাদের বার্তা ছড়িয়ে দিন। অনলাইনের আওয়াজ হোক পরিবর্তনের হাতিয়ার।
            </p>
            
            <button className="w-full py-3 rounded-xl border border-[#299617]/30 text-[#004830] font-bold hover:bg-[#299617] hover:text-white transition-all flex items-center justify-center gap-2">
              শেয়ার করুন <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WaysToHelp;