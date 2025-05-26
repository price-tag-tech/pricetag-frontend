import React from 'react';
import Button from './common/Button';


type ButtonVariant = "secondary" | "primary" | "outline" | "text";
type ButtonSize = "sm" | "md" | "lg"; 


interface BecomeAnAgentProps {
  heading?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  buttonVariant?: ButtonVariant; 
  buttonSize?: ButtonSize;      
  bgColor?: string;
}

const BecomeAnAgent: React.FC<BecomeAnAgentProps> = ({
  heading = "Default Heading Text",
  buttonText = "Click Me",
  onButtonClick,
  buttonVariant = 'secondary', 
  buttonSize = 'lg',         
  bgColor = 'bg-emerald-50' 
}) => {

  const handleClick = onButtonClick || (() => console.log("Button clicked!"));

  return (
    <div className="py-12 md:py-16 font-['Poppins']">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${bgColor} rounded-2xl shadow-sm text-center py-12 px-6 sm:py-16 sm:px-8 lg:py-20 lg:px-12`}>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-800 leading-tight mb-8 md:mb-10 max-w-3xl mx-auto">
            {heading}
          </h2>
          
          <Button
            variant={buttonVariant} 
            size={buttonSize}       
            onClick={handleClick}
          >
            {buttonText}
          </Button>

        </div>
      </div>
    </div>
  );
};

export default BecomeAnAgent;