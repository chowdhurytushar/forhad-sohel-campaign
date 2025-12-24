import React, { useState } from 'react';
import { Send, User, Ghost } from 'lucide-react';
import { FeedbackType } from '../types';

const MessageBoard: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType>(FeedbackType.NAMED);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে। (${feedbackType === FeedbackType.ANONYMOUS ? 'বেনামী' : name})`);
    setMessage('');
    setName('');
  };

  return (
    <section id="contact" className="py-24 px-4 relative flex items-center justify-center">
      {/* Decorative background for this section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#299617]/10 to-transparent pointer-events-none" />

      <div className="relative w-full max-w-3xl glass-panel rounded-[3rem] p-8 md:p-12 transition-all hover:shadow-[0_20px_60px_rgba(0,72,48,0.15)]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#004830]">মনের কথা লিখুন</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Custom Toggle Switch */}
          <div className="flex justify-center mb-8">
            <div className="bg-[#004830]/10 p-1 rounded-full flex relative shadow-inner">
               <div 
                 className={`absolute top-1 bottom-1 w-[50%] bg-white rounded-full shadow-md transition-all duration-300 ease-in-out ${feedbackType === FeedbackType.NAMED ? 'left-1' : 'left-[48.5%]'}`} 
               />
               <button 
                 type="button"
                 onClick={() => setFeedbackType(FeedbackType.NAMED)}
                 className={`relative z-10 flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-colors ${feedbackType === FeedbackType.NAMED ? 'text-[#004830]' : 'text-[#004830]/50'}`}
               >
                 <User size={16} /> নাম সহ
               </button>
               <button 
                 type="button"
                 onClick={() => setFeedbackType(FeedbackType.ANONYMOUS)}
                 className={`relative z-10 flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-colors ${feedbackType === FeedbackType.ANONYMOUS ? 'text-[#004830]' : 'text-[#004830]/50'}`}
               >
                 <Ghost size={16} /> পরিচয় গোপন
               </button>
            </div>
          </div>

          <div className="space-y-6">
            {feedbackType === FeedbackType.NAMED && (
              <div className="transition-all duration-500 ease-in-out origin-top">
                <label className="block text-[#004830] font-semibold mb-2 ml-4">আপনার নাম</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="আপনার নাম লিখুন"
                  className="w-full neumorph-inset rounded-2xl p-5 text-[#004830] focus:outline-none focus:ring-2 focus:ring-[#299617]/40 transition-shadow bg-transparent"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-[#004830] font-semibold mb-2 ml-4">আপনার বার্তা</label>
              <textarea 
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="আপনার অভিযোগ বা পরামর্শ এখানে লিখুন..."
                className="w-full neumorph-inset rounded-3xl p-5 text-[#004830] focus:outline-none focus:ring-2 focus:ring-[#299617]/40 transition-shadow bg-transparent resize-none"
                required
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-[#299617] to-[#004830] text-white font-bold text-xl py-5 rounded-2xl shadow-lg shadow-[#299617]/30 hover:shadow-[#299617]/50 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-3"
          >
            পাঠিয়ে দিন <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default MessageBoard;