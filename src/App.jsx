import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Contact from './components/Contact';
import ScrollProgress from './components/common/ScrollProgress';
import BackToTop from './components/common/BackToTop';
import MouseGlow from './components/common/MouseGlow';

import bgVideo from './assets/bkgroundvideo.mp4';

import { Toaster } from 'react-hot-toast';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Toaster position="bottom-right" toastOptions={{
        style: {
          background: '#1a1a1a',
          color: '#fff',
          border: '1px solid rgba(255,255,255,0.1)',
        },
      }} />
      <ScrollProgress />
      <BackToTop />
      <MouseGlow />
      {/* Background Gradients/Noise could go here */}
      {/* Global Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <Navbar />

      <main className="relative z-10 flex flex-col justify-center items-center min-h-screen">
        {/* Placeholder for sections */}
        <Hero />
        <div className="w-full bg-surface/30 border-y border-white/5">
          <About />
        </div>
        <div className="w-full">
          <Skills />
        </div>
        <div className="w-full bg-surface/30 border-y border-white/5">
          <Projects />
        </div>
        <div className="w-full">
          <Achievements />
          <Certifications />
        </div>
        <div className="w-full bg-surface/30 border-y border-white/5">
          <Education />
        </div>
        <div className="w-full">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
