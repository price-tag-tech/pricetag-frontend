import React, { useEffect } from 'react';
import { Plan } from "../components/features/pricing/Plans";
import FlutterwaveLogo from '../assets/logo/flutterwave.svg';
import PaystackLogo from '../assets/logo/paystack.svg';
import PayPalLogo from '../assets/logo/paypal.svg';

interface PricingPaymentPageProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
}

const PricingPaymentPage: React.FC<PricingPaymentPageProps> = ({ isOpen, onClose, plan }) => {
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);

  
  const backdropClasses = `fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`;
  const panelClasses = `fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 transform transition-transform duration-300 ease-in-out px-12 py-4 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`;
  
  const priceColor = 'text-green-500';
  const textColor = 'text-gray-600';
  const acronymBg = 'bg-gray-100';
  const acronymText = 'text-gray-800';
  const bulletBg = 'bg-gray-500';

  return (
    <>
      <div className={backdropClasses} onClick={onClose} aria-hidden="true"></div>

      <div className={panelClasses} role="dialog" aria-modal="true">
        {plan && (
          <>
            {/* PLAN DETAILS */}
            <div>
              <div className={`inline-block ${acronymBg} ${acronymText} border border-gray-500 text-xs font-bold px-2 py-0.5 rounded-lg mb-2 w-fit`}>
                {plan.acronym}
              </div>
              <h3 className="text-base font-bold mb-1 text-gray-900">{plan.name}</h3>
              <p className={`text-xs ${textColor} mb-3`}>{plan.description}</p>
              <div className="mb-3">
                <span className={`text-3xl font-bold ${priceColor}`}>{plan.price}</span>
                {plan.priceSuffix && <span className={`text-xs font-medium ${textColor} ml-1`}>{plan.priceSuffix}</span>}
              </div>
              <ul className={`space-y-1 text-xs ${textColor} mt-5`}>
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className={`w-1 h-1 rounded-full ${bulletBg} mr-2 mt-[5px] flex-shrink-0`}></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            

            {/* PAYMENT PROVIDERS */}
            <div className="my-5">
              <div className="grid grid-cols-2 gap-2">
                <button className="w-full h-11 flex justify-center items-center py-2 px-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <img src={FlutterwaveLogo} alt="Pay with Flutterwave" className="h-8" />
                </button>
                <button className="w-full h-11 flex justify-center items-center py-2 px-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <img src={PaystackLogo} alt="Pay with Paystack" className="h-7" />
                </button>
                <button className="w-full h-11 flex justify-center items-center py-2 px-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <img src={PayPalLogo} alt="Pay with PayPal" className="h-7" />
                </button>
              </div>
            </div>
           

            {/* INFO & BACK BUTTON */}
            <div className="mt-5">
              <div className="flex items-start text-xs text-gray-500 my-3">
                <svg className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</span>
              </div>
              <button onClick={onClose} className="flex items-center text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                Back
              </button>
            </div>
            
          </>
        )}
      </div>
    </>
  );
};

export default PricingPaymentPage;