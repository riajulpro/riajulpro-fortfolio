import { GrAchievement } from "react-icons/gr";
import { FaRankingStar } from "react-icons/fa6";
import { GiAchievement } from "react-icons/gi";
import secondProfile from "@/assets/picture/riajulpro3.png";
import Image from "next/image";
import { IconButton } from "@mui/material";

const AboutSec = () => {
  return (
    <div className="px-5 py-3">
      <h5 className="text-base md:text-lg font-semibold text-colorPrimary">
        ABOUT ME
      </h5>
      <h1 className="text-xl md:text-4xl font-bold mt-1 md:mt-3 mb-10 max-w-2xl">
        A Frontend Developer with React and Next.js Experience
      </h1>
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-2">
        <div className="flex-1 mt-10 md:mt-0">
          <div>
            <IconButton className="relative text-white">
              <FaRankingStar className="w-16 h-16" />
              <span className="bg-colorPrimary w-12 h-12 rounded-full absolute top-0 right-0 -z-10"></span>
            </IconButton>
            <h4 className="text-xl font-bold my-1 md:my-4">My Ambition</h4>
            <p className="text-gray-400 text-sm">
              My goal is to create exceptional web experiences using React,
              Next.js, and Tailwind. I want to innovate, push boundaries, and
              set new standards in the digital world.
            </p>
          </div>
          <div className="mt-10">
            <IconButton className="text-white relative">
              <GrAchievement className="w-16 h-16" />
              <span className="bg-colorPrimary w-12 h-12 rounded-full absolute top-0 -right-3 -z-10"></span>
            </IconButton>
            <h4 className="text-xl font-bold my-1 md:my-4">My Purpose</h4>
            <p className="text-gray-400 text-sm">
              I aim to build not just functional websites but immersive digital
              journeys. By combining technologies like Node.js, Express,
              MongoDB, Firebase, JWT, and Stripe, I want to craft user-friendly
              and memorable experiences that exceed client expectations.
            </p>
          </div>
        </div>
        <div className="flex-1 rounded-lg relative flex justify-center">
          <Image
            src={secondProfile}
            alt="Second Profile Picture"
            className="w-[500px] rounded-md"
          />
          <div className="bg-colorPrimary p-4 absolute right-4 -bottom-7 flex justify-center items-center gap-2 text-colorBlack rounded-lg">
            <span>
              <GiAchievement className="w-12 h-12" />
            </span>
            <span>
              <h4 className="font-extrabold text-2xl">1+</h4>
              <p className="font-bold font-lg text-white">
                Years of Experience
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSec;
