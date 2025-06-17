import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const EventsSection = ({ showToast, fadeInUp, staggerContainer }) => {
  const events = [
    {
      title: "Kejohanan Badminton Terbuka Malaysia",
      date: "15-20 Mac 2024",
      location: "Stadium Badminton Kuala Lumpur",
      image: "Professional badminton tournament at Malaysian stadium",
      category: "Badminton",
      participants: "500+ atlet",
      imgSrc: "https://images.unsplash.com/photo-1665220509244-fe8459807991"
    },
    {
      title: "Larian Marathon Putrajaya",
      date: "5 April 2024",
      location: "Putrajaya",
      image: "Marathon runners at Putrajaya scenic route",
      category: "Larian",
      participants: "10,000+ pelari",
      imgSrc: "https://images.unsplash.com/photo-1587032202999-65005f8097d8"
    },
    {
      title: "Kejohanan Renang Kebangsaan",
      date: "12-15 April 2024",
      location: "Kompleks Akuatik Bukit Jalil",
      image: "National swimming championship at Bukit Jalil aquatic center",
      category: "Renang",
      participants: "300+ perenang",
      imgSrc: "https://images.unsplash.com/photo-1530549387789-4c1017266635"
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
            Acara <span className="text-gradient">Akan Datang</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Jangan terlepas acara-acara sukan menarik di seluruh Malaysia
          </p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer"
              onClick={showToast}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img  
                    className="w-full h-64 md:h-full object-cover"
                    alt={`${event.title} event`}
                    src={event.imgSrc} />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      {event.category}
                    </span>
                    <span className="text-gray-500 text-sm">{event.participants}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="mr-6">{event.date}</span>
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button onClick={(e) => { e.stopPropagation(); showToast(); }} className="bg-gradient-to-r from-blue-600 to-purple-600">
                        Daftar Sekarang
                      </Button>
                      <Button onClick={(e) => { e.stopPropagation(); showToast(); }} variant="outline">
                        Ketahui Lebih Lanjut
                      </Button>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="text-sm">Popular</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;