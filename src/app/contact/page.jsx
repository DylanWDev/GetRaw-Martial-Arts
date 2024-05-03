"use client";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform form submission logic here, like sending data to your server
    console.log(formData);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-none">
        <div className="w-full bg-DarkCharcoal">
          <Nav />
        </div>
      </div>
      <div className="flex-grow flex items-center justify-center h-screen bg-white">
        <div className="py-8 w-full md:w-3/4 lg:w-1/2 xl:w-1/3 mb-24">
          <form
            onSubmit={handleSubmit}
            className="mx-auto border border-black p-5 rounded-lg bg-white shadow-2xl shadow-black"
          >
            <div className="mb-4">
              <h1 className="text-center font-bold text-2xl sm:text-2xl lg:text-3xl xl:text-4xl m-5">
                Schedule your free class
              </h1>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Student's First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-red-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Student's Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-red-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-red-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:border-red-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-Gold text-black font-bold py-2 px-4 rounded-md hover:bg-DarkerGold focus:outline-none focus:bg-DarkerGold"
            >
              Schedule My Free Class
            </button>
            <p className="text-xs text-gray-400 p-1">
              By opting into this webform you are giving consent for Brian
              Chewning's GetRaw Martial Arts to send you periodic text messages.
              Standard rates may apply. You may opt-out anytime by replying
              STOP.
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
