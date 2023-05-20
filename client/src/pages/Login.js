import React from "react";
import backgound from "../assets/edge_background.jpg";
import { Link } from "react-router-dom";
import ParticlesComponent from "../components/Particles";

const Login = () => {
  return (
    <div className="overflow-x-hidden">
      <img
        src={backgound}
        alt=""
        className="h-screen w-screen opacity-20 z-[0] fixed"
      />
      <ParticlesComponent />
      <div className="h-screen w-screen flex flex-col justify-center items-center  bg-gradient-to-b from-slate-900 to-sky-900">
        <div className="h-[70%] w-[40%] bg-slate-900 text-gray-200 rounded-xl flex flex-col justify-center items-center z-[10000]">
          <div className="text-4xl font-semibold">Welcome to FFMPEG</div>
          <div className="text-xl mt-5">Login</div>

          <div className="mt-10">
            <form className="flex flex-col gap-2 justify-center items-center">
              <input
                type="email"
                placeholder="email"
                className="p-3 rounded-md w-[300px] bg-transparent border-b-2 border-b-sky-900 outline-none"
              />
              <input
                type="password"
                placeholder="password"
                className="p-3 rounded-md w-[300px] bg-transparent border-b-2 border-b-sky-900 outline-none"
              />
              <button className="bg-sky-700 hover:bg-sky-800 mt-5 text-white w-[150px] font-semibold px-5 py-5 rounded-xl z-[10000]">
                <Link to="/dashboard">Log In</Link>
              </button>
            </form>
          </div>
          <div className="mt-5">
            Don't have an account?{" "}
            <Link to="/register" className="hover:text-sky-600">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
