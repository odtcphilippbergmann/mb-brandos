import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  const baseClasses = 'bg-white border border-gray-200 rounded-lg p-6 shadow-sm';
  const hoverClasses = hover ? 'hover:shadow-md transition-all' : '';
  const classes = `${baseClasses} ${hoverClasses} ${className}`;
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;