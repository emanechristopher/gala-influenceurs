import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}) => {
  const baseClasses = 'font-medium rounded transition-all duration-200 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-gold text-noir hover:bg-gold-light',
    secondary: 'bg-rouge text-white hover:bg-rouge-light',
    outline: 'bg-transparent border-2 border-gold text-gold hover:bg-gold/10'
  };
  
  const sizeClasses = {
    sm: 'text-sm py-1.5 px-3',
    md: 'py-2 px-5',
    lg: 'text-lg py-3 px-8'
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;