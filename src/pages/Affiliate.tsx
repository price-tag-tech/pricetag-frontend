import React from "react";
import affiliate from "../assets/images/affiliate.svg";
import circle from "../assets/images/circle.svg";
import { Link } from "react-router-dom";

const Affiliate: React.FC = () => {
  return (
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

        <Link
          to="/get-started"
          className="flex items-center justify-center w-[12.5rem] h-[3.125rem] rounded-lg bg-[#1f1f1f] text-white font-['Poppins'] text-[0.9375rem] leading-[1.5625rem] hover:bg-black transition-colors"
        >
          Get Started Now
        </Link>
      </div>
    </div>
  );
};

export default Affiliate;
