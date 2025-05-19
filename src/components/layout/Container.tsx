import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  fluid?: boolean;
  className?: string;
  noPadding?: boolean;
}

const Container: React.FC<ContainerProps> = ({
  children,
  fluid = false,
  className = '',
  noPadding = false,
}) => {
  return (
    <div
      className={`
        mx-auto
        ${fluid ? 'w-full' : 'max-w-[1440px]'} 
        ${noPadding ? '' : 'px-4 sm:px-6 lg:px-8'} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;