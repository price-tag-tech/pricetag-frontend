import React, { ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
  to?: string;
  className?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disableFocusRing?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  href,
  to,
  className = '',
  isLoading = false,
  leftIcon,
  rightIcon,
  disableFocusRing = false,
  ...rest
}) => {
  // Base classes with enhanced styling
  const baseClasses = `
    relative overflow-hidden inline-flex items-center justify-center
    transition-all duration-300 transform active:scale-95
    font-['Poppins'] font-[600] tracking-wide
    ${disableFocusRing ? 'focus:outline-none' : 'focus:outline-none focus:ring-2 focus:ring-offset-2'}
    disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
  `;

  // Variant classes
  const variantClasses = {
    primary: `bg-[#1dbf73] text-white hover:bg-[#19a563] ${!disableFocusRing ? 'focus:ring-[#1dbf73]' : ''}`,
    secondary: `bg-[#1f1f1f] text-white hover:bg-[#333] ${!disableFocusRing ? 'focus:ring-[#1f1f1f]' : ''}`,
    outline: `border border-[#1dbf73] text-[#1dbf73] hover:bg-[#1dbf73] hover:text-white ${!disableFocusRing ? 'focus:ring-[#1dbf73]' : ''}`,
    text: `text-[#1dbf73] hover:underline ${!disableFocusRing ? 'focus:ring-[#1dbf73]' : ''}`
  };

  // Enhanced size classes
  const sizeClasses = {
    sm: 'text-sm py-2 px-4 rounded-lg',
    md: 'text-[15px] py-3 px-6 rounded-xl',
    lg: 'text-base py-4 px-8 rounded-xl'
  };

  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';

  // Enhanced loading element
  const loadingElement = isLoading ? (
    <svg className="animate-spin -ml-1 mr-3 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  ) : null;

  // Combined classes
  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${widthClasses}
    ${className}
    ${isLoading ? 'opacity-80 cursor-not-allowed' : ''}
  `;

  // Shimmer effect for primary and secondary variants
  const shimmerElement = (variant === 'primary' || variant === 'secondary') && !isLoading ? (
    <div className="absolute inset-0 -top-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:top-full transition-all duration-700 ease-out" />
  ) : null;

  // If the button is a link (external or internal)
  if (href) {
    return (
      <a href={href} className={`group ${combinedClasses}`} {...rest as any}>
        {shimmerElement}
        <span className="relative z-10 flex items-center">
        {loadingElement}
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </span>
      </a>
    );
  }

  // If the button is a router link
  if (to) {
    return (
      <Link to={to} className={`group ${combinedClasses}`} {...rest as any}>
        {shimmerElement}
        <span className="relative z-10 flex items-center">
        {loadingElement}
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </span>
      </Link>
    );
  }

  // Otherwise, render a regular button
  return (
    <button className={`group ${combinedClasses}`} disabled={isLoading} {...rest}>
      {shimmerElement}
      <span className="relative z-10 flex items-center">
      {loadingElement}
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </span>
    </button>
  );
};

export default Button;