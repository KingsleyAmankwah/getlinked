import React from "react";
import ideaImg from "../assets/Idea.png";
import bigStar from "../assets/starPurple.png";
import star from "../assets/star.png";
import arrowImg from "../assets/arrow.png";
import ladyImg from "../assets/lady.png";
import teamImg from "../assets/team.png";
import lensImg from "../assets/lens.png";

function Overview() {
  return (
    <>
      <div className="border border-x-0 border-y-[#FFFFFF2E] text-white">
        <div className="max-width py-16">
          <div className="flex flex-col justify-center items-center md:flex-row md:space-x-20">
            {/* Image */}
            <div className="relative mb-8">
              <img src={bigStar} alt="" className="w-4 h-4" />
              <img src={ideaImg} alt="Your" className="w-full" />
              <img
                src={arrowImg}
                alt=""
                className="absolute right-[45%] md:right-0 "
              />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-2/3 p-4 text-center md:text-left mt-8">
              <div className="">
                <div className="text-center md:text-left">
                  {/* Apply text-center on mobile */}
                  <h1 className="text-3xl md:text-4xl font-bold">
                    Introduction to getlinked
                  </h1>
                  <h2 className="text-2xl md:text-4xl font-bold tertiary-color">
                    tech Hackathon 1.0
                  </h2>
                </div>

                <img
                  src={bigStar}
                  alt="star_image"
                  className="md:w-8 md:h-8 w-3 h-3 ml-auto" // Apply ml-auto to align the image to the right
                />
              </div>

              <p className="mt-4 text-base md:text-lg">
                Our tech hackathon is a melting pot of visionaries, and its
                purpose is as clear as day: to shape the future. Whether you're
                a coding genius, a design maverick, or a concept wizard, you'll
                have the chance to transform your ideas into reality. Solving
                real-world problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-x-0 border-y-[#FFFFFF2E] text-white">
        <div className="max-width py-16">
          <div className="relative flex flex-col justify-center items-center md:flex-row md:space-x-20">
            {/* <img
              src={lensImg}
              alt=""
              className="absolute top-4 -left-[55%] w-full h-full opacity-50 rounded-full"
            /> */}
            <div className="w-full md:w-2/3 p-4 text-center md:text-left mt-8 md:order-1 order-2">
              <div className=" relative flex flex-col md:flex-row justify-between w-full text-center md:text-left">
                {/* Apply text-center on mobile */}
                <div className="text-center">
                  <h1 className="text-3xl md:text-4xl font-bold">Rules and</h1>
                  <h2 className="text-2xl md:text-4xl font-bold tertiary-color">
                    Guidelines
                  </h2>
                </div>

                <img
                  src={star}
                  alt=""
                  className="md:absolute md:left-[50%] md:top-0 w-4 h-4 ml-auto md:ml-0"
                />
              </div>

              <div className="flex relative">
                <p className="mt-4 text-base md:text-lg">
                  Our tech hackathon is a melting pot of visionaries, and its
                  purpose is as clear as day: to shape the future. Whether
                  you're a coding genius, a design maverick, or a concept
                  wizard, you'll have the chance to transform your ideas into
                  reality. Solving real-world problems, pushing the boundaries
                  of technology, and creating solutions that can change the
                  world, that's what we're all about!
                </p>
                <img
                  src={star}
                  alt=""
                  className="absolute right-0 bottom-0 w-4 h-4"
                />
              </div>
            </div>

            {/* Image */}
            <div className="relative mb-4 md:order-2 order-1">
              {/* <img
                src={lensImg}
                alt=""
                className="absolute top-0 left-0 w-full h-full rounded-full"
              /> */}
              <img src={ladyImg} alt="Your" className="w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="border border-x-0 border-y-[#FFFFFF2E] text-white">
        <div className="max-width py-16">
          <div className="relative flex flex-col justify-center items-center md:flex-row md:space-x-20">
            {/* Image */}
            <div className="relative mb-4">
              <img
                src={bigStar}
                alt="star_img"
                className="absolute left-[8rem] -top-16 w-5 h-5 mt-8 md:mt-0"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="134"
                height="134"
                viewBox="0 0 134 134"
                fill="none"
                className="hidden md:block md:absolute left-16 -top-4"
              >
                <circle
                  cx="67"
                  cy="67"
                  r="67"
                  fill="url(#paint0_linear_70_6)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_70_6"
                    x1="134"
                    y1="67"
                    x2="3.69183"
                    y2="67"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#8F01FE" />
                    <stop offset="1" stop-color="#FF2674" />
                  </linearGradient>
                </defs>
              </svg>
              <img
                src={teamImg}
                alt="team_image"
                className="relative w-full h-full"
              />

              <img
                src={lensImg}
                alt=""
                className="absolute bottom-0 w-[50%] h-[50%] rounded-full"
              />

              <img
                src={star}
                alt="star_img"
                className="hidden md:block absolute w-4 h-4 left-[50%] right-[50%] top-[50%] bottom-[50%]"
              />
              <img
                src={star}
                alt="star_img"
                className="hidden md:block absolute w-4 h-4 right-0"
              />
            </div>

            <div className="w-full md:w-2/3 p-4 text-center md:text-left">
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold">
                  Judging Criteria
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold tertiary-color">
                  Key Attributes
                </h2>
              </div>

              <div className="flex flex-col space-y-4 relative">
                <p className="mt-4 text-base md:text-lg">
                  <span className="text-[#FF26B9]">
                    Innovation and Creativity
                  </span>
                  : Evaluate the uniqueness and creativity of the solution.
                  Consider whether it addresses a real-world problem in a novel
                  way or introduces innovative features.
                </p>

                <p>
                  <span className="text-[#FF26B9]">Functionality</span>: Assess
                  how well the solution works. Does it perform its intended
                  functions effectively and without major issues? Judges would
                  consider the completeness and robustness of the solution.
                </p>

                <p>
                  <span className="text-[#FF26B9]">Impact and Relevance</span>:
                  Determine the potential impact of the solution in the real
                  world. Does it address a significant problem, and is it
                  relevant to the target audience? Judges would assess the
                  potential social, economic, or environmental benefits.
                </p>

                <p>
                  <span className="text-[#FF26B9]">Technical Complexity</span>:
                  Evaluate the technical sophistication of the solution. Judges
                  would consider the complexity of the code, the use of advanced
                  technologies or algorithms, and the scalability of the
                  solution.
                </p>

                <p>
                  <span className="text-[#FF26B9] pb-8">
                    Adherence to Hackathon Rules
                  </span>
                  : Judges will Ensure that the team adhered to the rules and
                  guidelines of the hackathon, including deadlines, use of
                  specific technologies or APIs, and any other
                  competition-specific requirements.
                </p>

                <div className="mb-8 sm:flex sm:items-center sm:justify-center block">
                  <a
                    href="#/"
                    className="primary-bg mt-8 px-6 py-3 rounded-[0.25rem] w-36 sm:w-auto sm:ml-0 sm:mr-auto"
                  >
                    Read More
                  </a>
                </div>

                <img
                  src={lensImg}
                  alt=""
                  className="absolute right-0 -bottom-[8rem] w-[50%] h-[50%] rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
