import React from 'react';
import { Menu, Search } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#004830] flex items-center justify-center text-white font-bold text-sm">
            S
          </div>
          <span className="font-bold text-[#004830] text-lg tracking-wide hidden sm:block">ফরহাদ সোহেল </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[#004830]/80 font-semibold">
          <a href="#hero" className="hover:text-[#299617] transition-colors">হোম</a>
          <a href="#bio" className="hover:text-[#299617] transition-colors">জীবনী</a>
          <a href="#manifesto" className="hover:text-[#299617] transition-colors">ইশতেহার</a>
          <a href="#help" className="hover:text-[#299617] transition-colors">সহযোগিতা</a>
          <a href="#contact" className="hover:text-[#299617] transition-colors">যোগাযোগ</a>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-[#004830]/5 transition-colors text-[#004830]">
            <Search size={20} />
          </button>
          <button className="md:hidden p-2 rounded-full hover:bg-[#004830]/5 transition-colors text-[#004830]">
            <Menu size={20} />
          </button>
          <button className="hidden md:block bg-[#004830] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#003825] transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#004830]/20">
            Donate
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;