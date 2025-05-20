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
  // Base classes
  const baseClasses = `
    inline-flex items-center justify-center
    transition-colors duration-200
    font-['Poppins'] font-[500]
    ${disableFocusRing ? 'focus:outline-none' : 'focus:outline-none focus:ring-2 focus:ring-offset-2'}
  `;

  // Variant classes
  const variantClasses = {
    primary: `bg-[#1dbf73] text-white hover:bg-[#19a563] ${!disableFocusRing ? 'focus:ring-[#1dbf73]' : ''}`,
    secondary: `bg-[#1f1f1f] text-white hover:bg-[#333] ${!disableFocusRing ? 'focus:ring-[#1f1f1f]' : ''}`,
    outline: `border border-[#1dbf73] text-[#1dbf73] hover:bg-[#1dbf73] hover:text-white ${!disableFocusRing ? 'focus:ring-[#1dbf73]' : ''}`,
    text: `text-[#1dbf73] hover:underline ${!disableFocusRing ? 'focus:ring-[#1dbf73]' : ''}`
  };

  // Size classes
  const sizeClasses = {
    sm: 'text-xs py-1 px-3 rounded',
    md: 'text-[14px] py-2 px-4 rounded-[0.3125rem]',
    lg: 'text-base py-3 px-6 rounded-md'
  };

  // Width classes
  const widthClasses = fullWidth ? 'w-full' : '';

  // Loading state
  const loadingElement = isLoading ? (
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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

  // If the button is a link (external or internal)
  if (href) {
    return (
      <a href={href} className={combinedClasses} {...rest as any}>
        {loadingElement}
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </a>
    );
  }

  // If the button is a router link
  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...rest as any}>
        {loadingElement}
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </Link>
    );
  }

  // Otherwise, render a regular button
  return (
    <button className={combinedClasses} disabled={isLoading} {...rest}>
      {loadingElement}
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;