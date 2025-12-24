import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Biography from './components/Biography';
import Manifesto from './components/Manifesto';
import WaysToHelp from './components/WaysToHelp';
import Gallery from './components/Gallery';
import VideoArchive from './components/VideoArchive';
import MessageBoard from './components/MessageBoard';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate high-fidelity loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#d0f0c0]">
        <div className="animate-pulse flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#004830]/20 mb-4"></div>
            <div className="h-4 w-32 bg-[#004830]/20 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-[#004830] selection:bg-[#299617]/30 selection:text-[#004830]">
      <Background />
      <Navbar />
      
      <main className="space-y-12">
        <Hero />
        <Biography />
        <Manifesto />
        <WaysToHelp />
        <Gallery />
        <VideoArchive />
        <MessageBoard />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;