import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="fixed h-[100px] w-[100%] top-0 flex items-center justify-between px-20">
      <div className="text-white font-semibold text-3xl cursor-default">
        FFMPEG
      </div>
      <div className="flex flex-row text-white cursor-pointer">
        <div
          style={{ borderRight: "1px solid #ffffff40 " }}
          className="pr-10 hover:text-sky-600"
          onClick={() => window.open("https://ffmpeg.org/documentation.html")}
        >
          Docs
        </div>
        <div className="ml-10 hover:text-sky-600">
          <Link to="/register">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
