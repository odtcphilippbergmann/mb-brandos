import React from 'react';
import { Star, Menu, X } from 'lucide-react';
import type { HeaderProps } from '@types/header';

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className="bg-black border-b border-gray-800 px-4 py-4 lg:pl-72 lg:pr-8" 
      role="banner"
      onKeyDown={handleKeyDown}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            id="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium">Global Marketing Hub</p>
            <p className="text-xs text-gray-400">The best or nothing</p>
          </div>
          <button 
            className="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white transition-all hover:opacity-80" 
            style={{backgroundColor: '#696969'}}
            aria-label="User profile menu"
          >
            <img 
              src="https://assets.oneweb.mercedes-benz.com/plugin/workbench/assets/4.11.0/icons/bds/user/24.svg" 
              alt="User Profile" 
              className="w-4 h-4"
              style={{filter: 'brightness(0) invert(1)'}}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;