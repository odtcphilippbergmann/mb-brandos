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
    primary: 'bg-white text-black hover:bg-gray-100',
    secondary: 'bg-gray-800 text-white hover:bg-gray-700',
    outline: 'border border-white text-white hover:bg-white hover:text-black'
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