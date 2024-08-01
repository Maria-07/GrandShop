import React from "react";
import shop from "../../../assets/img/hero-bg.png";
import Image from "next/image";

const About = () => {
  return (
    <div className=" mx-auto">
      <div className="my-20 px-10 relative">
        <div className="p-[90px] w-[50%] border rounded-3xl absolute bg-white top-7 shadow-md">
          <h1 className="text-5xl font-semibold mb-7">
            About The Quick <br /> Shop this is H2
          </h1>
          <p className="font-medium text-lg text-[#2a2f349c] break-all">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
            ornare congue ante a facilisis. Vestibulum sed magna in ligula
            aliquam luctus non in ante. Nullam egestas, nunc at rutrum
            tincidunt, purus metus malesuada ante, at cursus massa turpis sit
            amet{" "}
          </p>
          <button className="gs-input-button mt-5">
            Learn more about Shop
          </button>
        </div>

        <div className="ml-[40%]">
          <Image
            className="rounded-3xl"
            src={shop}
            width={900}
            height={900}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
