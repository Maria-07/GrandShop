import Image from "next/image";
import React from "react";
import shop from "../../../assets/img/hero-bg.png";

const InfoSection2 = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="mt-28 mb-[20%] relative">
          <Image
            className="rounded-[30px]"
            src={shop}
            width={"100%"}
            height={900}
            alt="Picture of the author"
          />
          <div>
            <div
              className="p-[50px] w-[48%] border-[1px] border-[##D9D9D9
] rounded-[30px] absolute  bg-white top-[-60px] right-[2%] shadow-md"
            >
              <h1 className="text-3xl font-semibold mb-7 uppercase">
                Title of the section <br /> text h2
              </h1>
              <p className="font-medium text-lg text-[#2a2f349c] break-all">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                interdum augue sed tellus accumsan, nec congue quam lacinia.
                Duis ornare congue ante a facilisis. Vestibulum sed magna in
                ligula aliquam luctus non in ante. Nullam egestas, nunc at
                rutrum tincidunt, purus metus malesuada ante, at cursus massa
                turpis sit amet nulla. Quisque non ante quis lorem fermentum
                auctor sed sed ligula. Aenean turpis sapien, efficitur quis
                placerat at, facilisis bibendum erat. Aliquam quis mattis leo,
                sed egestas augue. Phasellus vitae vulputate nisi, vitae
                eleifend enim. Aenean rutrum tristique purus,
              </p>
              <button className="gs-input-button mt-7">Learn more</button>
            </div>
          </div>
          <div>
            <div
              className="p-[50px] w-[48%] border-[1px] border-[##D9D9D9
] rounded-[30px] absolute  bg-white left-[2%] bottom-[-25%]  shadow-md"
            >
              <h1 className="text-3xl font-semibold mb-7 uppercase">
                Title of the section <br /> text h2
              </h1>
              <p className="font-medium text-lg text-[#2a2f349c] break-all">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                interdum augue sed tellus accumsan, nec congue quam lacinia.
                Duis ornare congue ante a facilisis. Vestibulum sed magna in
                ligula aliquam luctus non in ante. Nullam egestas, nunc at
                rutrum tincidunt, purus metus malesuada ante, at cursus massa
                turpis sit amet nulla. Quisque non ante quis lorem fermentum
                auctor sed sed ligula. Aenean turpis sapien, efficitur quis
                placerat at, facilisis bibendum erat. Aliquam quis mattis leo,
                sed egestas augue. Phasellus vitae vulputate nisi, vitae
                eleifend enim. Aenean rutrum tristique purus,
              </p>
              <button className="gs-input-button mt-7">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection2;
