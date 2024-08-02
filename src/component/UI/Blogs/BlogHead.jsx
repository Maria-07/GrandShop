import Image from "next/image";
import React from "react";
import shop from "../../../assets/img/hero-bg.png";

const BlogHead = () => {
  return (
    <div className="flex items-center gap-2 sm:flex-nowrap flex-wrap mb-5">
      <Image
        className="rounded-xl"
        src={shop}
        width={200}
        height={100}
        alt="Picture of the author"
      />
      <div className="p-3">
        <h3 className="text-sm font-medium text-gray  mb-3">
          January 06, 2024
        </h3>
        <h1 className="text-2xl font-semibold">
          Lorem ipsum dolor sit amet, consectetur
        </h1>
      </div>
    </div>
  );
};

export default BlogHead;
