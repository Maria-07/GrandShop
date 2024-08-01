import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const InfoSection = () => {
  return (
    <div>
      <div className="info-bg flex items-center justify-center">
        <div>
          {" "}
          <div className="h-[90px] w-[90px] bg-white mx-auto my-7"></div>
          <h1 className="text-center text-secondary text-3xl mb-5">
            Title line h2
          </h1>
          <p className="mx-auto break-all text-white w-[80%] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
            ornare congue ante a facilisis. Vestibulum sed magna in ligula
            aliquam luctus non in ante. Nullam egestas, nunc at rutrum
            tincidunt, purus metus malesuada ante, at cursus massa turpis sit
            amet nulla. Quisque non ante quis lorem fermentum auctor sed sed
            ligula. Aenean turpis sapien, efficitur quis placerat at, facilisis
            bibendum erat. Aliquam quis mattis leo, sed egestas augue. Phasellus
            vitae vulputate nisi, vitae eleifend enim. Aenean rutrum tristique
            purus,
          </p>
          <div className="flex items-center justify-center my-5 text-lg">
            <button className="flex items-center gap-2 text-white hover:text-secondary transition-all">
              Learn More
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
