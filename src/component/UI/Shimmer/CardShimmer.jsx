const CardShimmer = () => {
  return (
    <div className="">
      <div className=" ">
        <div className="mt-20 mb-40 mx-auto">
          <h1 className="text-3xl font-semibold mb-7 uppercase text-center">
            h2 title one liner
          </h1>
          <p className="m-auto text-center font-medium text-sm text-[#2a2f349c] w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            interdum augue sed tellus accumsan, nec congue quam lacinia. Duis
            ornare congue ante a facilisis. Vestibulum sed magna in ligula
            aliquam luctus non in ante. Nullam egestas, nunc at rutrum
            tincidunt, purus metus malesuada ante, at cursus massa turpis sit
            amet nulla. Quisque non ante quis lorem fermentum auctor
          </p>
        </div>
        {/*  shimmer columns */}
        <div className="flex items-center justify-center">
          {" "}
          <div className="grid sm:grid-cols-4 grid-cols-1 gap-y-10 gap-5 mb-20">
            <div className="w-[320px] h-[422px] mt-[-92px] bg-[#A0A0A0]  rounded-[37px]"></div>
            <div className="w-[320px] h-[422px]  bg-[#A0A0A0]  rounded-[37px]"></div>
            <div className="w-[320px] h-[422px]  mt-[-92px] bg-[#A0A0A0]  rounded-[37px]"></div>
            <div className="w-[320px] h-[422px] bg-[#A0A0A0]  rounded-[37px]"></div>
            <div className="w-[320px] h-[422px] mt-[-92px] bg-[#A0A0A0]  rounded-[37px]"></div>
            <div className="w-[320px] h-[422px]  bg-[#A0A0A0]  rounded-[37px]"></div>
            <div className="w-[320px] h-[422px]  mt-[-92px] bg-[#A0A0A0]  rounded-[37px]"></div>
            <div className="w-[320px] h-[422px] bg-[#A0A0A0]  rounded-[37px]"></div>
            <div className="w-[320px] h-[422px] mt-[-92px] bg-[#A0A0A0]  rounded-[37px]"></div>
            <div className="w-[320px] h-[422px]  bg-[#A0A0A0]  rounded-[37px]"></div>
            <div className="w-[320px] h-[422px]  mt-[-92px] bg-[#A0A0A0]  rounded-[37px]"></div>
            <div className="w-[320px] h-[422px] bg-[#A0A0A0]  rounded-[37px]"></div>
          </div>
        </div>

        <div className="flex items-center justify-center mt-14 mb-20">
          <button className="gs-input-button ">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default CardShimmer;
