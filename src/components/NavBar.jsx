import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const items = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center bg-black  h-20  w-full text-white px-4 fixed z-30">
      <div className="">
        <h1 className="text-5xl font-signature ml-2">Sandeep</h1>
      </div>
      <ul className="hidden  md:flex  font-medium  ">
        {items.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200 md:text-gray-400"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => {
          setNav(!nav);
        }}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 ">
          {items.map(({ id, link }) => (
            <li
              key={id}
              className="py-6 text-4xl   cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200"
            >
              <Link
                onClick={() => {
                  setNav(!nav);
                }}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
