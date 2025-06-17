import React from 'react';

const Footer = ({ showToast }) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img 
              src="https://sportswork.net/wp-content/uploads/2025/05/cropped-Sportswork25-1-250x47.png" 
              alt="Sportswork Malaysia Logo" 
              className="h-8 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 leading-relaxed">
              Platform sukan terkemuka Malaysia yang menghubungkan atlet, 
              peminat, dan komuniti sukan di seluruh negara.
            </p>
          </div>
          <div>
            <span className="text-lg font-semibold mb-4 block">Sukan</span>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" onClick={showToast} className="hover:text-white transition-colors">Badminton</a></li>
              <li><a href="#" onClick={showToast} className="hover:text-white transition-colors">Bola Sepak</a></li>
              <li><a href="#" onClick={showToast} className="hover:text-white transition-colors">Renang</a></li>
              <li><a href="#" onClick={showToast} className="hover:text-white transition-colors">Larian</a></li>
            </ul>
          </div>
          <div>
            <span className="text-lg font-semibold mb-4 block">Komuniti</span>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" onClick={showToast} className="hover:text-white transition-colors">Kelab Sukan</a></li>
              <li><a href="#" onClick={showToast} className="hover:text-white transition-colors">Acara</a></li>
              <li><a href="#" onClick={showToast} className="hover:text-white transition-colors">Forum</a></li>
              <li><a href="#" onClick={showToast} className="hover:text-white transition-colors">Berita</a></li>
            </ul>
          </div>
          <div>
            <span className="text-lg font-semibold mb-4 block">Hubungi</span>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" onClick={showToast} className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#" onClick={showToast} className="hover:text-white transition-colors">Sokongan</a></li>
              <li><a href="#" onClick={showToast} className="hover:text-white transition-colors">Kerjaya</a></li>
              <li><a href="#" onClick={showToast} className="hover:text-white transition-colors">Media</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sportswork Malaysia. Hak cipta terpelihara.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;