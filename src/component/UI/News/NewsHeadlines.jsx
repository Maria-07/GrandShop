import React from "react";

const NewsHeadlines = () => {
  const blog_part =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet nulla. Quisque non ante quis lorem fermentum auctor sed sed ligula. Aenean turpis sapien, efficitur quis placerat at, facilisis bibendum erat. Aliquam quis mattis leo, sed egestas augue. Phasellus vitae vulputate nisi, vitae eleifend enim. Aenean rutrum tristique purus,";
  return (
    <div>
      <div className="flex gap-2 border-b-[1px] pb-4 mb-4">
        <div className="bg-primary text-white text-xl p-5 font-normal rounded-xl align-middle text-center">
          Oct <span className="font-semibold text-2xl">12</span>
        </div>
        <div>
          {" "}
          <h1 className="text-xl font-semibold mb-4">
            Lorem ipsum dolor sit amet, consectetur
          </h1>
          <div className="text-sm font-medium text-accent break-all">
            <p className="text-[15px]">
              {blog_part.length > 180
                ? `${blog_part.slice(0, 180)} ...`
                : blog_part}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsHeadlines;
