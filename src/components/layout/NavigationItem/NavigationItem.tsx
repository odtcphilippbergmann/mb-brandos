import React from 'react';

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
  return (
    <button
      onClick={() => onClick(id)}
      className={`
        w-full flex items-center space-x-3 px-6 py-3 text-left transition-all duration-200
        hover:bg-gray-800 hover:border-r-2 hover:border-white
        ${isActive 
          ? 'bg-gray-800 border-r-2 border-white text-white' 
          : 'text-gray-400 hover:text-white'
        }
      `}
      aria-current={isActive ? 'page' : undefined}
    >
      <Icon size={18} />
      <span className="font-light tracking-wide">{label}</span>
    </button>
  );
};

export default NavigationItem;