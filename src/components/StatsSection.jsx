import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, MapPin } from 'lucide-react';

const StatsSection = ({ fadeInUp, staggerContainer }) => {
  const stats = [
    { number: "50+", label: "Sukan Aktif", icon: <Trophy className="h-8 w-8" /> },
    { number: "1M+", label: "Atlet Berdaftar", icon: <Users className="h-8 w-8" /> },
    { number: "200+", label: "Acara Tahunan", icon: <Calendar className="h-8 w-8" /> },
    { number: "13", label: "Negeri Sertai", icon: <MapPin className="h-8 w-8" /> }
  ];

  return (
    <section className="py-20 malaysia-flag-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center text-white"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 floating-animation">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black mb-2">{stat.number}</div>
              <div className="text-lg font-medium opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;