import React, { useRef } from 'react';

interface NavigationItemProps {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  isActive: boolean;
  onClick: (id: string) => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({ 
  id, 
  label, 
  icon: Icon, 
  isActive, 
  onClick 
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // Let parent handle arrow keys for navigation
    if (['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
      return;
    }
    
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick(id);
    }
  };

  return (
    <button
      ref={buttonRef}
      data-nav-id={id}
      onClick={() => onClick(id)}
      onKeyDown={handleKeyDown}
      className={`
        w-full flex items-center space-x-3 px-6 py-3 text-left transition-all duration-200
        hover:bg-gray-800 hover:border-r-2 hover:border-white
        focus:bg-gray-800 focus:border-r-2 focus:border-white focus:outline-none
        ${isActive 
          ? 'bg-gray-800 border-r-2 border-white text-white' 
          : 'text-gray-400 hover:text-white'
        }
      `}
      aria-current={isActive ? 'page' : undefined}
      role="menuitem"
      tabIndex={isActive ? 0 : -1}
    >
      <Icon size={18} />
      <span className="font-light tracking-wide">{label}</span>
    </button>
  );
};

export default NavigationItem;