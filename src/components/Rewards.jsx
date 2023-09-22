import React from "react";
import sponsorImg from "../assets/sponsors.png";
import rewardImg from "../assets/Rewards.png";
import trophyImg from "../assets/trophy.png";
function Rewards() {
  return (
    <div>
      <div className="max-width my-12 text-white">
        <div className="block md:hidden text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Prizes and</h1>
          <h2 className="text-2xl md:text-4xl font-bold tertiary-color">
            Rewards
          </h2>
          <p>
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <div className="flex md:flex-row flex-col w-full justify-between items-center">
          <img src={trophyImg} alt="" className="md:w-[80%] w-full" />

          <div className="md:w-1/2 w-full">
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
            <img src={rewardImg} alt="" className="" />
          </div>
        </div>

        <div className="flex flex-col text-center my-28 text-white items-center">
          <h1 className="font-bold text-3xl py-4">Partners and Sponsors</h1>
          <p className="text-center text-lg">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>

          <img
            src={sponsorImg}
            alt=""
            className=" my-8 md:w-[70%] md:h-[70%] w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Rewards;
