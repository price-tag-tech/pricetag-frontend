import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoImage from "../assets/logo/logo.svg";
import appleImage from "../assets/icons/apple.svg";
import facebookImage from "../assets/icons/facebook.svg";
import googleImage from "../assets/icons/google.svg";
import banner from "../assets/images/banner.svg";
import { Button } from "@headlessui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { loginService } from "../services/authService";
import { toast } from "react-toastify";
import { useProfileStore } from "../store/profile-store";

const LoginSchema = z.object({
  email: z.string().min(3, "Email is too short").email("Invalid email address"),
  password: z.string().min(6, "Password is too short")
})

type LoginType = z.infer<typeof LoginSchema>

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { setUser } = useProfileStore()

  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema)
  })

  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await loginService(data)

    if (response.status === "success") {
      toast.success(response.message)
      setUser(response.data.user)

      navigate("/user")
      return;
    }
    toast.error(response.message)
  }

  const handleSocialLogin = (provider: "google" | "facebook" | "apple") => {
    // login logic here
    console.log(`Login with ${provider}`);
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

      <div className="flex-1 flex items-center justify-center px-4 md:px-8 py-4 md:py-8">
        <div className="w-full max-w-[320px] md:max-w-[933px] min-h-[500px] md:h-[591px] rounded-[1.25rem] border border-[#e1e1e1] flex overflow-hidden bg-white shadow-lg">
          <div className="hidden md:block relative w-[453px] h-full">
            <img
              src={banner}
              alt="PriceTag Banner"
              className="w-full h-full object-cover rounded-tl-[1.25rem] rounded-bl-[1.25rem]"
            />
          </div>

          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
            <div className="w-full max-w-[280px] md:max-w-[393px] mx-auto">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center mb-4 md:mb-6 text-[#444] hover:text-[#1dbf73] transition-colors"
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
                  Back
                </span>
              </button>

              <h1 className="text-[#1f1f1f] font-['Poppins'] text-xl md:text-[1.5625rem] font-semibold leading-tight md:leading-[2.1875rem] mb-6 md:mb-8">
                Continue with your email or username
              </h1>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="flex flex-col">
                  <label className="text-[#444] font-['Poppins'] text-sm font-medium mb-2">
                    Email or username
                  </label>
                  <input
                    {...register("email")}
                    title="input"
                    type="text"
                    className="w-full h-[2.8125rem] rounded-[0.3125rem] border border-[#e1e1e1] px-4 text-sm font-['Poppins'] focus:outline-none focus:border-[#1dbf73] transition-colors"
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                <div className="flex flex-col">
                  <label className="text-[#444] font-['Poppins'] text-sm font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      {...register("password", {
                        required: "Password is required",
                        min: {
                          value: 6,
                          message: "Password is too short"
                        }
                      })}
                      title="inpute"
                      type={showPassword ? "text" : "password"}
                      className="w-full h-[2.8125rem] rounded-[0.3125rem] border border-[#e1e1e1] px-4 pr-12 text-sm font-['Poppins'] focus:outline-none focus:border-[#1dbf73] transition-colors"
                      required
                    />
                    <button
                      title="btn"
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

                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

                  <Link
                    to="/forgot-password"
                    className="text-[#1f1f1f] font-['Poppins'] text-xs underline mt-2 hover:text-[#1dbf73] transition-colors self-start"
                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full h-[2.8125rem] rounded-[0.3125rem] text-white font-['Poppins'] text-sm font-semibold transition-colors ${isSubmitting ? "bg-[#1f1f1faa] hover:bg-black/50" : "bg-[#1f1f1f] hover:bg-black flex items-center justify-center"}`}
                >
                  {isSubmitting ? <div className="w-5 h-5 rounded-full animate-spin border-2 border-b-0 border-l-0 border-white mx-auto" /> : "Login"}
                </Button>

                <div className="relative flex items-center justify-center h-[1.875rem]">
                  <div className="w-full h-px bg-[#e1e1e1]"></div>
                  <div className="absolute bg-white px-3">
                    <span className="text-[#444] font-['Poppins'] text-xs font-medium">
                      Or
                    </span>
                  </div>
                </div>

                <div className="flex gap-1 md:gap-4 justify-center">
                  <button
                    type="button"
                    onClick={() => handleSocialLogin("apple")}
                    className="w-[5.5rem] md:w-[9.625rem] h-[2.8125rem] rounded-[0.3125rem] bg-[#f6f6f6] flex items-center justify-center hover:bg-[#e8e8e8] transition-colors"
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
                    className="w-[5.5rem] md:w-[9.625rem] h-[2.8125rem] rounded-[0.3125rem] bg-[#f6f6f6] flex items-center justify-center hover:bg-[#e8e8e8] transition-colors"
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
                    className="w-[5.5rem] md:w-[9.625rem] h-[2.8125rem] rounded-[0.3125rem] bg-[#f6f6f6] flex items-center justify-center hover:bg-[#e8e8e8] transition-colors"
                  >
                    <img
                      src={googleImage}
                      alt="Google"
                      className="w-[1.4375rem] h-[1.4375rem] object-contain"
                    />
                  </button>
                </div>

                {/* Register Link */}
                <div className="text-left font-medium text-[#444] font-['Poppins'] text-[.8125rem]">
                  <span>New to Pricetag? </span>
                  <Link
                    to="/register"
                    className="font-['Poppins'] text-[#1dbf73] text-xs font-medium hover:text-[#16a863] transition-colors"
                  >
                    Get started
                  </Link>
                </div>
              </form>
            </div>
          </div>
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

export default LoginPage;
