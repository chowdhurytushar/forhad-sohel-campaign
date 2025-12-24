import React, { useState } from 'react';
import { GraduationCap, Briefcase, Flag } from 'lucide-react';

type Tab = 'education' | 'professional' | 'political';

const Biography: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('political');

  const content = {
    education: {
      title: 'শিক্ষা জীবন',
      description: 'মেধার স্বাক্ষর ও প্রাতিষ্ঠানিক ভিত্তি।',
      points: [
        'ঢাকা বিশ্ববিদ্যালয় থেকে ইংরেজি সাহিত্যে স্নাতক ও স্নাতকোত্তর।',
        'কুমিল্লা জিলা স্কুল থেকে মাধ্যমিক এবং ভিক্টোরিয়া কলেজ থেকে উচ্চ মাধ্যমিক।',
        'বিতর্ক ও সাংস্কৃতিক কর্মকাণ্ডে জাতীয় পর্যায়ে পুরস্কারপ্রাপ্ত।'
      ],
      image: 'components/public/Graduate.png'
    },
    professional: {
      title: 'পেশাগত অভিজ্ঞতা',
      description: 'সমাজসেবা ও কর্মজীবনে নেতৃত্ব।',
      points: [
        'আন্তর্জাতিক এনজিওতে প্রজেক্ট ডিরেক্টর হিসেবে ৫ বছরের অভিজ্ঞতা।',
        'তৃণমূল পর্যায়ে শিক্ষা বিস্তার ও স্বাস্থ্যসেবা নিয়ে কাজ।',
        'যুব উদ্যোক্তা হিসেবে একাধিক সফল সামাজিক ব্যবসার প্রতিষ্ঠাতা।'
      ],
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop'
    },
    political: {
      title: 'রাজনৈতিক পথচলা',
      description: 'বৈষম্যবিরোধী আন্দোলন থেকে গণমানুষের নেতা।',
      points: [
        '২০২৪ সালের বৈষম্যবিরোধী ছাত্র আন্দোলনের অন্যতম সমন্বয়ক।',
        'স্বচ্ছ রাজনীতি ও জবাবদিহিতার প্রবক্তা।',
        'কুমিল্লা-৪ আসনের মানুষের অধিকার আদায়ে নিরলস সংগ্রাম।'
      ],
      image: 'components/public/politics.jpg'
    }
  };

  return (
    <section id="bio" className="py-24 px-4 relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-20 right-0 w-96 h-96 bg-[#299617]/10 rounded-full blur-3xl pointer-events-none" />
       <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#004830]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#004830]">ফরহাদ সোহেলর জীবনী</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Tabs Navigation */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <button 
              onClick={() => setActiveTab('political')}
              className={`p-6 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 ${activeTab === 'political' ? 'glass-panel bg-white/60 shadow-lg scale-105 border-[#299617]/30' : 'hover:bg-white/30 border border-transparent text-[#004830]/60'}`}
            >
              <div className={`p-3 rounded-full ${activeTab === 'political' ? 'bg-[#299617] text-white' : 'bg-[#004830]/10 text-[#004830]'}`}>
                <Flag size={24} />
              </div>
              <div>
                <h3 className={`font-bold text-lg ${activeTab === 'political' ? 'text-[#004830]' : ''}`}>রাজনৈতিক পথচলা</h3>
                <p className="text-sm opacity-70">নেতৃত্ব ও সংগ্রাম</p>
              </div>
            </button>

            <button 
              onClick={() => setActiveTab('professional')}
              className={`p-6 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 ${activeTab === 'professional' ? 'glass-panel bg-white/60 shadow-lg scale-105 border-[#299617]/30' : 'hover:bg-white/30 border border-transparent text-[#004830]/60'}`}
            >
              <div className={`p-3 rounded-full ${activeTab === 'professional' ? 'bg-[#299617] text-white' : 'bg-[#004830]/10 text-[#004830]'}`}>
                <Briefcase size={24} />
              </div>
              <div>
                <h3 className={`font-bold text-lg ${activeTab === 'professional' ? 'text-[#004830]' : ''}`}>পেশাগত অভিজ্ঞতা</h3>
                <p className="text-sm opacity-70">সমাজসেবা ও কর্ম</p>
              </div>
            </button>

            <button 
              onClick={() => setActiveTab('education')}
              className={`p-6 rounded-2xl text-left transition-all duration-300 flex items-center gap-4 ${activeTab === 'education' ? 'glass-panel bg-white/60 shadow-lg scale-105 border-[#299617]/30' : 'hover:bg-white/30 border border-transparent text-[#004830]/60'}`}
            >
              <div className={`p-3 rounded-full ${activeTab === 'education' ? 'bg-[#299617] text-white' : 'bg-[#004830]/10 text-[#004830]'}`}>
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className={`font-bold text-lg ${activeTab === 'education' ? 'text-[#004830]' : ''}`}>শিক্ষা জীবন</h3>
                <p className="text-sm opacity-70">মেধা ও মনন</p>
              </div>
            </button>
          </div>

          {/* Tab Content Display - Vignette Photocard Style */}
          <div className="md:col-span-8">
            <div className="glass-panel p-2 rounded-[2.5rem] relative overflow-hidden h-full min-h-[500px] shadow-2xl group">
               {/* Full Background Image */}
               <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                  <img 
                    src={content[activeTab].image} 
                    alt={content[activeTab].title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  {/* Heavy Black Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-95" />
               </div>
               
               {/* Content Overlay - Strictly Bottom Left */}
               <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10 text-left">
                   <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">{content[activeTab].title}</h3>
                   <p className="text-white font-semibold text-xl mb-8 leading-relaxed opacity-95">{content[activeTab].description}</p>
                   
                   <ul className="space-y-4 mb-2">
                     {content[activeTab].points.map((point, index) => (
                       <li key={index} className="flex items-start gap-3">
                         <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] flex-shrink-0" />
                         <span className="text-white text-lg leading-relaxed">{point}</span>
                       </li>
                     ))}
                   </ul>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;