import React, { useState } from "react";
import Swal from "sweetalert2";
import "../index.css";
import { Link } from "react-router-dom";
import starImg from "../assets/starPurple.png";
import whiteStar from "../assets/star.png";
import lens from "../assets/lens.png";

function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const baseUrl = "https://backend.getlinked.ai";
      const apiUrl = `${baseUrl}/hackathon/contact-form`;

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          first_name: "",
          email: "",
          message: "",
        });

        Swal.fire({
          icon: "success",
          title: "Thank you for contacting us.",
          text: "We will get back to you right away!.",
          confirmButtonText: "Go Back",
          timer: 10000,
          customClass: {
            title: "custom-sweetalert",
            popup: "custom-sweetalert",
            confirmButton: "custom-btn",
          },
          buttonsStyling: false,
        });
      } else {
        // Handle errors (e.g., show an error message)
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <div className="bg-color text-white w-full h-screen">
        <nav className="p-4">
          <div className="hidden mx-auto md:flex justify-between items-center max-width">
            {/* Logo */}
            <div className="text-white font-bold text-[2.25rem]">
              get<span className="tertiary-color">linked</span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex justify-between w-[60%]">
              <li>
                <Link to="/" className="nav-link">
                  Timeline
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base tertiary-color">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/register"
                  className="primary-bg text-white px-6 py-3 rounded-[0.25rem]"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="max-width container mt-28">
          <div className="md:hidden block cursor-pointer absolute top-10 left-8 z-[1000]">
            <Link to="/">
              <svg
                width="23"
                height="23"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Group 1">
                  <circle
                    id="Ellipse 4"
                    cx="11.5"
                    cy="11.5"
                    r="11"
                    stroke="url(#paint0_linear_177_298)"
                  />
                  <path
                    id="Vector 5"
                    d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667"
                    stroke="white"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_177_298"
                    x1="11.5"
                    y1="0"
                    x2="11.5"
                    y2="23"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#903AFF" />
                    <stop offset="1" stop-color="#FF26B9" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
          <div className="flex justify-center w-full items-center md:flex-row flex-col h-full md:h-[60vh]">
            <img
              src={starImg}
              alt="star"
              className="absolute left-28 top-24 md:top-28 w-5"
            />
            <img
              src={lens}
              alt="lens"
              className="absolute md:w-[70%] md:h-[70%] w-1/2 h-1/2 rounded-full rotate-180 top-0 left-0"
            />

            <div className="w-full md:w-1/2 md:order-1 order-2">
              <div className="hidden md:block p-8 relative">
                <h1 className="text-[#D434FE] text-4xl font-semibold">
                  Get in touch
                </h1>

                <h3 className="py-8 ">
                  Contact <br /> Information
                </h3>
                <p>
                  27,Alara Street <br /> Yaba 100012 <br /> Lagos State
                </p>
                <p className="py-8 ">Call Us : 07067981819</p>
                <p>
                  we are open from Monday-Friday <br /> 08:00am - 05:00pm
                </p>
              </div>

              <div className="flex flex-col md:justify-start justify-center md:items-start items-center w-full pl-8">
                <div>
                  {" "}
                  <p className="tertiary-color  py-4">Share on</p>
                </div>
                <div className="flex flex-row justify-between w-[30%]">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="17"
                      viewBox="0 0 19 17"
                      fill="none"
                    >
                      <path
                        d="M6.04545 0H0L7.13364 9.3619L0.388636 17H2.67727L8.19418 10.7533L12.9545 17H19L11.5658 7.2437L17.9636 0H15.675L10.5053 5.8531L6.04545 0ZM13.8182 15.3L3.45455 1.7H5.18182L15.5455 15.3H13.8182Z"
                        fill="white"
                      />
                    </svg>
                  </div>

                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="20"
                      viewBox="0 0 11 20"
                      fill="none"
                    >
                      <path
                        d="M7 11.5H9.5L10.5 7.5H7V5.5C7 4.47 7 3.5 9 3.5H10.5V0.14C10.174 0.0970001 8.943 0 7.643 0C4.928 0 3 1.657 3 4.7V7.5H0V11.5H3V20H7V11.5Z"
                        fill="#F8F8F8"
                      />
                    </svg>
                  </div>

                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6.93994 5C6.93968 5.53043 6.72871 6.03904 6.35345 6.41392C5.97819 6.78881 5.46937 6.99927 4.93894 6.999C4.40851 6.99874 3.89991 6.78777 3.52502 6.41251C3.15014 6.03725 2.93968 5.52843 2.93994 4.998C2.94021 4.46757 3.15117 3.95897 3.52644 3.58408C3.9017 3.20919 4.41051 2.99874 4.94094 2.999C5.47137 2.99927 5.97998 3.21023 6.35486 3.58549C6.72975 3.96075 6.94021 4.46957 6.93994 5ZM6.99994 8.48H2.99994V21H6.99994V8.48ZM13.3199 8.48H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.9 14.9399 7.13 13.2799 10.16L13.3199 8.48Z"
                        fill="#F8F8F8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form flex flex-col text-left md:w-1/2 w-full h-full md:order-2">
              <div>
                <h1 className="tertiary-color text-xl font-semibold pl-8 md:pl-4">
                  Questions or need assistance?
                </h1>
                <h2 className="tertiary-color text-xl font-semibold pl-8 md:pl-4">
                  Let us know about it!
                </h2>
              </div>
              <form
                className="rounded-lg bg-opacity-3 p-4 md:p-4"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full p-2 my-2 rounded-sm border bg-transparent text-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 my-2 rounded-sm border bg-transparent text-white"
                  required
                />
                <textarea
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 my-2 rounded-sm border bg-transparent text-white h-[7rem]"
                  required
                />
                <div className="flex items-center justify-center mt-4 cursor-pointer">
                  <button
                    type="submit"
                    className="primary-bg text-white text-sm py-2 px-8 rounded-sm "
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="relative">
                <img
                  src={starImg}
                  alt="star"
                  className="absolute bottom-10 w-5"
                />
                <img
                  src={whiteStar}
                  alt="star"
                  className="absolute right-0 w-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
