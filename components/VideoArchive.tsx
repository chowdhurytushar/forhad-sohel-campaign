import React from 'react';
import { Play } from 'lucide-react';

const videos = [
    // Row 1 & 2
    { id: 1, title: 'জনসভার ভাষণ ২০২৪', img: 'https://images.unsplash.com/photo-1544928147-79a2dbc1f389?q=80&w=600', span: 'md:col-span-1 md:row-span-2' }, // Tall Col 1
    { id: 2, title: 'বন্যার্তদের পাশে ফরহাদ সোহেল ', img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600', span: 'md:col-span-1 md:row-span-1' }, // Short Col 2
    { id: 3, title: 'শিক্ষা ও তরুণ সমাজ', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600', span: 'md:col-span-1 md:row-span-2' }, // Tall Col 3
    { id: 4, title: 'ভবিষ্যৎ পরিকল্পনা', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600', span: 'md:col-span-1 md:row-span-1' }, // Short Col 2 (Fills under item 2)
    
    // Row 3 & 4
    { id: 5, title: 'কৃষকের হাসি', img: 'https://images.unsplash.com/photo-1625246333195-f8196ba083df?q=80&w=600', span: 'md:col-span-1 md:row-span-1' }, // Short Col 1
    { id: 6, title: 'শিল্প বিপ্লব', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600', span: 'md:col-span-1 md:row-span-2' }, // Tall Col 2
    { id: 7, title: 'প্রযুক্তি শিক্ষা', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600', span: 'md:col-span-1 md:row-span-1' }, // Short Col 3
    { id: 8, title: 'নারী শিক্ষা', img: 'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?q=80&w=600', span: 'md:col-span-1 md:row-span-1' }, // Short Col 1
    { id: 9, title: 'ঐতিহ্য ও সংস্কৃতি', img: 'https://images.unsplash.com/photo-1560334884-297dc02213e8?q=80&w=600', span: 'md:col-span-1 md:row-span-1' }, // Short Col 3
];

const VideoArchive: React.FC = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#004830] mb-12 text-center">ভিডিও আর্কাইভ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px] grid-flow-dense">
            {videos.map((video) => (
                <div key={video.id} className={`relative group rounded-3xl overflow-hidden cursor-pointer ${video.span}`}>
                    <img src={video.img} alt={video.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm border border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play size={20} fill="white" className="text-white ml-1" />
                        </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#004830]/90 to-transparent">
                        <p className="text-white font-medium">{video.title}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default VideoArchive;