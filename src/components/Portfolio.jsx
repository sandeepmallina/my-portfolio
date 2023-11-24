import React from "react";
import handmadeheaven from "../assets/portfolio/HandmadeHeaven.png";
import installNode from "../assets/portfolio/installNode.jpg";
import sudoku from "../assets/portfolio/sudoku (1).png";
import epensetracker from "../assets/portfolio/expensetracker.png";
import cursoreffect from "../assets/portfolio/cursoreffect.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: handmadeheaven,
      demo: "https://handmade-heaven.netlify.app/",
      code: "https://github.com/sandeepmallina/handmade-heaven",
    },
    {
      id: 2,
      src: epensetracker,
      demo: "#",
      code: "https://github.com/sandeepmallina/expense-tracker",
    },
    {
      id: 3,
      src: sudoku,
      demo: "#",
      code: "https://github.com/sandeepmallina/Sudoku",
    },
    {
      id: 4,
      src: cursoreffect,
      demo: "https://codesandbox.io/s/github/sandeepmallina/Curson-effect",
      code: "https://github.com/sandeepmallina/Cursor-effect",
    },
    {
      id: 5,
      src: installNode,
      demo: "#",
      code: "#",
    },
    {
      id: 6,
      src: reactWeather,
      demo: "#",
      code: "#",
    },
  ];
  return (
    <div>
      <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white  md:h-screen "
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full">
          <div className="pt-12 md:mt-10   lg:pt-14">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Checkout some of my Work here </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm-px-0">
            {portfolios.map(({ id, src, demo, code }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  className="rounded-md duration-200 hover:scale-105"
                  src={src}
                  alt=""
                />
                <div className="flex items-center justify-center">
                  <a href={demo} target="_blank">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Demo
                    </button>
                  </a>
                  <a href={code} target="_blank">
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
