import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart, Share2, MessageCircle } from 'lucide-react';

const CommunitySection = ({ showToast, fadeInUp, staggerContainer }) => {
  const communities = [
    {
      title: "Kelab Badminton KL",
      members: "2,500+ ahli",
      image: "Badminton club members training together in Kuala Lumpur",
      activity: "Latihan Harian",
      imgSrc: "https://images.unsplash.com/photo-1694494441646-4c5ca02e2fab"
    },
    {
      title: "Pelari Johor",
      members: "1,800+ ahli",
      image: "Running group jogging through Johor parks at sunrise",
      activity: "Larian Mingguan",
      imgSrc: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
    },
    {
      title: "Perenang Penang",
      members: "950+ ahli",
      image: "Swimming club members at Penang aquatic center",
      activity: "Sesi Renang",
      imgSrc: "https://images.unsplash.com/photo-1576620391030-c030f0a30f8c"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Komuniti <span className="text-gradient">Sukan</span> Malaysia
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bergabung dengan ribuan atlet dan peminat sukan di seluruh Malaysia
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {communities.map((community, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer"
              onClick={showToast}
            >
              <div className="relative">
                <img  
                  className="w-full h-48 object-cover"
                  alt={`${community.title} community`}
                  src={community.imgSrc} />
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {community.activity}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{community.title}</h3>
                <p className="text-gray-600 mb-4">{community.members}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-500">
                    <button onClick={(e) => { e.stopPropagation(); showToast(); }} className="flex items-center hover:text-red-500 transition-colors">
                      <Heart className="h-4 w-4 mr-1" />
                      <span className="text-sm">Suka</span>
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); showToast(); }} className="flex items-center hover:text-blue-500 transition-colors">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span className="text-sm">Komen</span>
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); showToast(); }} className="flex items-center hover:text-green-500 transition-colors">
                      <Share2 className="h-4 w-4 mr-1" />
                      <span className="text-sm">Kongsi</span>
                    </button>
                  </div>
                  <Button onClick={(e) => { e.stopPropagation(); showToast(); }} size="sm" variant="outline">
                    Sertai
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;