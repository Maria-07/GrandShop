import Image from "next/image";
import React from "react";
import { RiBook2Line } from "react-icons/ri";
import shop from "../../../../assets/img/hero-bg.png";

const ExploreCard1 = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 my-5 pr-7">
        <div className="p-20">
          <h1 className="text-3xl font-semibold mb-7 uppercase flex items-center gap-3">
            <RiBook2Line /> title h4
          </h1>
          <p className="font-medium text-lg text-[#2a2f349c] break-all">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
            ornare congue ante a facilisis. Vestibulum sed magna in ligula
            aliquam luctus non in ante. Nullam egestas, nunc at rutrum
            tincidunt, purus metus malesuada ante, at cursus massa turpis sit
            amet
          </p>
        </div>
        <div className="relative p-10">
          <Image
            className="rounded-3xl"
            src={shop}
            width={600}
            height={700}
            alt="Picture of the author"
          />
          <div>
            <div className="text-sm  font-semibold pt-9 pl-7 h-28 w-28 rounded-full bg-primary text-white absolute bottom-[16%] left-[-3%]">
              <h1>Explore products</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard1;
