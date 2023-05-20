import React from "react";
import backgound from "../assets/edge_background.jpg";
import ParticlesComponent from "../components/Particles";
import DashboardNav from "../components/DashboardNav";
import BannerImg from "../assets/banner-img.svg";
import { useState } from "react";

const Dashboard = () => {
  const [videoURL, setVideoURL] = useState(undefined);
  const [process, setProcess] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setVideoURL(url);
  };

  const handleProcess = (e) => {
    setProcess(true);
  };

  return (
    <div className="overflow-x-hidden">
      <img
        src={backgound}
        alt=""
        className="h-screen w-screen opacity-20 z-[0] fixed"
      />
      <DashboardNav />
      <ParticlesComponent />
      <div className="h-screen w-screen flex justify-center items-center  bg-gradient-to-b from-slate-900 to-sky-900">
        <div className="flex bg-slate-900 z-[10000] flex-row w-[70%] h-[70%] mt-8 rounded-3xl">
          <div
            className="  h-[100%] flex flex-col text-white justify-center items-center"
            style={{ flex: 3 }}
          >
            <div className="text-3xl font-bold">WELCOME</div>
            <div className="mt-10">
              Upload your video to remove the background noise
            </div>
            <div>
              <input
                type="file"
                id="file"
                name="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <label
                htmlFor="file"
                className="flex items-center bg-sky-700 hover:bg-sky-800 px-5 py-3 rounded-xl mt-10 cursor-pointer max-w-min"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-upload"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                  <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
                </svg>
                <span className="ml-2 ">Upload</span>
              </label>
            </div>
            {videoURL && (
              <div className="mt-10 text-sm text-yellow-600">
                Editing might need some time, please be patient
              </div>
            )}
          </div>
          <div
            className=" h-[100%] flex justify-center items-center p-10 bg-slate-600 rounded-3xl"
            style={{ flex: 2 }}
          >
            {!videoURL && <img src={BannerImg} alt="" className="h-[70%] " />}
            {videoURL && (
              <div className="flex flex-col gap-5 justify-center items-center">
                <span className="text-gray-300 text-lg">PREVIEW</span>
                <video src={videoURL} controls className="h-[70%] rounded-md" />
                <div className="flex items-center bg-sky-700 hover:bg-sky-800 px-5 py-3 rounded-xl mt-3 cursor-pointer max-w-min">
                  {!process && (
                    <span className=" text-white " onClick={handleProcess}>
                      Process
                    </span>
                  )}
                  {process && (
                    <div className="min-w-max">
                      <span className=" text-white mr-4">Processing</span>
                      <div
                        class="inline-block text-white h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status"
                      >
                        <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                          Loading...
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
