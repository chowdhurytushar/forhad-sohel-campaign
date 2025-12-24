import React from 'react';
import { Play } from 'lucide-react';
import { ManifestoItem } from '../types';

const manifestoItems: ManifestoItem[] = [
  { id: 1, title: 'আন্দোলন', category: 'Movement', videoUrl: 'https://www.facebook.com/reel/1004824411119046', thumbnailUrl: 'https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/502499299_10008201775960904_5285598773740598564_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHAs3oKQUAeNqdJ-3oDYzC1haoKrW-N12OFqgqtb43XY-jO79I_8yU8FxRyMEOC5rEFXWYBVY_D6SayoZRuAeM3&_nc_ohc=7O00x7YojZYQ7kNvwHb985F&_nc_oc=AdknRdVLFI6KAK2dWEKWMRiKufuDPaoqAfiADJ5YzpM8Jouvp2jd-fxhD2hp84lL1oM&_nc_zt=23&_nc_ht=scontent.fdac80-1.fna&_nc_gid=2Xga0kXK63oJD1qpWjy9WQ&oh=00_AfmGh2QkKF4Mv0XgtT78GYPCgrGE2bEE-DZyI9PvkJmqWQ&oe=69505C2A' },
  { id: 2, title: 'বক্তিতা', category: 'Speech', videoUrl: 'https://www.facebook.com/reel/8370653512968048', thumbnailUrl: 'https://scontent.fdac80-1.fna.fbcdn.net/v/t39.30808-6/504341739_10044065389041209_6605094967246445015_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG61aIqF8Hgdi-C6ibERCvD13n4jyFaa33XefiPIVprfeWKzuZ6colg9swxNsEpdVCkLascsKkSSHtD6skhyOg5&_nc_ohc=d3zyUFfJY5YQ7kNvwFSzZzh&_nc_oc=AdlLVgzxGZLO_SIxUyaGP2ZsVncWdPZkMvVgAfx38Y4RyzBceUq1i9V2dQnkF76V95w&_nc_zt=23&_nc_ht=scontent.fdac80-1.fna&_nc_gid=kGd9jtRdOBXRgkDeuUX4PQ&oh=00_AfnsC-LbgNOAqJJeQL5mTk12V8RuU6HpkFLyhLHnpdDWJA&oe=69503E01' },
  { id: 3, title: 'নিরাপদ সড়ক', category: 'Infrastructure', videoUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'কর্মসংস্থান সৃষ্টি', category: 'Employment', videoUrl: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop' },
  { id: 5, title: 'দুর্নীতি মুক্ত সমাজ', category: 'Governance', videoUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop' },
  { id: 6, title: 'কৃষি উন্নয়ন', category: 'Agriculture', videoUrl: 'https://images.unsplash.com/photo-1625246333195-f8196ba083df?q=80&w=800&auto=format&fit=crop' },
  { id: 7, title: 'নারীর ক্ষমতায়ন', category: 'Empowerment', videoUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop' },
  { id: 8, title: 'ডিজিটাল কুমিল্লা', category: 'Technology', videoUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop' },
  { id: 9, title: 'পরিবেশ সুরক্ষা', category: 'Environment', videoUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b43?q=80&w=800&auto=format&fit=crop' },
  { id: 10, title: 'মাদক মুক্ত এলাকা', category: 'Social', videoUrl: 'https://images.unsplash.com/photo-1588611910609-0d3eb81353df?q=80&w=800&auto=format&fit=crop' },
];

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#004830]">আমাদের ইশতেহার</h2>
      </div>

      <div className="flex overflow-x-auto space-x-6 px-4 md:px-12 pb-12 hide-scrollbar snap-x snap-mandatory">
        {manifestoItems.map((item) => (
          <div 
            key={item.id} 
            onClick={() => window.open(item.videoUrl, '_blank')}
            className="flex-shrink-0 w-[280px] md:w-[320px] h-[480px] md:h-[550px] relative rounded-[2.5rem] overflow-hidden group cursor-pointer snap-center shadow-2xl shadow-[#004830]/10"
          >
            {/* Background Image/Video Placeholder */}
            <div className="absolute inset-0">
                <img 
                    src={item.thumbnailUrl || item.videoUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#004830]/90" />
            </div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40">
                    <Play fill="white" className="text-white ml-1" />
                </div>
            </div>

            {/* Content Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-3">
                    {item.category}
                </span>
                <h3 className="text-2xl font-bold text-white leading-tight">
                    {item.title}
                </h3>
            </div>
            
            {/* Glass Border Effect */}
            <div className="absolute inset-0 border-[6px] border-white/20 rounded-[2.5rem] pointer-events-none" />
          </div>
        ))}
        {/* Spacer for end of list */}
        <div className="w-8 flex-shrink-0" />
      </div>
    </section>
  );
};

export default Manifesto;