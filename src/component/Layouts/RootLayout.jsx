import Head from "next/head";
import Navbar from "../UI/Layouts/Navbar";
import Footer from "../UI/Layouts/Footer";

const RootLayout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Grand Shop</title>
        <meta
          name="description"
          content="This is Grand Shop Management System"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="relative">
        <div className="absolute top-0 z-50 w-full  bg-opacity-15 shadow-md ">
          <Navbar></Navbar>
        </div>

        <div className="">{children}</div>
        <Footer></Footer>
      </div>
    </>
  );
};
export default RootLayout;
