import React from 'react';
import { motion } from 'framer-motion';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturedSportsSection from '@/components/FeaturedSportsSection';
import StatsSection from '@/components/StatsSection';
import CommunitySection from '@/components/CommunitySection';
import EventsSection from '@/components/EventsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

function App() {
  const { toast } = useToast();

  const showToast = () => {
    toast({
      title: "🚧 Ciri ini belum dilaksanakan lagi",
      description: "Jangan risau! Anda boleh memintanya dalam prompt seterusnya! 🚀",
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar showToast={showToast} />
      <HeroSection showToast={showToast} fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      <FeaturedSportsSection showToast={showToast} fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      <StatsSection fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      <CommunitySection showToast={showToast} fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      <EventsSection showToast={showToast} fadeInUp={fadeInUp} staggerContainer={staggerContainer} />
      <CtaSection showToast={showToast} />
      <Footer showToast={showToast} />
      <Toaster />
    </div>
  );
}

export default App;