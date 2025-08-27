import React from 'react';
import { Star, Menu, X } from 'lucide-react';
import type { HeaderProps } from '@types/header';

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header className="bg-black border-b border-gray-800 px-4 py-4 lg:pl-72 lg:pr-8" role="banner">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium">Global Marketing Hub</p>
            <p className="text-xs text-gray-400">The best or nothing</p>
          </div>
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#696969'}}>
            <img 
              src="https://assets.oneweb.mercedes-benz.com/plugin/workbench/assets/4.11.0/icons/bds/user/24.svg" 
              alt="User Profile" 
              className="w-4 h-4"
              style={{filter: 'brightness(0) invert(1)'}}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;