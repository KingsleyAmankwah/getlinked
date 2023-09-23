import React from "react";
import sponsorImg from "../assets/sponsors.png";
import rewardImg from "../assets/Rewards.png";
import trophyImg from "../assets/trophy.png";
import starImg from "../assets/starPurple.png";
import whiteStar from "../assets/star.png";
import greyStar from "../assets/greyStar.png";
import lens from "../assets/lens.png";
function Rewards() {
  return (
    <div>
      <div className="max-width my-12 text-white">
        <div className="block md:hidden text-center my-8">
          <h1 className="text-3xl md:text-4xl font-bold">Prizes and</h1>
          <h2 className="text-2xl md:text-4xl font-bold tertiary-color">
            Rewards
          </h2>
          <p>
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <div className="flex md:flex-row flex-col w-full justify-between items-center">
          <div className="relative w-[70%] md:w-1/2 my-12">
            <img src={starImg} alt="star" />
            <img
              src={lens}
              alt="lens"
              className="absolute w-full h-full rounded-full rotate-180"
            />
            <img
              src={trophyImg}
              alt="trophy_image"
              className="w-full relative"
            />
            <img src={whiteStar} alt="star" />
          </div>

          <div className="md:w-1/2 w-full relative">
            <div className="hidden md:block text-left mb-12">
              <h1 className="text-3xl md:text-4xl font-bold ">Prizes and</h1>
              <h2 className="text-2xl md:text-4xl font-bold tertiary-color pb-4">
                Rewards
              </h2>
              <p>
                Highlight of the prizes or rewards for winners and for
                participants.
              </p>
            </div>
            <img src={whiteStar} alt="star" className="hidden md:block" />
            <img src={rewardImg} alt="reward_image" />
            <div className="flex w-full my-8 justify-center items-center">
              <img src={greyStar} alt="star" />
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center my-28 text-white items-center relative">
          <h1 className="font-bold text-3xl py-4">Partners and Sponsors</h1>
          <p className="text-center text-lg">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>

          <img
            src={lens}
            alt="lens"
            className="absolute w-full h-full rounded-full rotate-180 left-0 top-0"
          />
          <img src={starImg} alt="star" />
          <img
            src={sponsorImg}
            alt="sponsor_Img"
            className=" my-8 md:w-[70%] md:h-[70%] w-full"
          />
          <img
            src={lens}
            alt="lens"
            className="absolute w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Rewards;
