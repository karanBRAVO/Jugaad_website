import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Footer = (props: Props) => {
  const links = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/aboutus" },
    { name: "Workshops", to: "/workshops" },
    { name: "Projects", to: "/projects" },
  ];

  return (
    <>
     <footer className="relative bg-blueGray-200 pt-8 pb-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 m-100">
        <img src="./logo.jpg"></img>
      </div>
      <div className="w-full lg:w-6/12 px-0">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">About Us</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Home</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Workshops</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Projects</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <ul className="list-unstyled">
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-0 text-sm"><span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2"><u>Email Address</u></span></a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">juggadclubuiet@gmail.com</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-0 text-sm"><span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2"><u>Phone Number</u></span></a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-0 text-sm">Pranav - 8427311044</a>
              </li>
              <li>
                <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Kunal- 8604329827</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-blueGray-300"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span><a href="https://www.juggad.com" className="text-blueGray-500 hover:text-gray-800" target="_blank"/> Juggad Robotics Club
          <a className="text-blueGray-500 hover:text-blueGray-800"></a>.
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
  );
};

export default Footer;
