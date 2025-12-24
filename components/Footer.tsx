import React from 'react';
import { Facebook, Youtube, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 relative pt-20 pb-10 overflow-hidden">
      {/* Darker glass background for footer */}
      <div className="absolute inset-0 bg-[#004830]/5 backdrop-blur-xl border-t border-white/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#004830] mb-4">
                ভোট দিন, <span className="text-[#299617]">আগামীর জন্য।</span>
            </h2>
            <p className="text-[#004830]/80 text-lg">আপনার একটি ভোট, গাজীপুরের পরিবর্তন।</p>
        </div>

        <div className="flex justify-center gap-6 mb-12">
            {[
                { Icon: Facebook, hoverClass: 'hover:bg-[#1877F2] hover:border-[#1877F2]', label: 'Facebook' },
                { Icon: Youtube, hoverClass: 'hover:bg-[#FF0000] hover:border-[#FF0000]', label: 'YouTube' },
                { Icon: Instagram, hoverClass: 'hover:bg-[#E4405F] hover:border-[#E4405F]', label: 'Instagram' },
                { Icon: Twitter, hoverClass: 'hover:bg-[#1DA1F2] hover:border-[#1DA1F2]', label: 'Twitter' }
            ].map(({ Icon, hoverClass, label }, index) => (
                <a 
                    key={index} 
                    href="#" 
                    className={`w-14 h-14 rounded-full bg-[#004830] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-[#004830]/10 group ${hoverClass}`}
                    aria-label={label}
                >
                    <Icon size={24} className="transition-transform group-hover:scale-110" />
                </a>
            ))}
        </div>

        <div className="border-t border-[#004830]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[#004830]/60 text-sm">
            <p>&copy; ২০২৪ ফরহাদ সোহেল নির্বাচন কমিশন। সর্বস্বত্ব সংরক্ষিত।</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-[#004830]">গোপনীয়তা নীতি</a>
                <a href="#" className="hover:text-[#004830]">শর্তাবলী</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;