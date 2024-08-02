import Image from "next/image";
import React from "react";
import { RiBook2Line } from "react-icons/ri";
import shop from "../../../../assets/img/hero-bg.png";

const ExploreCard2 = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 my-5 lg:pl-7">
        <div className="relative p-10 hidden lg:block">
          <Image
            className="rounded-3xl"
            src={shop}
            width={600}
            height={700}
            alt="Picture of the author"
          />
          <div>
            <div className="hidden lg:block text-sm align-middle text-center  font-semibold pt-6 px-7 h-28 w-28 rounded-full bg-primary text-white absolute bottom-[16%] right-[-3%]  ">
              <h1>Explore cool products</h1>
            </div>
          </div>
        </div>
        <div className="lg:p-20 p-3">
          <h1 className="text-3xl font-semibold mb-7 uppercase flex items-center gap-3">
            <RiBook2Line /> title h4
          </h1>
          <p className="font-medium text-lg text-[#2a2f349c] break-all">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
            ornare congue ante a facilisis. Vestibulum sed magna in ligula
            aliquam luctus non in ante. Nullam egestas, nunc at rutrum
            tincidunt, purus metus malesuada ante, at cursus massa turpis sit
            amet nulla. Quisque non ante quis lorem fermentum auctor sed sed
            ligula. Aenean turpis sapien, efficitur quis placerat at, facilisis
            bibendum erat. Aliquam quis mattis leo,
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard2;
