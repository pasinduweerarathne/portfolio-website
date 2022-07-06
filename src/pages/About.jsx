import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold sm:text-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, ut.
            </p>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae quia
            veniam necessitatibus eum consequuntur minus ex quo officia tempore
            quaerat! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Minima, dolorum? Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Ea voluptatum quo modi iste. Quam doloremque iste, odio quos
            natus sed.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
