import Link from "next/link";

const Navbar = () => {
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
      {/* <div className="lg:hidden block">
        <div className="flex items-center justify-between px-3 py-3">
          <div>
            <GiHamburgerMenu
              size={24}
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
          <div>
            <Link href={"/"}>
              {" "}
              <Image
                src={logo}
                width={100}
                height={100}
                alt="Picture of the author"
              />
            </Link>
          </div>
          <button
            onClick={() => setSearch(!search)}
            className="bk-input-button "
          >
            Search
          </button>
        </div>
        <NavbarSmallDevice isOpen={open} setOpen={setOpen}></NavbarSmallDevice>
      </div> */}
    </div>
  );
};

export default Navbar;
