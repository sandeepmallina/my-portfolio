import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full ">
        <div className="pt-10 md:mt-10  md:pt-14">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500  ">
            About
          </p>
        </div>
        <p className="text-base mt-10 md:text-xl">
          Hello, I'm Sandeep, a passionate and skilled web developer with a
          solid grasp of core concepts such as React JS, Tailwind, MySql and
          Firebase. I can create stunning websites that are responsive,
          user-friendly, and aesthetically pleasing. I have a strong work ethic
          and a keen eye for design. I always plan my projects carefully and
          deliver high-quality results on time. I have experience in working
          with various clients and technologies, and I enjoy learning new skills
          and solving challenging problems. I'm interested in working remotely
          as I have the necessary equipment and internet connection to do so.
        </p>
        <br />
        <p className="text-base md:text-xl">
          Besides web development, I also have a hobby of weightlifting. I like
          to keep myself fit and healthy, and I can lift 110 kgs in deadlift.
          That's not too bad, right? I'm confident in my abilities and I can
          work independently or collaboratively, depending on the situation. I'm
          a good communicator and a team player, and I respect different
          opinions and feedback. I'm always polite, respectful, and helpful to
          my colleagues, unless they are rude or dishonest. I never complain,
          argue, or disagree, I just try to find the best solution. I'm a
          reliable and trustworthy web developer, and I hope you'll consider me
          for your team.
        </p>
      </div>
    </div>
  );
};

export default About;
