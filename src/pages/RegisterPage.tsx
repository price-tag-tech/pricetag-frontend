import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../assets/logo/logo.svg";
import appleImage from "../assets/icons/apple.svg";
import facebookImage from "../assets/icons/facebook.svg";
import googleImage from "../assets/icons/google.svg";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    userName: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //  registration logic here
    console.log("Registration data:", formData);
  };

  const handleSocialLogin = (provider: "google" | "facebook" | "apple") => {
    // login logic here
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Header with Logo */}
      <div className="flex justify-between items-center px-8 py-6">
        <Link to="/" className="flex items-center h-full">
          <img
            src={logoImage}
            alt="PriceTag Logo"
            className="w-[6.5rem] md:w-[8.6875rem] h-[2.5rem] md:h-[3.4375rem] object-contain mt-3 md:mt-0"
          />
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-8 py-8">
        <div className="w-full max-w-[483px]">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center mb-6 text-[#444] hover:text-[#1dbf73] transition-colors"
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
            <span className="text-xs font-medium font-['Poppins']">Back</span>
          </button>

          {/* Title */}
          <h1 className="text-[#1f1f1f] font-['Poppins'] text-[1.5625rem] font-semibold leading-[2.1875rem] mb-8">
            Create a Pricetag account
          </h1>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-[#444] font-['Poppins'] text-sm font-medium mb-2">
                Email
              </label>
              <input
                title="#"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full h-[2.8125rem] rounded-[0.3125rem] border border-[#e1e1e1] px-4 text-sm font-['Poppins'] focus:outline-none focus:border-[#1dbf73] transition-colors"
                required
              />
            </div>

            {/* First Name and Last Name */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-[#444] font-['Poppins'] text-sm font-medium mb-2 block">
                  First Name
                </label>
                <input
                  title="#"
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  className="w-full h-[2.8125rem] rounded-[0.3125rem] border border-[#e1e1e1] px-4 text-sm font-['Poppins'] focus:outline-none focus:border-[#1dbf73] transition-colors"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="text-[#444] font-['Poppins'] text-sm font-medium mb-2 block">
                  Last Name
                </label>
                <input
                  title="#"
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  className="w-full h-[2.8125rem] rounded-[0.3125rem] border border-[#e1e1e1] px-4 text-sm font-['Poppins'] focus:outline-none focus:border-[#1dbf73] transition-colors"
                  required
                />
              </div>
            </div>

            {/* Username */}
            <div className="flex flex-col">
              <label className="text-[#444] font-['Poppins'] text-sm font-medium mb-2">
                Username
              </label>
              <input
                title="#"
                type="text"
                value={formData.userName}
                onChange={(e) => handleInputChange("userName", e.target.value)}
                className="w-full h-[2.8125rem] rounded-[0.3125rem] border border-[#e1e1e1] px-4 text-sm font-['Poppins'] focus:outline-none focus:border-[#1dbf73] transition-colors"
                required
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col">
              <label className="text-[#444] font-['Poppins'] text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                title="#"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                className="w-full h-[2.8125rem] rounded-[0.3125rem] border border-[#e1e1e1] px-4 text-sm font-['Poppins'] focus:outline-none focus:border-[#1dbf73] transition-colors"
                required
              />
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-[#444] font-['Poppins'] text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  title="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="w-full h-[2.8125rem] rounded-[0.3125rem] border border-[#e1e1e1] px-4 pr-12 text-sm font-['Poppins'] focus:outline-none focus:border-[#1dbf73] transition-colors"
                  required
                />
                <button
                  title="#"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#868686] hover:text-[#444] transition-colors"
                >
                  <svg
                    width={17}
                    height={14}
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.97331 11.5497C9.49606 11.6265 9.00356 11.6667 8.50006 11.6667C4.98066 11.6667 2.00155 9.70473 1 7C1.27266 6.26367 1.69187 5.58241 2.22863 4.98079M6.83234 5.58579C7.25907 5.22386 7.84856 5 8.49967 5C9.80196 5 10.8576 5.8954 10.8576 7C10.8576 7.55227 10.5937 8.05227 10.167 8.4142M6.83234 5.58579L10.167 8.4142M6.83234 5.58579L4.24683 3.39277M10.167 8.4142L12.7528 10.6075M4.24683 3.39277L1.42581 1M4.24683 3.39277C5.47282 2.72236 6.93288 2.33333 8.49998 2.33333C12.0194 2.33333 14.9985 4.29527 16 7C15.4444 8.50047 14.2802 9.77233 12.7528 10.6075M12.7528 10.6075L15.5735 13"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col">
              <label className="text-[#444] font-['Poppins'] text-sm font-medium mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  title="#"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  className="w-full h-[2.8125rem] rounded-[0.3125rem] border border-[#e1e1e1] px-4 pr-12 text-sm font-['Poppins'] focus:outline-none focus:border-[#1dbf73] transition-colors"
                  required
                />
                <button
                  title="#"
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#868686] hover:text-[#444] transition-colors"
                >
                  <svg
                    width={17}
                    height={14}
                    viewBox="0 0 17 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.97331 11.5497C9.49606 11.6265 9.00356 11.6667 8.50006 11.6667C4.98066 11.6667 2.00155 9.70473 1 7C1.27266 6.26367 1.69187 5.58241 2.22863 4.98079M6.83234 5.58579C7.25907 5.22386 7.84856 5 8.49967 5C9.80196 5 10.8576 5.8954 10.8576 7C10.8576 7.55227 10.5937 8.05227 10.167 8.4142M6.83234 5.58579L10.167 8.4142M6.83234 5.58579L4.24683 3.39277M10.167 8.4142L12.7528 10.6075M4.24683 3.39277L1.42581 1M4.24683 3.39277C5.47282 2.72236 6.93288 2.33333 8.49998 2.33333C12.0194 2.33333 14.9985 4.29527 16 7C15.4444 8.50047 14.2802 9.77233 12.7528 10.6075M12.7528 10.6075L15.5735 13"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="text-center">
              <p className="font-['Poppins'] text-[.8125rem] font-medium">
                By proceeding, you agree to the{" "}
                <Link
                  to="/terms"
                  className="hover:text-[#16a863] text-[#1dbf73] transition-colors"
                >
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="hover:text-[#16a863] text-[#1dbf73] transition-colors"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[2.8125rem] rounded-[0.3125rem] bg-[#1f1f1f] text-white font-['Poppins'] text-sm font-semibold hover:bg-black transition-colors"
            >
              Create Pricetag account
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center h-[1.875rem]">
              <div className="w-full h-px bg-[#e1e1e1]"></div>
              <div className="absolute bg-white px-3">
                <span className="text-[#444] font-['Poppins'] text-xs font-medium">
                  Or
                </span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleSocialLogin("apple")}
                className="w-[9.625rem] h-[2.8125rem] rounded-[0.3125rem] bg-[#f6f6f6] flex items-center justify-center hover:bg-[#e8e8e8] transition-colors"
              >
                <img
                  src={appleImage}
                  alt="Apple"
                  className="w-[1.4375rem] h-[1.4375rem] object-contain"
                />
              </button>

              <button
                type="button"
                onClick={() => handleSocialLogin("facebook")}
                className="w-[9.625rem] h-[2.8125rem] rounded-[0.3125rem] bg-[#f6f6f6] flex items-center justify-center hover:bg-[#e8e8e8] transition-colors"
              >
                <img
                  src={facebookImage}
                  alt="Facebook"
                  className="w-[1.4375rem] h-[1.4375rem] object-contain"
                />
              </button>

              <button
                type="button"
                onClick={() => handleSocialLogin("google")}
                className="w-[9.625rem] h-[2.8125rem] rounded-[0.3125rem] bg-[#f6f6f6] flex items-center justify-center hover:bg-[#e8e8e8] transition-colors"
              >
                <img
                  src={googleImage}
                  alt="Google"
                  className="w-[1.4375rem] h-[1.4375rem] object-contain"
                />
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <Link
                to="/login"
                className="font-['Poppins'] text-xs font-medium hover:text-[#16a863] transition-colors"
              >
                Already have a Pricetag account? 
              </Link>
              <Link
                  to="/privacy"
                  className="font-['Poppins'] text-xs font-medium text-[#1dbf73] hover:text-[#16a863] transition-colors"
                >
                  Log In
                </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="items-center px-8 py-6">
        <div className="flex justify-between items-center space-x-6 text-[#444] font-['Poppins'] text-[.8125rem]">
          <span>© Price Tag. {new Date().getFullYear()}</span>
          <div className="space-x-6">
            <Link to="/terms" className="hover:text-[#1dbf73] transition-colors">
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

export default RegisterPage;
