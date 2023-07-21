import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          dolor ad, eligendi dicta doloribus illo dolore quibusdam impedit illum
          sit ipsam ratione nam mollitia quam, ullam a eius magnam nobis
          veritatis ducimus sed. Perferendis, natus debitis ullam ducimus
          excepturi quos eos! Necessitatibus molestias placeat quibusdam
          provident quidem, blanditiis consequatur officia?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          voluptate, qui possimus corrupti fugit rem et, necessitatibus odio
          placeat consequuntur commodi repellat at quae blanditiis explicabo
          sint dicta harum rerum consequatur perferendis sunt! Laudantium quos
          accusantium necessitatibus earum maxime in facilis sunt, labore
          laborum omnis? Laudantium maiores aut aspernatur nostrum.
        </p>
      </div>
    </div>
  );
};

export default About;
