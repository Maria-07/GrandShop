import { Drawer } from "antd";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {" "}
      <div className="hidden lg:block sticky top-0 bg-[#000522] bg-opacity-70 ">
        <div className="sm:w-[100%] px-5 sm:mx-auto py-2 flex justify-between ">
          <div>
            <Link href={"/"}>
              <div className="h-[90px] w-[90px] bg-white border rounded-full"></div>
            </Link>
          </div>
          <div className="flex items-center gap-5 text-xs  font-extrabold uppercase">
            <Link
              className="p-3 bg-secondary rounded-sm hover:bg-[#fae954f5] hover:text-black transition-all"
              href={"/"}
            >
              Section 1
            </Link>
            <Link
              className="p-3 bg-secondary rounded-sm hover:bg-[#fae954f5] hover:text-black transition-all"
              href={"/"}
            >
              Section 2
            </Link>
            <Link
              className="p-3 bg-secondary rounded-sm hover:bg-[#fae954f5] hover:text-black transition-all"
              href={"/"}
            >
              Section 3
            </Link>
            <Link
              className="p-3 bg-secondary rounded-sm hover:bg-[#fae954f5] hover:text-black transition-all"
              href={"/"}
            >
              2 Sub Divs
            </Link>
            <Link
              className="p-3 bg-secondary rounded-sm hover:bg-[#fae954f5] hover:text-black transition-all"
              href={"/"}
            >
              Section 4
            </Link>
            <Link
              className="p-3 bg-secondary rounded-sm hover:bg-[#fae954f5] hover:text-black transition-all"
              href={"/"}
            >
              two liner 1
            </Link>
            <Link
              className="p-3 bg-secondary rounded-sm hover:bg-[#fae954f5] hover:text-black transition-all"
              href={"/"}
            >
              two liner 2
            </Link>
            <Link
              className="p-3 bg-secondary rounded-sm hover:bg-[#fae954f5] hover:text-black transition-all"
              href={"/"}
            >
              Section 5
            </Link>
            <Link
              className="p-3 bg-secondary rounded-sm hover:bg-[#fae954f5] hover:text-black transition-all"
              href={"/"}
            >
              two liner 3
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:hidden block">
        <div className=" bg-[#000522] bg-opacity-70 p-3">
          <div className="flex items-center justify-between">
            <div>
              <Link href={"/"}>
                <div className="h-[60px] w-[60px] bg-white border rounded-full"></div>
              </Link>
            </div>
            <div>
              <button onClick={showDrawer}>
                <RxHamburgerMenu className="text-secondary text-4xl" />
              </button>
              <Drawer title="Grand Shop" onClose={onClose} open={open}>
                <Link
                  className=" text-lg my-3 font-semibold text-primary py-2 border-b-[1px] w-full hover:text-black transition-all"
                  href={"/"}
                >
                  <button>Section 1</button>
                </Link>
                <br />
                <br />
                <Link
                  className=" text-lg my-3 font-semibold text-primary py-2 border-b-[1px] w-full hover:text-black transition-all"
                  href={"/"}
                >
                  <button>Section 2</button>
                </Link>{" "}
                <br />
                <br />
                <Link
                  className=" text-lg my-3 font-semibold text-primary py-2 border-b-[1px] w-full hover:text-black transition-all"
                  href={"/"}
                >
                  <button>Section 3</button>
                </Link>
                <br />
                <br />
                <Link
                  className=" text-lg my-3 font-semibold text-primary py-2 border-b-[1px] w-full hover:text-black transition-all"
                  href={"/"}
                >
                  <button> 2 Sub Divs</button>
                </Link>{" "}
                <br />
                <br />
                <Link
                  className=" text-lg my-3 font-semibold text-primary py-2 border-b-[1px] w-full hover:text-black transition-all"
                  href={"/"}
                >
                  <button>Section 4</button>
                </Link>
                <br />
                <br />
                <Link
                  className=" text-lg my-3 font-semibold text-primary py-2 border-b-[1px] w-full hover:text-black transition-all"
                  href={"/"}
                >
                  <button> two liner 1</button>
                </Link>{" "}
                <br />
                <br />
                <Link
                  className=" text-lg my-3 font-semibold text-primary py-2 border-b-[1px] w-full hover:text-black transition-all"
                  href={"/"}
                >
                  <button> two liner 2</button>
                </Link>
                <br />
                <br />
                <Link
                  className=" text-lg my-3 font-semibold text-primary py-2 border-b-[1px] w-full hover:text-black transition-all"
                  href={"/"}
                >
                  <button>Section 5</button>
                </Link>{" "}
                <br />
                <br />
                <Link
                  className=" text-lg my-3 font-semibold text-primary py-2 border-b-[1px] w-full hover:text-black transition-all"
                  href={"/"}
                >
                  <button> two liner 3</button>
                </Link>
                <br />
                <br />
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
