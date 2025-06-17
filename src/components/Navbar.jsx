import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Navbar = ({ showToast }) => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="https://sportswork.net/wp-content/uploads/2025/05/cropped-Sportswork25-1-250x47.png" 
              alt="Sportswork Malaysia Logo" 
              className="h-8 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Beranda</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Sukan</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Acara</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Komuniti</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Berita</a>
            <Button onClick={showToast} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Sertai Kami
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;