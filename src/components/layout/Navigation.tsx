import React, { useEffect, useRef } from 'react';
import NavigationItem from '@components/layout/NavigationItem/NavigationItem';
import { useKeyboardNavigation } from '@hooks/useKeyboardNavigation';
import { useFocusManagement } from '@hooks/useFocusManagement';
import type { NavigationProps } from '@types/navigation';

const Navigation: React.FC<NavigationProps> = ({ 
  navigationItems, 
  activeSection, 
  setActiveSection, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}) => {
  const navRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const { trapFocus, restoreFocus } = useFocusManagement();
  
  const currentIndex = navigationItems.findIndex(item => item.id === activeSection);
  
  const { containerRef } = useKeyboardNavigation({
    items: navigationItems.map(item => item.id),
    activeIndex: currentIndex,
    onNavigate: (index) => {
      const navButton = navRef.current?.querySelector(`[data-nav-id="${navigationItems[index].id}"]`) as HTMLElement;
      navButton?.focus();
    },
    onSelect: (index) => {
      handleNavClick(navigationItems[index].id);
    },
    isEnabled: isMobileMenuOpen || window.innerWidth >= 1024
  });

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  // Focus management for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      const nav = navRef.current;
      if (nav) {
        const cleanup = trapFocus(nav);
        // Focus first navigation item
        setTimeout(() => {
          const firstNavButton = nav.querySelector('[data-nav-id]') as HTMLElement;
          firstNavButton?.focus();
        }, 100);
        return cleanup;
      }
    } else if (previousFocusRef.current) {
      restoreFocus(previousFocusRef.current);
    }
  }, [isMobileMenuOpen, trapFocus, restoreFocus]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar */}
      <nav 
        ref={(el) => {
          navRef.current = el;
          if (containerRef) {
            (containerRef as React.MutableRefObject<HTMLElement | null>).current = el;
          }
        }}
        id="mobile-navigation"
        className={`
        fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 z-50
        transform transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        role="navigation"
        aria-label="Main navigation"
        onKeyDown={handleKeyDown}
      >
        <div 
          className="p-6 border-b border-gray-200"
          tabIndex={-1}
        >
          <div className="flex items-center space-x-3">
            <img 
              src="https://assets.oneweb.mercedes-benz.com/plugin/hp-assets/latest/images/brands/mercedes-benz/logo.svg"
              alt="Mercedes-Benz Logo" 
              className="w-8 h-8"
              style={{filter: 'brightness(0)'}}
            />
            <div>
              <h2 className="text-lg font-light tracking-wide text-gray-900">Mercedes-Benz</h2>
              <p className="text-xs text-gray-600 uppercase tracking-widest">BrandOS</p>
            </div>
          </div>
        </div>
        
        <div className="py-6" role="menu">
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