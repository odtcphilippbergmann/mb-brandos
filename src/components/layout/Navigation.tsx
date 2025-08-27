import React from 'react';
import NavigationItem from '@components/layout/NavigationItem/NavigationItem';
import type { NavigationProps } from '@types/navigation';

const Navigation: React.FC<NavigationProps> = ({ 
  navigationItems, 
  activeSection, 
  setActiveSection, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}) => {
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <nav 
        className={`
        fixed top-0 left-0 h-full w-64 bg-black border-r border-gray-800 z-50
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <img 
              src="https://assets.oneweb.mercedes-benz.com/plugin/hp-assets/latest/images/brands/mercedes-benz/logo.svg" 
              alt="Mercedes-Benz Logo" 
              className="w-8 h-8"
            />
            <div>
              <h2 className="text-lg font-light tracking-wide">Mercedes-Benz</h2>
              <p className="text-xs text-gray-400 uppercase tracking-widest">BrandOS</p>
            </div>
          </div>
        </div>
        
        <div className="py-6">
          {navigationItems.map((item) => {
            return (
              <NavigationItem
                key={item.id}
                id={item.id}
                label={item.label}
                icon={item.icon}
                isActive={activeSection === item.id}
                onClick={handleNavClick}
              />
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navigation;