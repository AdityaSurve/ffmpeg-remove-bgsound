import React from "react";
import Navbar from "../components/Navbar";
import backgound from "../assets/edge_background.jpg";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <img
        src={backgound}
        alt=""
        className="h-screen w-screen opacity-20 z-[0] fixed"
      />
      <Navbar />
      <div className="h-screen w-screen flex flex-col justify-center items-center  bg-gradient-to-b from-slate-900 to-sky-900">
        <div className="text-[50px] font-bold text-gray-300 max-w-[50%] text-center">
          Rapidly remove the background noise from your video files.
        </div>
        <div className="text-gray-400 mt-5 text-[20px] max-w-[60%]">
          A powerful{" "}
          <span className="text-[22px] font-semibold text-sky-600 italic">
            open-source command-line tool{" "}
          </span>{" "}
          used for handling multimedia data
        </div>
        <div className="mt-8 flex flex-row gap-10  z-[10000]">
          <button className="bg-sky-700 hover:bg-sky-800 text-white font-semibold px-5 py-5 rounded-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
