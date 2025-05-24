import React from "react";
import affiliate from "../assets/images/affiliate.svg";
import banner2 from "../assets/images/banner2.svg";
import circle from "../assets/images/circle.svg";
import Icon1 from "../assets/icons/icon1.svg";
import Icon2 from "../assets/icons/icon2.svg";
import Icon3 from "../assets/icons/icon3.svg";
import Icon4 from "../assets/icons/icon4.svg";

const Affiliate: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full max-w-[1354px] lg:h-[665px] my-6 mx-auto">
        <div className="flex-shrink-0 w-full lg:w-[750px] h-[400px] lg:h-[665px] relative">
          <img
            src={affiliate}
            alt="PriceTag Affiliate Banner"
            className="w-full h-full object-cover rounded-t-[1.25rem] lg:rounded-[1.25rem] lg:rounded-tr-none lg:rounded-br-none"
          />
          <div className="absolute inset-0 w-full h-full rounded-t-[1.25rem] lg:rounded-[1.25rem] lg:rounded-tr-none lg:rounded-br-none bg-black/[0.17]" />
        </div>

        <div className="flex flex-col justify-center px-6 lg:pl-16 py-8 lg:py-0 space-y-6 lg:space-y-8">
          <div className="w-full max-w-[522px] relative">
            <h1 className="text-[#1f1f1f] font-['Poppins'] text-[2rem] lg:text-[3.125rem] font-semibold leading-[40px] lg:leading-[65px]">
              Become a Pricetag <br />
              Agent and Earn <br />
              money.
            </h1>
            <img
              src={circle}
              alt="Circle decoration"
              className="absolute lg:-top-4 -top-2 left-[125px] lg:left-[205px] w-[9rem] lg:w-[14rem] h-[3.5rem] lg:h-[6rem] z-10"
            />
          </div>

          <div className="w-full max-w-[517px]">
            <p className="text-[#676565] font-['Poppins'] text-[0.875rem] lg:text-[0.9375rem] leading-[1.4rem] lg:leading-[1.5625rem]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>

          <a
            href="/get-started"
            className="flex items-center justify-center w-[12.5rem] h-[3.125rem] rounded-lg bg-[#1f1f1f] text-white font-['Poppins'] text-[0.9375rem] leading-[1.5625rem] hover:bg-black transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-full max-w-[1416px] mx-auto px-4 lg:px-0 py-16">
        <div className="w-full max-w-[522px] mb-16">
          <h2 className="text-[#1f1f1f] text-center font-['Poppins'] text-[2.5rem] lg:text-[3.125rem] font-semibold leading-[50px] lg:leading-[65px]">
            How to Get Started
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 w-full max-w-[1416px]">
          <div className="flex flex-col items-center w-full max-w-[19.125rem] mx-auto">
            <div className="flex items-center justify-center mb-6">
              <img
                src={Icon1}
                alt="Step 1 icon"
                className="max-w-full h-auto"
              />
            </div>
            <div className="w-full text-left text-[#1f1f1f] font-['Poppins'] text-[1.0625rem] leading-normal px-2 sm:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              consectetur adipiscing
            </div>
          </div>

          <div className="flex flex-col items-center w-full max-w-[19.125rem] mx-auto">
            <div className="flex items-center justify-center mb-6">
              <img
                src={Icon2}
                alt="Step 2 icon"
                className="max-w-full h-auto"
              />
            </div>
            <div className="w-full text-left text-[#1f1f1f] font-['Poppins'] text-[1.0625rem] leading-normal px-2 sm:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              consectetur adipiscing
            </div>
          </div>

          <div className="flex flex-col items-center w-full max-w-[19.125rem] mx-auto">
            <div className="flex items-center justify-center mb-6">
              <img
                src={Icon3}
                alt="Step 3 icon"
                className="max-w-full h-auto"
              />
            </div>
            <div className="w-full text-left text-[#1f1f1f] font-['Poppins'] text-[1.0625rem] leading-normal px-2 sm:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              consectetur adipiscing
            </div>
          </div>

          <div className="flex flex-col items-center w-full max-w-[19.125rem] mx-auto">
            <div className="flex items-center justify-center mb-6">
              <img
                src={Icon4}
                alt="Step 4 icon"
                className="max-w-full h-auto"
              />
            </div>
            <div className="w-full text-left text-[#1f1f1f] font-['Poppins'] text-[1.0625rem] leading-normal px-2 sm:px-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              consectetur adipiscing
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center w-full max-w-[1354px] lg:h-[665px] my-6 mx-auto">
        <div className="flex flex-col justify-center items-center lg:items-start px-6 lg:pl-16 py-8 lg:py-0 space-y-6 lg:space-y-8">
          <div className="w-full ml-5 max-w-[522px] relative">
            <h2 className="text-[#1f1f1f] font-['Poppins'] text-[2rem] lg:text-[3.125rem] font-semibold leading-[40px] lg:leading-[65px]">
              Lorem ipsum dolor sit amet, consectetur
            </h2>
          </div>

          <div className="w-full ml-5 max-w-[517px]">
            <p className="text-[#676565] font-['Poppins'] text-[0.875rem] lg:text-[0.9375rem] leading-[1.4rem] lg:leading-[1.5625rem]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
          </div>
          <a
            href="/get-started"
            className="flex ml-5 items-center justify-center w-[12.5rem] h-[3.125rem] rounded-lg bg-[#1f1f1f] text-white font-['Poppins'] text-[0.9375rem] leading-[1.5625rem] hover:bg-black transition-colors"
          >
            Get Started Now
          </a>
        </div>
        <div className="flex items-center justify-center flex-shrink-0 w-full lg:w-[492px] h-[400px] lg:h-[510px] relative">
          <img
            src={banner2}
            alt="PriceTag Affiliate Banner"
            className="w-full h-full object-cover rounded-t-[1.25rem] lg:rounded-[1.25rem] lg:rounded-tr-none lg:rounded-br-none"
          />
          <div className="absolute inset-0 w-full h-full rounded-t-[1.25rem] lg:rounded-[1.25rem] lg:rounded-tr-none lg:rounded-br-none bg-black/[0.17]" />
        </div>
      </div>

      <div className="flex flex-col items-center w-full max-w-[1307px] mx-auto px-4 lg:px-0 py-16">
        <div className="w-full max-w-[633px] mb-12">
          <h2 className="text-[#1f1f1f] text-center font-['Montserrat'] text-[2rem] lg:text-[2.5rem] font-semibold leading-[50px] lg:leading-[60px]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-8 w-full max-w-[1307px]">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
            <div className="flex flex-col gap-4 w-full lg:w-[620px]">
              <div className="text-[#1f1f1f] font-['Poppins'] text-lg lg:text-xl font-medium leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className="text-[#444] font-['Poppins'] text-sm leading-normal max-w-[573px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-[620px]">
              <div className="text-[#1f1f1f] font-['Poppins'] text-lg lg:text-xl font-medium leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className="text-[#444] font-['Poppins'] text-sm leading-normal max-w-[573px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
            <div className="flex flex-col gap-4 w-full lg:w-[620px]">
              <div className="text-[#1f1f1f] font-['Poppins'] text-lg lg:text-xl font-medium leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className="text-[#444] font-['Poppins'] text-sm leading-normal max-w-[573px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-[620px]">
              <div className="text-[#1f1f1f] font-['Poppins'] text-lg lg:text-xl font-medium leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className="text-[#444] font-['Poppins'] text-sm leading-normal max-w-[573px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
            <div className="flex flex-col gap-4 w-full lg:w-[620px]">
              <div className="text-[#1f1f1f] font-['Poppins'] text-lg lg:text-xl font-medium leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className="text-[#444] font-['Poppins'] text-sm leading-normal max-w-[573px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-[620px]">
              <div className="text-[#1f1f1f] font-['Poppins'] text-lg lg:text-xl font-medium leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className="text-[#444] font-['Poppins'] text-sm leading-normal max-w-[573px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full">
            <div className="flex flex-col gap-4 w-full lg:w-[620px]">
              <div className="text-[#1f1f1f] font-['Poppins'] text-lg lg:text-xl font-medium leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className="text-[#444] font-['Poppins'] text-sm leading-normal max-w-[573px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-[620px]">
              <div className="text-[#1f1f1f] font-['Poppins'] text-lg lg:text-xl font-medium leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </div>
              <div className="text-[#444] font-['Poppins'] text-sm leading-normal max-w-[573px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Affiliate;
