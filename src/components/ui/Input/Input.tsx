import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  const baseClasses = 'w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors';
  const errorClasses = error ? 'border-red-500' : '';
  const classes = `${baseClasses} ${errorClasses} ${className}`;
  
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      <input className={classes} {...props} />
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  );
};

export default Input;