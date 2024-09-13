import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/BLIS.png";
import { MdPrivacyTip } from "react-icons/md";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="bg-gradient-to-b from-[#800000] to-[#F5F7F8] bg-fixed min-h-screen p-10 flex flex-col justify-between">
      <div className="flex justify-between ">
        <div>
          <Link
            to="https://drive.google.com/drive/folders/1ICYUMt0tUSKh2hGltU2pLQV9J8MabEFD?usp=drive_link
"
          >
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-500 focus:ring-2 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center space-x-2"
            >
              {" "}
              Download APK
            </button>
          </Link>
        </div>
        <div>
          <Link to="#">
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-500 focus:ring-2 focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 flex items-center space-x-2"
            >
              <MdPrivacyTip className="h-5 w-5 mr-2" />
              Our Policy
            </button>
          </Link>
        </div>
      </div>
      <div className="text-center my-5">
        <div className="flex justify-center">
          <img
            src={logo}
            alt=""
            className="h-32 w-32 rounded-full shadow-lg shadow-white"
          />
        </div>
        <div>
          <h1 className="font-bold text-3xl text-[#800000] mt-10 ">BLIS</h1>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col space-y-8">
          <Link to="/agencyform">
            <button
              type="button"
              className="h-16 w-64 text-white bg-red-700 focus:ring-2 focus:ring-white font-medium rounded-lg text-2xl px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  shadow-lg shadow-white"
            >
              Register for Agency
            </button>
          </Link>

          <Link to="/hostessform">
            <button
              type="button"
              className="h-16 w-68 text-white bg-red-700  focus:ring-2 focus:ring-white font-medium rounded-lg text-2xl px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800  shadow-lg shadow-white"
            >
              Register for Hostess
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
