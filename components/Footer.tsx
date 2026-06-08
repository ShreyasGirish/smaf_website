
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center text-white font-bold">M</div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 leading-none">Sri Mookambika</span>
              <span className="text-[10px] uppercase tracking-wider text-emerald-600">Agro Foods LLP</span>
            </div>
          </div>
          
          <div className="flex space-x-8 mb-6 md:mb-0">
            <a href="#" className="text-gray-500 hover:text-emerald-600 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-emerald-600 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-emerald-600 text-sm">Cookie Settings</a>
            <a href="#" className="text-gray-500 hover:text-emerald-600 text-sm">Sitemap</a>
          </div>

          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Sri Mookambika Agro Foods LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
