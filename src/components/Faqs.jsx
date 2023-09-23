import React, { useState } from "react";
import faqImg from "../assets/faq.png";
import bigStar from "../assets/starPurple.png";
import whiteStar from "../assets/star.png";
import greyStar from "../assets/greyStar.png";
import faqDImg from "../assets/queD.png";
import faqLImg from "../assets/queL.png";

function Faq({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 border border-x-0 border-t-0 border-[#d434fe]">
      <button
        onClick={toggleFaq}
        className="flex justify-between w-full py-2 px-4 bg-color hover:bg-opacity-70 transition-all duration-300 focus:outline-none focus-visible:ring focus-visible:ring-opacity-50"
      >
        <span className="text-white ">{question}</span>
        <span
          className={`tertiary-color ${isOpen ? "transform rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="bg-color p-4 text-white">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

function Faqs() {
  const faqs = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Yes, you can continue working on a project you started before the hackathon, as long as it aligns with the hackathon's theme and rules.",
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer:
        "If you need help during the hackathon, you can reach out to our mentors and organizers who will provide assistance and guidance.",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer:
        "No worries! We will have brainstorming sessions and idea-sharing opportunities to help participants come up with project ideas. You can also join a team with an existing idea.",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer:
        "You can join a team or participate individually. We encourage collaboration, and there will be opportunities to form or join teams during the hackathon.",
    },
    {
      question: "What happens after the hackathon ends?",
      answer:
        "After the hackathon ends, you can continue developing your project, showcase it to a wider audience, and even seek support or funding for further development. We'll also have follow-up events and networking opportunities.",
    },
    {
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Yes, you can continue working on a project you started before the hackathon, as long as it aligns with the hackathon's theme and rules.",
    },
  ];

  return (
    <div>
      <div className="border border-x-0 border-y-[#FFFFFF2E] text-white">
        <div className="max-width py-16">
          <div className="relative flex flex-col w-full justify-between md:flex-row md:space-x-20">
            <div className="w-full md:w-2/3 p-4 text-center md:text-left">
              <div className="text-center md:text-left relative">
                <img src={bigStar} alt="star" className="my-8" />
                <h1 className="text-3xl md:text-4xl font-bold">
                  Frequently Ask
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold tertiary-color">
                  Questions
                </h2>
              </div>

              <div className="py-8">
                {faqs.map((faq, index) => (
                  <Faq
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative md:1/3  my-4 w-full">
              <img
                src={faqLImg}
                alt="faq_img"
                className="absolute top-8 left-[20%] w-15"
              />
              <img
                src={faqDImg}
                alt="faq_img"
                className="absolute w-15 top-[-6%] left-[35%]"
              />
              <img
                src={faqLImg}
                alt="faq_img"
                className="absolute top-8 left-[50%] w-12"
              />

              <img
                src={bigStar}
                alt="star_img"
                className="absolute left-[60%] top-0 w-5 h-5"
              />
              <img
                src={bigStar}
                alt="star_img"
                className="absolute left-32 top-[30%] w-5 h-5 "
              />

              <img src={faqImg} alt="faq_image" className="relative w-full" />
              <img
                src={greyStar}
                alt="star_img"
                className="absolute left-0 top-[50%] w-5 h-5"
              />
              <img
                src={whiteStar}
                alt="star_img"
                className="absolute right-0 bottom-0 w-5 h-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
