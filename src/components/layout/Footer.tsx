import React from "react";
import logoImage from "../../assets/logo/logo.svg";
import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "../common/Button";

interface FooterProps {
  logoPath?: string;
}

const Footer: React.FC<FooterProps> = () => {

  const links = [
    {
      name: "shoppers",
      links: [
        { link: '', name: 'How it works', },
        { link: '', name: 'Payment Methods', },
        { link: '', name: 'Shipping & Delivery', },
        { link: '', name: 'Return Policy', },
        { link: '', name: 'Buyer Protection', },
        { link: '', name: 'Help Center' },
      ]
    },
    {
      name: "businesses",
      links: [
        { link: '', name: 'Sell on Pricetag', },
        { link: '', name: 'Business Resources', },
        { link: '', name: 'Affiliate Program', },
        { link: '', name: 'Advertising', },
        { link: '', name: 'Pricing Plans', },
        { link: '', name: 'Business Support' },
      ]
    },
    {
      name: "about",
      links: [
        { link: "", name: 'Company Info', },
        { link: "", name: 'News & Blog', },
        { link: "", name: 'Career', },
        { link: "", name: 'Investor Relations', },
        { link: "", name: 'Terms of Service', },
        { link: "", name: 'Privacy Policy' },
      ]
    }
  ]

  return (
    <footer className="w-full md:px-24 pt-8 px-10">
      <div className="w-full h-px bg-[#e1e1e1] mb-8" />
      <div className="w-full mb-8">
        <div className="flex flex-col md:flex-row justify-around gap-y-8">
          <div className="w-full md:w-1/4 h-fit">
            <Link to="/" className="flex items-center h-full group">
              <img
                src={logoImage}
                alt="PriceTag Logo"
                className="w-[6.5rem] md:w-[8.6875rem] h-[2.5rem] md:h-[3.4375rem] object-contain mt-3 md:mt-0 transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </Link>

            <div className="my-4">
              <p className="text-xl text-gray-500">
                Your one-stop platform for discovering,
                shopping, and selling online.
              </p>
            </div>

            <div className="flex space-x-4 mb-4 text-gray-500">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-700 transition duration-300"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-700 transition duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-700 transition duration-300"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full md:w-3/4 flex justify-around flex-col md:flex-row gap-y-8">
            {
              links.map((group, i) => (
                <div key={i} className="w-full lg:w-1/4 flex flex-col gap-y-3">
                  <h3 className="text-xl font-medium">
                    For {group.name}
                  </h3>
                  <div className="flex flex-col gap-2 text-lg font-extralight">
                    {group.links.map((item, i) => (
                      <Link key={i} to={item.link} className="thin-link">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))
            }
          </div>
        </div>

      </div>
      <div className="w-full h-px bg-[#e1e1e1] my-6" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 pt-0">
        <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mb-6 md:mb-0">
          <div className="flex-between mb-4 w-full text-lg font-light text-gray-600">
            <p>
              © {new Date().getFullYear()} Pricetag. All rights reserved.
            </p>
            <div className="flex items-center gap-x-5">
              <Link to="#" className="thin-link">
                Privacy
              </Link>

              <Link to="#" className="thin-link">
                Terms
              </Link>

              <Link to="#" className="thin-link">
                Sitemap
              </Link>
            </div>
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

    </footer>
  );
};

export default Footer;
