import Image from "next/image";
import React from "react";
import shop from "../../../assets/img/hero-bg.png";
import BlogHead from "./BlogHead";

const Blogs = () => {
  return (
    <div className="px-10 my-20">
      <h1 className="text-3xl font-semibold mb-7 uppercase text-center">
        h2 title one liner
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 ">
        <div className=" p-5">
          <div>
            <Image
              className="rounded-3xl"
              src={shop}
              width={"100%"}
              height={900}
              alt="Picture of the author"
            />
            <h3 className="text-sm font-medium text-gray mt-5 mb-3">
              January 06, 2024
            </h3>
            <h1 className="text-2xl font-semibold">
              Lorem ipsum dolor sit amet, consectetur
            </h1>
            <p className="text-sm font-medium text-accent my-4 break-all">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
              ornare congue ante a facilisis. Vestibulum sed magna in ligula
              aliquam luctus non in ante. Nullam egestas, nunc at rutrum
              tincidunt, purus metus malesuada ante, at cursus massa turpis sit
              amet nulla. Quisque non ante quis lorem fermentum auctor sed sed
              ligula. Aenean turpis sapien, efficitur quis placerat at,
              facilisis bibendum erat. Aliquam quis mattis leo, sed egestas
              augue. Phasellus vitae vulputate nisi, vitae eleifend enim. Aenean
              rutrum tristique purus,
            </p>
          </div>
        </div>
        <div className="p-5">
          <BlogHead></BlogHead>
          <BlogHead></BlogHead>
          <BlogHead></BlogHead>
          <BlogHead></BlogHead>
        </div>
      </div>
      <div className="flex items-center justify-center mt-14 mb-20">
        <button className="gs-input-button ">View all Notice & Events</button>
      </div>
    </div>
  );
};

export default Blogs;
