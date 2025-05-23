import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from "../assets/logo/logo.svg";

interface EmailVerificationProps {
  email?: string;
}

const EmailVerification: React.FC<EmailVerificationProps> = ({ 
  email = "princegodson24@gmail.com" 
}) => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [isResending, setIsResending] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // verification logic here
    console.log("Verification code:", verificationCode);
  };

  const handleResendCode = async () => {
    setIsResending(true);
    //resend logic here
    console.log("Resending verification code to:", email);
    
    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
    }, 2000);
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      <div className="flex justify-between items-center px-4 md:px-8 py-4 md:py-6">
        <Link to="/" className="flex items-center h-full">
          <img
            src={logoImage}
            alt="PriceTag Logo"
            className="w-[6.5rem] md:w-[8.6875rem] h-[2.5rem] md:h-[3.4375rem] object-contain mt-1 md:mt-0"
          />
        </Link>
      </div>

      <div className="flex-1 flex flex-col justify-start px-4 md:px-8 py-8 md:py-12">
        <div className="w-full max-w-[417px] mx-auto bg-white">
          <h1 className="w-full text-[#1f1f1f] text-center font-['Poppins'] text-xl md:text-[1.5625rem] font-semibold leading-tight md:leading-[2.1875rem] mb-2">
            Enter Verification Code
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center">
              <p className="text-[#444] text-center font-['Poppins'] text-sm leading-normal max-w-[18.1875rem] mx-auto">
                Please Enter the code sent to your email{' '}
                <span className="font-medium">{email}</span>.
              </p>
            </div>
            
            <div className="flex gap-3 ml-6 items-end">
              <div className="flex-1">
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="Enter the 6-digit Code"
                  className="w-full h-[2.8125rem] rounded-[0.3125rem] border border-[#e1e1e1] px-4 text-sm font-['Poppins'] focus:outline-none focus:border-[#1dbf73] transition-colors"
                  maxLength={6}
                  required
                />
              </div>
              
              <button
                type="submit"
                className="flex-shrink-0 w-[4.75rem] h-[2.8125rem] rounded-[0.3125rem] bg-[#1f1f1f] text-white font-['Poppins'] text-sm font-semibold hover:bg-black transition-colors"
              >
                Verify
              </button>
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="button"
                onClick={handleResendCode}
                disabled={isResending}
                className="w-[15.0625rem] h-[2.8125rem] rounded-[0.3125rem] bg-[#d4ffe5] text-[#003912] font-['Poppins'] text-sm font-medium hover:bg-[#c0f5d7] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isResending ? "Resending..." : "Resend Verification Code"}
              </button>
            </div>

            <div className="flex justify-center pt-2">
              <button
                type="button"
                onClick={handleBackToHome}
                className="inline-flex items-center text-[#444] hover:text-[#1dbf73] transition-colors"
              >
                <svg 
                  width={14} 
                  height={9} 
                  viewBox="0 0 14 9" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path 
                    fillRule="evenodd" 
                    clipRule="evenodd" 
                    d="M2.02913 5.01684L5.36449 8.26911L4.61492 9L0 4.50002L4.61492 0L5.36449 0.730898L2.02913 3.9832H14V5.01684H2.02913Z" 
                    fill="currentColor" 
                  />
                </svg>
                <span className="text-xs font-medium font-['Poppins']">
                  Back to home
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 md:px-8 py-4 md:py-6">
        <div className="flex justify-between items-center text-[#444] font-['Poppins'] text-[.8125rem]">
          <span>© Price Tag. {new Date().getFullYear()}</span>
          <div className="space-x-6">
            <Link
              to="/terms"
              className="hover:text-[#1dbf73] transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              to="/privacy"
              className="hover:text-[#1dbf73] transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;