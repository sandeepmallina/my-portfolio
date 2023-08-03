import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-10 mt-24 md:pt-14">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          I'm a passionate and skilled frontend developer with a solid grasp of
          core concepts such as React JS, Tailwind, MongoDB and Firebase. I have
          a strong work ethic and a keen eye for design. I always plan my
          projects carefully and deliver high-quality results on time. I enjoy
          learning new technologies and solving challenging problems. I'm
          interested in working remotely as I have the necessary equipment and
          internet connection to do so. I believe I can communicate effectively
          and collaborate well with your team online.
        </p>
        <br />
        <p className="text-xl">
          I'm currently in my final year of B.Tech at LPU, where I have learned
          a lot of valuable skills and knowledge in web development. I'm very
          excited to apply what I have learned to real-world projects and
          challenges. I will be graduating in May 2024 and I'm looking for a
          full-time opportunity as a frontend developer. I'm flexible and
          adaptable to different work environments and schedules.
        </p>
      </div>
    </div>
  );
};

export default About;
