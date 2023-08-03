import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-14 mt-24 md:pt-14">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          I'm a passionate and skilled web developer with a solid grasp of core
          concepts such as React JS, Tailwind, MongoDB and Firebase. I can
          create stunning websites that will make your eyes pop out of your
          head. I have a strong work ethic and a keen eye for design. I always
          plan my projects carefully and deliver high-quality results on time. I
          never miss a deadline, even if it means working 24/7 without sleep or
          food. I enjoy learning new technologies and solving challenging
          problems. I'm interested in working remotely as I have the necessary
          equipment and internet connection to do so. I don't need any
          supervision or guidance, I can figure everything out on my own. I
          believe I can communicate effectively and collaborate well with your
          team online. I'm always polite, respectful, and helpful to my
          colleagues. I never complain, argue, or disagree with anyone. I'm the
          perfect web developer you've been looking for.
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
