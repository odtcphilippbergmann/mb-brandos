import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  const baseClasses = 'bg-gray-900 rounded-lg p-6';
  const hoverClasses = hover ? 'hover:bg-gray-800 transition-colors' : '';
  const classes = `${baseClasses} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;