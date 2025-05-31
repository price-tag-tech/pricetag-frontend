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
  bgColor
}) => {

  const handleClick = onButtonClick || (() => console.log("Button clicked!"));

  return (
    <div className="py-12 md:py-16 font-montserrat">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${bgColor ? bgColor : "bg-gradient-to-tl to-black from-[#1B1B1B]"} rounded-2xl shadow py-12 px-6 sm:py-16 sm:px-8 lg:py-24 lg:px-48`}>

          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-normal leading-tight mb-8 md:mb-10 max-w-3xl text-white">
            {heading}
          </h2>

          <Button
            variant={buttonVariant}
            size={buttonSize}
            onClick={handleClick}
            className='rounded-3xl border-gray-200/70 border-[1.5pt] bg-transparent font-montserrat font-semibold'
          >
            {buttonText}
          </Button>

        </div>
      </div>
    </div>
  );
};

export default BecomeAnAgent;