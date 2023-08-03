import React, { useState } from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
// import { Link } from "react-scroll";

const Home = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const sqSize = 240;
  const delay = 200; // Adjust the delay time (in milliseconds) as per your requirement

  const handleMouseMove = (e) => {
    setTimeout(() => {
      setPosition({ x: e.clientX - sqSize / 2, y: e.clientY - sqSize / 2 });
    }, delay);
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 relative"
    >
      <div
        className="w-60 h-60 absolute z-10 bg-gradient-to-r from-green-300 to-purple-500  rounded-full animate-spin-slow  blur-[110px]  "
        style={{ top: position.y, left: position.x }}
      ></div>
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4   md:flex-row ">
        <div className="flex flex-col justify-center h-full ">
          <h2 className="text-4xl   sm:text-7xl   font-bold text-white pt-5  ">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a full-stack web developer who crafts stunning and secure web
            solutions using HTML, CSS, JavaScript, Node.js, Tailwind and React.
            Hire me and you'll get a balance of sarcasm and professionalism.
          </p>

          <div className="z-20">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto  w-[48%] md:w-full   z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
