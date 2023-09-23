import React from "react";
import starIcon from "../assets/star.png";
import backgroundImg from "../assets/man.png";
import bulbImg from "../assets/bulb.png";
import chainImg from "../assets/chain.png";
import collisionImg from "../assets/collision.png";
import glowImg from "../assets/glow.png";

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

      <div className="showcase container max-width text-white">
        <div className="flex flex-col lg:flex-row">
          {/* First Div */}
          <div className="lg:w-1/2 p-8 lg:my-4 flex flex-col text-center lg:text-left">
            {/* H1 with SVG */}
            <h1 className=" text-3xl lg:text-7xl font-bold relative">
              getlinked
              <span className="absolute md:-top-12 -top-4 left-[66%] md:left-[65%] transform -translate-x-1/2">
                <img
                  src={bulbImg}
                  className="w-5 h-6 md:w-[3.3rem] md:h-[4.5rem]"
                  alt=""
                />
              </span>
              {""}Tech
            </h1>

            {/* H2 with ImgS */}
            <h2 className="text-3xl md:text-7xl font-bold flex justify-center items-center md:text-left">
              Hackathon <span className="tertiary-color">1.0</span>
              <div className="ml-2 flex flex-row md:items-center md:justify-center">
                <img
                  src={chainImg}
                  className="md:w-20 md:h-20 w-8 h-8"
                  alt=""
                />
                <img
                  src={collisionImg}
                  className="md:w-20 md:h-20 w-8 h-8"
                  alt=""
                />
              </div>
            </h2>

            {/* Paragraph */}
            <p className="my-8 text-xl">
              Participate in getlinked tech Hackathon 2023 and stand a chance to
              win a big prize.
            </p>

            {/* Button */}

            <div className="mb-8 sm:flex sm:items-center sm:justify-center block">
              <a
                href="/register"
                className="primary-bg mt-8 px-6 py-3 rounded-[0.25rem] w-36 sm:w-auto sm:ml-0 sm:mr-auto"
              >
                Register
              </a>
            </div>

            {/* Timer */}
            <div className="mt-8 flex flex-row space-x-2 items-center justify-center w-full md:items-start md:justify-start">
              <div className="p-2 rounded">
                <span className="timer">00</span>H
              </div>
              <div className="p-2 rounded">
                <span className="timer">00</span>M
              </div>
              <div className="p-2 rounded">
                <span className="timer">00</span>s
              </div>
            </div>
          </div>

          {/* Second Div */}
          <div className="lg:w-1/2 relative">
            {/* Background SVG */}
            <img
              src={glowImg}
              alt=""
              className="w-full h-full absolute top-0 left-0"
            />

            {/* Background Image */}
            <img
              src={backgroundImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
