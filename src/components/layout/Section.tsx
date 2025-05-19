import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  fullWidth?: boolean;
  noPadding?: boolean;
  containerFluid?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  containerClassName = '',
  fullWidth = false,
  noPadding = false,
  containerFluid = false,
}) => {
  return (
    <section className={`w-full ${noPadding ? '' : 'py-8 md:py-12'} ${className}`}>
      {fullWidth ? (
        children
      ) : (
        <Container fluid={containerFluid} className={containerClassName}>
          {children}
        </Container>
      )}
    </section>
  );
};

export default Section;