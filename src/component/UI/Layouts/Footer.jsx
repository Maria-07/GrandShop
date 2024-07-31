import Image from "next/image";
import Link from "next/link";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import map from "../../../assets/img/map.png";

const Footer = () => {
  return (
    <div className="bg-primary  pt-16 ">
      <div className=" px-10 pb-5 flex items-center justify-between">
        <div className="flex">
          <div className="">
            <Link href={"/"}>
              <div className="h-[90px] w-[90px] bg-white border rounded-full"></div>
            </Link>
            <h1 className="uppercase text-secondary text-2xl font-medium my-4">
              Shop Name
            </h1>
            <div className="text-white">
              <div className="flex items-center gap-1 mb-1">
                <IoLocationOutline /> Shop Location
              </div>
              <div className="flex items-center gap-1 mb-1">
                <IoCallOutline /> +XX XXX XXX XXXX (Shop Admin)
              </div>
              <div className="flex items-center gap-1 mb-1">
                <MdOutlineEmail /> info@shop.com
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div>
          <Image
            src={map}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div className="bg-[#001029]">
        <p className="text-gray-500 text-sm text-center mt-8 py-4">
          © 2024 Shop. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
