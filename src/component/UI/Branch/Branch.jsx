import React from "react";
import CardNews from "./Slider/CardNews";
import Carroussel from "./Slider/Carroussel";

const Branch = () => {
  let cards = [
    {
      key: 1,
      content: <CardNews i={"1"} />,
    },
    {
      key: 2,
      content: <CardNews i={"2"} />,
    },
    {
      key: 3,
      content: <CardNews i={"3"} />,
    },
    {
      key: 4,
      content: <CardNews i={"4"} />,
    },
    {
      key: 5,
      content: <CardNews i={"5"} />,
    },
    {
      key: 6,
      content: <CardNews i={"6"} />,
    },
    {
      key: 7,
      content: <CardNews i={"7"} />,
    },
  ];
  return (
    <div className="mb-20">
      <div className="mt-20">
        <h1 className="text-3xl font-semibold mb-7 uppercase text-center">
          h2 title one liner
        </h1>
        <p className="m-auto text-center font-medium text-sm text-[#2a2f349c] w-[80%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum
          augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue
          ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in
          ante. Nullam egestas, nunc at rutrum
        </p>
      </div>
      <div className=" mt-28 mx-10 sm:px-5 ">
        <div>
          <Carroussel
            cards={cards}
            height="590px"
            margin="0px"
            offset={2}
            showArrows={false}
          />
        </div>
      </div>
      <div className="flex items-center justify-center mt-14 mb-20">
        <button className="gs-input-button ">See More</button>
      </div>
    </div>
  );
};

export default Branch;
