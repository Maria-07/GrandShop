import RootLayout from "@/component/Layouts/RootLayout";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import About from "@/component/UI/About/About";
import InfoSection from "@/component/UI/InfoSection/InfoSection";
import InfoSection2 from "@/component/UI/InfoSection2/InfoSection2";
import About2 from "@/component/UI/About2/About2";
import Explore from "@/component/UI/Explore/Explore";

const HomePage = () => {
  return (
    <>
      <div className="">
        <div className="hero-bg">
          <div className="pt-[110px] flex items-center justify-center ">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl font-bold font-primary text-white mt-[10%] opacity-100"
            >
              <div>
                <div className="h-[90px] w-[90px] bg-white mx-auto mb-7"></div>
                <h1 className="text-secondary text-[48px] font-[800px]">
                  Welcome to Grand Shop
                </h1>
                <h2 className="text-3xl tracking-[1px] font-semibold text-center mt-2 leading-[58.51px]">
                  A Single Line of Motto Text
                </h2>
                <button className=" mx-auto text-xl font-bold flex items-center justify-center gap-2 bg-white text-primary px-[30px] py-[5px] rounded-xl">
                  Main CTA 1 <FaArrowRightLong />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        <About></About>
        <InfoSection></InfoSection>
        <InfoSection2></InfoSection2>
        <About2></About2>
        <Explore></Explore>
      </div>
    </>
  );
};

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default HomePage;
