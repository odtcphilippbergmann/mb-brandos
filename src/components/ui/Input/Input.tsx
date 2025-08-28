import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  const baseClasses = 'w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-opacity-20 focus:outline-none transition-colors';
  const errorClasses = error ? 'border-red-500' : '';
  const classes = `${baseClasses} ${errorClasses} ${className}`;
  
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700" htmlFor={props.id}>
          {label}
        </label>
      )}
      <input 
        className={classes} 
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${props.id}-error` : undefined}
        {...props} 
      />
      {error && (
        <p className="text-sm text-red-400" id={`${props.id}-error`} role="alert">{error}</p>
      )}
    </div>
  );
};

export default Input;