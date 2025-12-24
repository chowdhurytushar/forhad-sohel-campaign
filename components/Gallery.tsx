import React from 'react';
import { GalleryItem } from '../types';

const galleryItems: GalleryItem[] = [
  { id: 1, imageUrl: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=800', caption: 'জনসংযোগ' },
  { id: 2, imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800', caption: 'তরুণদের সাথে' },
  { id: 3, imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800', caption: 'পথসভা' },
  { id: 4, imageUrl: 'https://images.unsplash.com/photo-1529101091760-6149d4c46b41?q=80&w=800', caption: 'বিজয় উল্লাস' },
  { id: 5, imageUrl: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=800', caption: 'হাসিমুখ' },
  { id: 6, imageUrl: 'https://images.unsplash.com/photo-1494178270175-e96de2971df9?q=80&w=800', caption: 'কাজের মাঝে' },
  { id: 7, imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800', caption: 'শিক্ষার্থীদের সাথে' },
  { id: 8, imageUrl: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=800', caption: 'পরিকল্পনা' },
  { id: 9, imageUrl: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=800', caption: 'আলোচনা' },
  { id: 10, imageUrl: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=800', caption: 'জনসমুদ্র' },
  { id: 11, imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800', caption: 'নেতৃত্ব' },
  { id: 12, imageUrl: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800', caption: 'সাক্ষাৎকার' },
  { id: 13, imageUrl: 'https://images.unsplash.com/photo-1507537297725-24a1c434c67b?q=80&w=800', caption: 'চা চক্র' },
  { id: 14, imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800', caption: 'পরীক্ষা কেন্দ্র পরিদর্শন' },
  { id: 15, imageUrl: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=800', caption: 'প্রযুক্তি ভাবনা' },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#004830]">মুহূর্ত ও স্মৃতি</h2>
      </div>

      <div className="w-full overflow-hidden">
        {/* Marquee Container */}
        <div className="flex gap-6 w-max animate-marquee hover:animation-play-state-paused">
            {/* First Set of Items */}
            {galleryItems.map((item) => (
                <div key={item.id} className="relative flex-shrink-0 group">
                    <div className="w-[300px] h-[200px] md:w-[400px] md:h-[300px] overflow-hidden rounded-[30px] shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                        <img 
                            src={item.imageUrl} 
                            alt={item.caption} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#004830]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white font-bold text-lg">{item.caption}</p>
                         </div>
                    </div>
                </div>
            ))}
            {/* Duplicate Set for Seamless Loop */}
            {galleryItems.map((item) => (
                <div key={`dup-${item.id}`} className="relative flex-shrink-0 group">
                    <div className="w-[300px] h-[200px] md:w-[400px] md:h-[300px] overflow-hidden rounded-[30px] shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                        <img 
                            src={item.imageUrl} 
                            alt={item.caption} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-[#004830]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <p className="text-white font-bold text-lg">{item.caption}</p>
                         </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;