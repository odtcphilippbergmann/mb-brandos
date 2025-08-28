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
      className="bg-white border-b border-gray-200 px-4 py-4 lg:pl-72 lg:pr-8" 
      role="banner"
      onKeyDown={handleKeyDown}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            id="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-900 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={20} className="text-gray-900" /> : <Menu size={20} className="text-gray-900" />}
          </button>
          
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:block text-right">
            <p className="text-sm font-medium text-gray-900">Global Marketing Hub</p>
            <p className="text-xs text-gray-600">The best or nothing</p>
          </div>
          <button 
            className="w-8 h-8 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-900 transition-all hover:opacity-80 bg-gray-300" 
            aria-label="User profile menu"
          >
            <img 
              src="https://assets.oneweb.mercedes-benz.com/plugin/workbench/assets/4.11.0/icons/bds/user/24.svg" 
              alt="User Profile" 
              className="w-4 h-4"
              style={{filter: 'brightness(0)'}}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;