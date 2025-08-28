import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'font-medium tracking-wide transition-all duration-300 flex items-center justify-center space-x-2';
  
  const variantClasses = {
    primary: 'bg-gray-900 text-white hover:bg-gray-800 focus:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900',
    outline: 'border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white focus:outline-none focus:ring-2 focus:ring-gray-900'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4',
    lg: 'px-12 py-6 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;