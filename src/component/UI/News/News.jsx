import Image from "next/image";
import React from "react";
import shop from "../../../assets/img/hero-bg.png";
import NewsHeadlines from "./NewsHeadlines";
const News = () => {
  return (
    <div>
      <div className="px-10 my-20">
        <h1 className="text-3xl font-semibold mb-7 uppercase text-center">
          h2 title one liner
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-9 gap-5 ">
          <div className="p-5 sm:col-span-4">
            <div className="">
              <Image
                className="rounded-t-xl"
                src={shop}
                height={480}
                alt="Picture of the author"
              />
              <div className="flex items-center ">
                <div className="bg-primary text-white text-sm p-5 align-middle text-center">
                  Oct <span className="font-semibold text-xl">31</span>
                </div>
                <div className="bg-[#003FA9] text-white p-5 w-full">
                  <h1 className="font-semibold text-xl">Lorem ipsum us </h1>
                  <h3 className="font-light text-sm">Oct 31, 2024</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-5 p-5">
            <NewsHeadlines></NewsHeadlines>
            <NewsHeadlines></NewsHeadlines>
            <NewsHeadlines></NewsHeadlines>
            <div className="mt-10">
              <button className="gs-input-button ">
                View all Notice & Events
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
