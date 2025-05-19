import React from "react";
import logoImage from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "../common/Button";

interface FooterProps {
  logoPath?: string;
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="w-full max-w-[1578px] mx-auto pt-8 px-4">
      <div className="w-full h-px bg-[#e1e1e1] mb-8" />
      <Container>
        <div className="w-full mb-8">
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-8 lg:mb-0 lg:flex-1">
              <div>
                <h3 className="text-[#1f1f1f] font-['Poppins'] text-lg font-medium leading-normal mb-4">
                  Products
                </h3>
                <ul className="space-y-2">
                  {Array(10)
                    .fill(0)
                    .map((_, index) => (
                      <li key={`product-${index}`}>
                        <Link
                          to="/"
                          className="text-[#444] font-['Poppins'] text-[.8125rem] leading-normal hover:text-[#1dbf73] transition-colors"
                        >
                          Lorem ipsum dolor
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[#1f1f1f] font-['Poppins'] text-lg font-medium leading-normal mb-4">
                  Services
                </h3>
                <ul className="space-y-2">
                  {Array(6)
                    .fill(0)
                    .map((_, index) => (
                      <li key={`service-${index}`}>
                        <Link
                          to="/"
                          className="text-[#444] font-['Poppins'] text-[.8125rem] leading-normal hover:text-[#1dbf73] transition-colors"
                        >
                          Lorem ipsum dolor
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[#1f1f1f] font-['Poppins'] text-lg font-medium leading-normal mb-4">
                  Company
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/stores"
                      className="text-[#444] font-['Poppins'] text-[.8125rem] leading-normal hover:text-[#1dbf73] transition-colors"
                    >
                      Find Stores
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/become-agent"
                      className="text-[#444] font-['Poppins'] text-[.8125rem] leading-normal hover:text-[#1dbf73] transition-colors"
                    >
                      Become an Agent
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-[#444] font-['Poppins'] text-[.8125rem] leading-normal hover:text-[#1dbf73] transition-colors"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-[#444] font-['Poppins'] text-[.8125rem] leading-normal hover:text-[#1dbf73] transition-colors"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/terms"
                      className="text-[#444] font-['Poppins'] text-[.8125rem] leading-normal hover:text-[#1dbf73] transition-colors"
                    >
                      Terms and Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/privacy"
                      className="text-[#444] font-['Poppins'] text-[.8125rem] leading-normal hover:text-[#1dbf73] transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-end">
              <a
                href="mailto:info@pricetag.ng"
                className="text-[#1dbf73] font-['Poppins'] text-[.8125rem] font-medium leading-normal mb-4"
              >
                info@pricetag.ng
              </a>

              <div className="flex space-x-4 mb-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    width={11}
                    height={19}
                    viewBox="0 0 11 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.34102 19H6.18872V10.9901H9.65555L10.0364 7.00977H6.18872V5C6.18872 4.44772 6.61937 4 7.15064 4H10.0364V0H7.15064C4.49431 0 2.34102 2.23858 2.34102 5V7.00977H0.417189L0.036377 10.9901H2.34102V19Z"
                      fill="#444444"
                    />
                  </svg>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    width={27}
                    height={25}
                    viewBox="0 0 27 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.3697 4.16675H8.70302C6.30979 4.16675 4.36969 6.03223 4.36969 8.33341V16.6667C4.36969 18.9679 6.30979 20.8334 8.70302 20.8334H17.3697C19.7629 20.8334 21.703 18.9679 21.703 16.6667V8.33341C21.703 6.03223 19.7629 4.16675 17.3697 4.16675Z"
                      stroke="#444444"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.0364 15.625C14.8313 15.625 16.2864 14.2259 16.2864 12.5C16.2864 10.7741 14.8313 9.375 13.0364 9.375C11.2415 9.375 9.78638 10.7741 9.78638 12.5C9.78638 14.2259 11.2415 15.625 13.0364 15.625Z"
                      stroke="#444444"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.9114 7.8125V7.8135"
                      stroke="#444444"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    width={22}
                    height={20}
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.703 20H7.03637V6.66667H11.703V8.88889C12.6977 7.68361 14.2062 6.96508 15.8155 6.93C18.7096 6.9453 21.0448 9.18822 21.0364 11.9444V20H16.3697V12.5C16.183 11.2584 15.0651 10.3373 13.7482 10.34C13.1722 10.3573 12.6284 10.5976 12.2425 11.0051C11.8566 11.4128 11.6617 11.9526 11.703 12.5V20ZM4.70304 20H0.036377V6.66667H4.70304V20ZM2.36971 4.44444C1.08104 4.44444 0.036377 3.44952 0.036377 2.22222C0.036377 0.994922 1.08104 0 2.36971 0C3.65837 0 4.70304 0.994922 4.70304 2.22222C4.70304 2.81159 4.45721 3.37682 4.01962 3.79357C3.58204 4.21032 2.98854 4.44444 2.36971 4.44444Z"
                      fill="#444444"
                    />
                  </svg>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <svg
                    width={19}
                    height={17}
                    viewBox="0 0 19 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_64_53)">
                      <path
                        d="M14.2121 0.81665H16.9721L10.9421 7.32623L18.0364 16.1825H12.4819L8.13188 10.8105L3.15338 16.1825H0.391877L6.84188 9.21961L0.036377 0.817359H5.73188L9.66413 5.72753L14.2121 0.81665ZM13.2439 14.6228H14.7731L4.90088 2.29494H3.25988L13.2439 14.6228Z"
                        fill="#444444"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_64_53">
                        <rect
                          width={18}
                          height={17}
                          fill="white"
                          transform="translate(0.036377)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#e1e1e1] mt-6" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 pt-0">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-6 md:mb-0">
            <div className="flex items-center gap-4">
              <Link to="/">
                <img
                  src={logoImage}
                  alt="PriceTag Logo"
                  className="w-[8.125rem] h-[2.9375rem] object-contain"
                />
              </Link>
              
              <p className="text-[#444] font-['Poppins'] text-[.8125rem] leading-normal mb-4">
                © Price Tag. {new Date().getFullYear()}
              </p>
            </div>
          </div>

          <div className="w-[6.25rem] h-12">
            <Button className="flex items-center justify-center w-[6.25rem] h-12 rounded-[0.625rem] border border-[#e7e7e9] bg-white hover:bg-gray-50 transition-colors">
              <svg
                width={16}
                height={15}
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M15.0364 7.5C15.0364 3.51564 11.9128 0.247953 7.98525 0.0147793C7.90431 0.00587366 7.82315 0 7.74081 0C7.71649 0 7.69216 0.00257796 7.66783 0.00328105C7.62409 0.00257796 7.58059 0 7.53638 0C3.40089 0 0.036377 3.36448 0.036377 7.5C0.036377 11.6355 3.4009 15 7.53638 15C7.58059 15 7.62409 14.9974 7.66807 14.9965C7.69239 14.9974 7.71672 15 7.74105 15C7.82338 15 7.90455 14.9941 7.98548 14.9852C11.9128 14.752 15.0364 11.4848 15.0364 7.5ZM13.641 9.91438C13.3832 9.83939 12.7357 9.67651 11.5933 9.54245C11.6878 8.89515 11.7395 8.21105 11.7395 7.5C11.7395 6.93964 11.7072 6.39641 11.6476 5.87401C13.095 5.70082 13.7291 5.48263 13.7717 5.46761L13.5975 4.97569C13.9226 5.7533 14.1027 6.6059 14.1027 7.49999C14.1027 8.35237 13.9378 9.1663 13.641 9.91438H13.641ZM4.22499 7.50001C4.22499 6.97552 4.25964 6.46341 4.32301 5.9708C5.08157 6.03056 5.98867 6.07462 7.0548 6.08493V9.33762C6.01696 9.3477 5.12998 9.38988 4.38405 9.44708C4.28113 8.82906 4.22499 8.1745 4.22499 7.50001ZM7.98881 0.999767C9.1359 1.33279 10.1181 2.92877 10.5581 5.04411C9.85095 5.10059 8.99929 5.14185 7.98881 5.15148V0.999767ZM7.05485 1.01124V5.15098C6.05536 5.1409 5.19996 5.10011 4.48094 5.04505C4.92981 2.95619 5.91994 1.37215 7.05485 1.01124ZM7.05485 10.2717L7.05486 13.9884C5.99643 13.6519 5.06384 12.2516 4.57895 10.3702C5.27717 10.3188 6.10075 10.2814 7.05485 10.2717ZM7.98884 14.0002L7.98883 10.2715C8.95299 10.2806 9.77331 10.3195 10.4626 10.373C9.98595 12.279 9.0592 13.6894 7.98884 14.0002ZM7.98883 9.33756L7.98884 6.08534C9.06059 6.07527 9.96231 6.03003 10.7108 5.96816C10.7741 6.47637 10.8058 6.98803 10.8058 7.50018C10.8058 8.17584 10.7515 8.83111 10.6519 9.45005C9.91482 9.39029 9.03205 9.3474 7.98883 9.33756ZM13.4251 4.5988C13.2838 4.64286 12.6932 4.81089 11.5096 4.9508C11.2458 3.54535 10.7689 2.34401 10.1483 1.47688C11.5742 2.0977 12.7379 3.20974 13.4251 4.5988ZM5.29705 1.32737C4.53381 2.20552 3.91068 3.46827 3.57058 4.96161C2.51097 4.84654 1.8759 4.7113 1.62166 4.6499C2.36314 3.11718 3.68355 1.91445 5.29705 1.32737ZM1.27408 5.52525C1.45419 5.57423 2.13535 5.7441 3.40196 5.88448C3.32719 6.41979 3.28968 6.95965 3.28968 7.50018C3.28968 8.20726 3.35354 8.8876 3.46862 9.53161C2.38095 9.64928 1.71197 9.79013 1.41187 9.86278C1.12767 9.129 0.970253 8.33289 0.970253 7.49996C0.970253 6.81211 1.07715 6.14863 1.27408 5.52525ZM1.82168 10.7276C2.16178 10.6551 2.77064 10.545 3.67235 10.4503C4.02743 11.7644 4.60494 12.8762 5.29708 13.6723C3.81878 13.1344 2.58819 12.0793 1.82168 10.7276ZM10.1483 13.5228C10.7071 12.7426 11.1494 11.6915 11.4245 10.4644C12.3515 10.571 12.9335 10.6957 13.227 10.77C12.5251 11.9868 11.4456 12.9582 10.1483 13.5228Z"
                  fill="black"
                />
              </svg>
              <span className="text-[#1f1f1f] font-['Poppins'] text-sm font-medium leading-normal">
                English
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
