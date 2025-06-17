import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Award } from 'lucide-react';

const CtaSection = ({ showToast }) => {
  return (
    <section className="py-20 sports-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sertai Revolusi Sukan Malaysia
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Bergabung dengan komuniti sukan terbesar di Malaysia. Temui rakan sepasukan, 
            sertai acara, dan capai matlamat kecergasan anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={showToast}
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              <Award className="mr-2 h-5 w-5" />
              Daftar Percuma
            </Button>
            <Button 
              onClick={showToast}
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              Hubungi Kami
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;