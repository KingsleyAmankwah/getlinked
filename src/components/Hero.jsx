import React from "react";
import starIcon from "../assets/star.png";

function Hero() {
  return (
    <div className="border border-x-0 border-y-[#FFFFFF2E]">
      <div className="max-width px-4 py-8">
        {/* On mobile, display the second div before the first div */}
        <div className="md:flex md:justify-between">
          {/* Second Div */}
          <div className="md:w-1/2 text-center mb-6 md:mb-0 order-1 md:order-2">
            <p className="text-white text-[1.5rem] md:text-[2.25rem] italic font-bold">
              Igniting a Revolution in{" "}
              <span className="relative pb-2 inline-block">
                HR Innovation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="255"
                  height="17"
                  viewBox="0 0 255 17"
                  fill="none"
                  className="absolute bottom-0 left-0 w-full h-4"
                >
                  <path
                    d="M1 14.043C43.3333 5.7097 154.4 -5.95697 254 14.043"
                    stroke="#FF26B9"
                    strokeWidth="5"
                  />
                </svg>
              </span>
            </p>
          </div>

          {/* First Div */}
          <div className="md:mt-12 md:ml-12 order-2 md:order-1 mx-auto">
            <img src={starIcon} alt="" className="w-4 md:w-6 mx-auto" />
          </div>
        </div>
      </div>

      <div className="showcase max-width">
        <div className="first"></div>
        <div className="second"></div>
      </div>
    </div>
  );
}

export default Hero;
