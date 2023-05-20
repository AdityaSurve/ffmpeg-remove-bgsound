import React from "react";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  return (
    <div className="fixed h-[100px] w-[100%] top-0 flex items-center justify-between px-20 z-[10000]">
      <div className="text-white font-semibold text-3xl cursor-default">
        FFMPEG
      </div>
      <div className="flex flex-row text-white cursor-pointer">
        <div
          style={{ borderRight: "1px solid #ffffff40 " }}
          className="pr-10 hover:text-sky-600 cursor-pointer"
        >
          username
        </div>
        <div className="ml-10 hover:text-sky-600">
          <Link to="/">Log Out</Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
