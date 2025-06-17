import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Zap, ArrowRight } from 'lucide-react';

const FeaturedSportsSection = ({ showToast, fadeInUp, staggerContainer }) => {
  const sports = [
    {
      title: "Badminton",
      description: "Legenda seperti Lee Chong Wei telah mengangkat nama Malaysia di pentas dunia",
      image: "Malaysian badminton player in action during championship match",
      icon: <Trophy className="h-8 w-8" />,
      color: "from-yellow-400 to-orange-500",
      imgSrc: "https://images.unsplash.com/photo-1555617289-f8a4e290891a"
    },
    {
      title: "Bola Sepak",
      description: "Pasukan Harimau Malaya yang membanggakan dengan sokongan peminat yang hebat",
      image: "Malaysian football team celebrating victory with fans",
      icon: <Target className="h-8 w-8" />,
      color: "from-green-400 to-blue-500",
      imgSrc: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55"
    },
    {
      title: "Renang",
      description: "Atlet renang Malaysia yang cemerlang di kolam renang antarabangsa",
      image: "Malaysian swimmer competing in Olympic-style pool",
      icon: <Zap className="h-8 w-8" />,
      color: "from-blue-400 to-purple-500",
      imgSrc: "https://images.unsplash.com/photo-1560090995-01632a28895b"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sukan <span className="text-gradient">Kebanggaan</span> Malaysia
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dari arena olimpik hingga padang tempatan, Malaysia bersinar dalam pelbagai sukan
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sports.map((sport, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg card-hover cursor-pointer"
              onClick={showToast}
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img  
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={`${sport.title} in Malaysia`}
                  src={sport.imgSrc} />
                <div className={`absolute inset-0 bg-gradient-to-t ${sport.color} opacity-80`}></div>
                <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white">
                  {sport.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{sport.title}</h3>
                <p className="text-gray-600 leading-relaxed">{sport.description}</p>
                <div className="mt-4 flex items-center text-blue-600 font-semibold">
                  <span>Ketahui Lebih Lanjut</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedSportsSection;