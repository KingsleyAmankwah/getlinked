import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../index.css";
import registerImg from "../assets/thumbsUp.png";
import starImg from "../assets/starPurple.png";
// import whiteStar from "../assets/star.png";
import greyStar from "../assets/greyStar.png";
import lens from "../assets/lens.png";
import manImg from "../assets/manW.png";
import ladyImg from "../assets/ladyW.png";
import { Link } from "react-router-dom";

function Register() {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    team_name: "",
    phone_number: "",
    email: "",
    project_topic: "",
    category: "",
    group_size: "",
    privacy_policy_accepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const fetchCategories = async () => {
    try {
      const baseUrl = "https://backend.getlinked.ai";
      const api = `${baseUrl}/hackathon/categories-list`;

      const response = await fetch(api);

      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      } else {
        console.error("Failed to fetch category list");
      }
    } catch (error) {
      console.error("Error fetching category list:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.privacy_policy_accepted) {
      Swal.fire({
        icon: "info",
        text: "Please accept the terms and conditions and privacy policy.",
        customClass: {
          title: "custom-sweetalert",
          popup: "custom-sweetalert",
          confirmButton: "custom-btn",
        },
        buttonsStyling: false,
      });
      return;
    }

    try {
      const baseUrl = "https://backend.getlinked.ai";
      const apiUrl = `${baseUrl}/hackathon/registration`;

      const formDataCopy = {
        ...formData,
        group_size: parseInt(formData.group_size, 10),
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataCopy),
      });

      if (response.ok) {
        // Clear the form data
        setFormData({
          team_name: "",
          phone_number: "",
          email: "",
          project_topic: "",
          category: "",
          group_size: "",
          privacy_policy_accepted: false,
        });

        // Show SweetAlert2 success message
        Swal.fire({
          icon: "success",
          title: "Congratulations you have Successfully Registered",
          text: "Yes, it was easy and you did it!. check your mail box for next steps",
          confirmButtonText: "Go Back",
          imageUrl:
            "https://github.com/KingsleyAmankwah/edu-hub/blob/master/src/assets/success.png?raw=true",
          imageAlt: "Confirm_image",
          imageHeight: "200",
          imageWidth: "200",
          customClass: {
            title: "custom-sweetalert",
            popup: "custom-sweetalert",
            confirmButton: "custom-btn",
          },
          buttonsStyling: false,
        });
      } else {
        // Handle errors (e.g., show an error message)
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div>
      <div className="bg-color text-white w-full md:h-screen">
        <nav className="p-4">
          <div className="hidden mx-auto md:flex justify-between items-center max-width">
            <div className="text-white font-bold text-[2.25rem]">
              get<span className="tertiary-color">linked</span>
            </div>
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
                  className="bg-transparent border border-[#fe34b9] text-white px-6 py-3 rounded-[0.25rem]"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="max-width container md:mt-28">
          <div className="flex justify-center w-full items-center md:flex-row flex-col h-full md:h-[70vh]">
            <div className="w-1/2 relative">
              <img
                src={starImg}
                alt="star"
                className="absolute left-24 top-12 hidden md:block"
              />
              <img
                src={lens}
                alt="lens"
                className="absolute w-[70%] h-[70%] rounded-full rotate-180"
              />
              <img src={registerImg} alt="register_img" className="relative" />
              <img
                src={starImg}
                alt="star"
                className="absolute md:right-24 bottom-28 right-0 w-5"
              />
              <img
                src={greyStar}
                alt="star"
                className="hidden md:block absolute bottom-10 left-24"
              />
            </div>
            <div className="contact-form flex flex-col text-left md:w-1/2 w-full h-full">
              <div>
                <div className="relative">
                  <img
                    src={greyStar}
                    alt="star"
                    className="absolute right-24 top-0"
                  />
                </div>

                <h1 className="absolute top-0 md:relative tertiary-color text-2xl font-semibold pl-7 md:pl-4">
                  Register
                </h1>

                <p className="pl-4 relative">
                  Be part of something{" "}
                  <span className="tertiary-color">_______________</span>
                  <img
                    src={ladyImg}
                    alt="lady_walking"
                    className="absolute -top-2 left-44"
                  />
                  <img
                    src={manImg}
                    alt="man_walking"
                    className="absolute -top-3 left-48"
                  />
                </p>
                <h2 className="relative text-xl pl-7 md:pl-4">
                  CREATE YOUR ACCOUNT
                </h2>
              </div>
              <form
                className="rounded-lg bg-opacity-3 p-4 relative"
                onSubmit={handleSubmit}
              >
                <div className="flex flex-col md:flex-row w-full justify-between">
                  <div className="form-group w-full md:mr-8">
                    <label htmlFor="">Team's Name</label>
                    <input
                      type="text"
                      placeholder="Enter the name of your group"
                      name="team_name"
                      value={formData.team_name}
                      onChange={handleChange}
                      className="w-full p-2 my-2 rounded-sm border bg-transparent text-white"
                      required
                    />
                  </div>
                  <div className="form-group w-full">
                    <label htmlFor="">Phone</label>
                    <input
                      type="text"
                      placeholder="Enter the name of your phone number"
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={handleChange}
                      maxLength="13"
                      className="w-full p-2 my-2 rounded-sm border bg-transparent text-white"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row w-full justify-between">
                  <div className="form-group w-full md:mr-8">
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 my-2 rounded-sm border bg-transparent text-white"
                      required
                    />
                  </div>
                  <div className="form-group w-full">
                    <label htmlFor="">Project Title</label>
                    <input
                      type="text"
                      placeholder="What's your group project topic?"
                      name="project_topic"
                      value={formData.project_topic}
                      onChange={handleChange}
                      className="w-full p-2 my-2 rounded-sm border bg-transparent text-white"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-row w-full justify-between">
                  <div className="form-group w-2/3 md:w-full mr-8">
                    <label htmlFor="">Category</label>
                    <select
                      name="category"
                      className="w-full p-2 my-2 rounded-sm border bg-transparent"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option>Select your category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group w-1/3 md:w-full">
                    <label htmlFor="">Group Size</label>
                    <select
                      name="group_size"
                      className="w-full p-2 my-2 rounded-sm border relative z-100 bg-transparent"
                      value={formData.group_size}
                      onChange={handleChange}
                    >
                      <option>Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>

                <p className="tertiary-color">
                  Please review your registration details before submitting
                </p>

                <div className="flex items-start justify-start mt-4">
                  <label>
                    <input
                      type="checkbox"
                      name="privacy_policy_accepted"
                      checked={formData.privacy_policy_accepted}
                      onChange={handleChange}
                    />
                    <span className="ml-2">
                      I agree with the event terms and conditions and privacy
                      policy
                    </span>
                  </label>
                </div>

                <div className="flex items-center primary-bg justify-center mt-4 cursor-pointer">
                  <button
                    type="submit"
                    className=" text-white text-sm py-2 px-8 rounded-sm "
                  >
                    Register Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
