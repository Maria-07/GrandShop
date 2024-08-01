import React from "react";
import ExploreCard1 from "./ExploreCards/ExploreCard1";
import ExploreCard2 from "./ExploreCards/ExploreCard2";

const Explore = () => {
  return (
    <div>
      <div className="my-20">
        <h1 className="text-3xl font-semibold mb-7 uppercase text-center">
          h2 title one liner
        </h1>
        <p className="m-auto text-center font-medium text-sm text-[#2a2f349c] w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum
          augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue
          ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in
          ante. Nullam egestas, nunc at rutrum tincid
        </p>
      </div>
      <div className="sm:px-20">
        <ExploreCard1></ExploreCard1>
        <ExploreCard2></ExploreCard2>
        <ExploreCard1></ExploreCard1>
        <ExploreCard2></ExploreCard2>
        <div className="flex items-center justify-center my-10">
          <button className="gs-input-button ">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
