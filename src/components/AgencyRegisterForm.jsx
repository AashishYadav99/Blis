// src/AgencyRegisterForm.js
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import Swal from "sweetalert2";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function AgencyRegisterForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_iaere6b", "template_dpr2btc", form.current, {
        publicKey: "NzPL1PVgzSlUB200t",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <main className="bg-gradient-to-b from-[#800000] to-[#F5F7F8] bg-fixed min-h-screen p-4">
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
            <h1 className="text-center text-white text-3xl font-bold mb-4">
              Registration Form For Agency
            </h1>
          </div>

          <div className="flex items-center justify-center w-full">
            <form
              ref={form}
              className="w-full max-w-3xl bg-[#ab4646] p-8 rounded-lg shadow-lg shadow-black"
              onSubmit={sendEmail}
            >
              <div className="mb-5">
                <label
                  htmlFor="agencyName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Agency Name
                </label>
                <input
                  type="text"
                  id="agencyName"
                  name="from_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Agency Name"
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
                  name="from_email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>


              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <input
                  type="text"
                  id="message"
                  name="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="message"
                  required
                />
              </div>

              <div className="flex justify-center w-full">
                <button
                  type="submit"
                  className="text-white bg-[#800000] focus:ring-2 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-xl w-64 px-5 py-2.5 text-center dark:bg-red dark:hover:bg-black-700 dark:focus:ring-black-800 shadow shadow-white"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default AgencyRegisterForm;
