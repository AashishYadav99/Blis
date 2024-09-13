import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

function HostessRegisterForm() {
  const [stageName, setStageName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { stageName, email, mobileNo };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxntYbj-3C12XklUE6liLjpyhLDcFCQgqspWVH3Lods2y_LMbma4mVJ13aDp9lwmccsNQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        setStageName("");
        setEmail("");
        setMobileNo("");
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <main className="bg-gradient-to-b from-[#800000] to-[#F5F7F8] bg-fixed min-h-screen p-10">
      <div className="flex justify-start">
        <Link to="/">
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-500 focus:ring-2 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center space-x-2"
          >
            <IoMdArrowRoundBack className="h-5 w-5 mr-2" />
            Back
          </button>
        </Link>
      </div>
      <div className="flex flex-col items-center mt-12">
        <div>
          <h1 className="text-center text-white text-3xl font-bold mb-8">
            Registration Form For Hostess
          </h1>
        </div>

        <div className="flex items-center justify-center w-full">
          <form
            className="w-full max-w-3xl bg-[#ab4646] p-8 rounded-lg shadow-lg shadow-black"
            onSubmit={handleSubmit}
          >
            <div className="mb-5">
              <label
                htmlFor="stageName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Stage Name
              </label>
              <input
                type="text"
                id="stageName"
                value={stageName}
                onChange={(e) => setStageName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Stage Name"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="mobileNo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mobile No
              </label>
              <input
                type="tel"
                id="mobileNo"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Number"
                required
              />
            </div>

            <div className="flex justify-center w-full gap-4">
              <button
                type="submit"
                className="text-white bg-[#800000] focus:ring-2 focus:outline-red focus:ring-red-400 font-medium rounded-lg text-xl w-64 px-5 py-2.5 text-center dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black-800 shadow shadow-white"
              >
                Submit
              </button>
              
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default HostessRegisterForm;
