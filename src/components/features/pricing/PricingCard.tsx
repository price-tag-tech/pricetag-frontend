import React from 'react';
import { Plan } from './Plans';
import Button from '../../common/Button';

interface PricingCardProps {
  plan: Plan;
  onSubscribeClick: (plan: Plan) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, onSubscribeClick }) => {
  const isHighlighted = plan.isHighlighted;

  const cardClasses = `
    rounded-2xl p-4 flex flex-col h-full 
    ${isHighlighted
      ? 'bg-[#1f1f1f] text-white shadow-lg scale-105 lg:scale-100'
      : 'bg-gray-100 text-gray-900 border border-gray-100 shadow-md'} 
  `;


  const priceColor = isHighlighted ? 'text-green-500' : 'text-green-500';
  const textColor = isHighlighted ? 'text-gray-200' : 'text-gray-600';
  const acronymBg = isHighlighted ? 'bg-[#1f1f1f]' : 'bg-gray-100';
  const acronymText = isHighlighted ? 'text-white' : 'text-gray-800';
  const bulletBg = isHighlighted ? 'bg-gray-500' : 'bg-gray-500';

  return (
    <div className={cardClasses}>
      {/* Acronym Badge */}
      <div className={`inline-block ${acronymBg} ${acronymText} border border-gray-500 text-xs font-bold px-2 py-0.5 rounded-lg mb-3 w-fit`}> 
          {plan.acronym}
      </div>

      {/* Plan Name */}
      <h3 className="text-base font-bold mb-1.5">{plan.name}</h3> 

      {/* Description */}
      <p className={`text-xs ${textColor} mb-4 h-12 overflow-hidden`}>{plan.description}</p> 

      {/* Price */}
      <div className="mb-4"> 
          <span className={`text-2xl font-semibold ${priceColor}`}>{plan.price}</span> 
          {plan.priceSuffix && <span className={`text-xs font-medium ${textColor} ml-1`}>{plan.priceSuffix}</span>} 
      </div>

      {/* Features */}
      <ul className={`space-y-1.5 mb-5 ${textColor} text-xs`}> 
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className={`w-1 h-1 rounded-full ${bulletBg} mr-2 mt-[5px] flex-shrink-0`}></span> 
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Subscribe Button */}
      <Button
        variant={isHighlighted ? 'primary' : 'secondary'}
        size="sm"
        fullWidth={true}
        className="mt-auto py-2"
        onClick={() => onSubscribeClick(plan)}
      >
        {plan.buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;