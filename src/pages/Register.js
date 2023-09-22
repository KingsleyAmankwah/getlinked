import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import "../index.css";
import registerImg from "../assets/thumbsUp.png";

function Register() {
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    try {
      const baseUrl = "https://backend.getlinked.ai";
      const api = `${baseUrl}/hackathon/categories-list`;

      const response = await fetch(api);

      if (response.ok) {
        const data = await response.json();
        setCategories(data); // Set the category list in state
        console.log("Category List:", data);
      } else {
        console.error("Failed to fetch category list");
      }
    } catch (error) {
      console.error("Error fetching category list:", error);
    }
  };

  useEffect(() => {
    // Fetch the category list when the component mounts
    fetchCategories();
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.privacy_policy_accepted) {
      // Check if the privacy policy checkbox is not checked
      Swal.fire({
        icon: "error",
        text: "Please accept the terms and conditions and privacy policy.",
        customClass: {
          title: "custom-sweetalert",
          popup: "custom-sweetalert",
          confirmButton: "custom-btn",
        },
        buttonsStyling: false,
      });
      return; // Prevent form submission if checkbox is not checked
    }

    try {
      const baseUrl = "https://backend.getlinked.ai";
      const apiUrl = `${baseUrl}/hackathon/registration`;

        // Convert the group_size to an integer
    formData.group_size = parseInt(formData.group_size, 10);

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
          title: "Registration Successful",
          text: "You are now registered for the event.",
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
      <div className="bg-color text-white w-full h-screen">
        <nav className="p-4">
          <div className="hidden mx-auto md:flex justify-between items-center max-width">
            <div className="text-white font-bold text-[2.25rem]">
              get<span className="tertiary-color">linked</span>
            </div>
            <ul className="hidden md:flex justify-between w-[60%]">
              <li>
                <a href="#time" className="nav-link">
                  Timeline
                </a>
              </li>
              <li>
                <a href="#overview" className="nav-link">
                  Overview
                </a>
              </li>
              <li>
                <a href="#faq" className="nav-link">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#c" className="tertiary-color text-base">
                  Contact
                </a>
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
            <div className="w-1/2">
              <img src={registerImg} alt="reggister_img" />
            </div>
            <div className="contact-form flex flex-col text-left md:w-1/2 w-full h-full">
              <div>
                <h1 className="tertiary-color text-xl font-semibold pl-7 md:pl-4">
                  Register
                </h1>
                <p className="pl-7">Be part of something_________</p>
                <h2 className="text-xl pl-7 md:pl-4">CREATE YOUR ACCOUNT</h2>
              </div>
              <form
                className="rounded-lg bg-opacity-3 p-4"
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
                      className="w-full p-2 my-2 rounded-sm border  bg-transparent"
                    >
                      <option value="">Select</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
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
