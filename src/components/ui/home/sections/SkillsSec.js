import TitleAndDescription from "@/components/shared/TitleAndDescription";

import { FaCss3, FaHtml5, FaNode, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiMongoose,
  SiMui,
} from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";

const SkillsSec = () => {
  return (
    <div>
      <TitleAndDescription
        title="My Skills"
        description="Crafting stories through Design and Imagination"
      />
      <div className="w-11/12 mx-auto md:w-3/4 grid grid-cols-2 md:grid-cols-6 gap-3">
        <div className="bg-bgColor [clip-path:polygon(20%_0%,70%_0%,100%_0,100%_100%,70%_100%,0_100%,0%_70%,0%_20%)] w-32 h-36 flex justify-center items-center flex-col shadow-md shadow-[#f16529]">
          <FaHtml5 className="text-7xl text-[#f16529]" />
          <p className="font-semibold">HTML</p>
        </div>
        <div className="bg-bgColor [clip-path:polygon(20%_0%,70%_0%,100%_0,100%_100%,70%_100%,0_100%,0%_70%,0%_20%)] w-32 h-36 flex justify-center items-center flex-col shadow-md shadow-[#039be5]">
          <FaCss3 className="text-7xl text-[#039be5]" />
          <p className="font-semibold">CSS</p>
        </div>
        <div className="bg-bgColor [clip-path:polygon(20%_0%,70%_0%,100%_0,100%_100%,70%_100%,0_100%,0%_70%,0%_20%)] w-32 h-36 flex justify-center items-center flex-col shadow-md shadow-[#ffd600]">
          <IoLogoJavascript className="text-7xl text-[#ffd600]" />
          <p className="font-semibold">JavaScript</p>
        </div>
        <div className="bg-bgColor [clip-path:polygon(20%_0%,70%_0%,100%_0,100%_100%,70%_100%,0_100%,0%_70%,0%_20%)] w-32 h-36 flex justify-center items-center flex-col shadow-md shadow-[#00d7fe]">
          <FaReact className="text-7xl text-[#00d7fe]" />
          <p className="font-semibold">React</p>
        </div>
        <div className="bg-bgColor [clip-path:polygon(20%_0%,70%_0%,100%_0,100%_100%,70%_100%,0_100%,0%_70%,0%_20%)] w-32 h-36 flex justify-center items-center flex-col shadow-md shadow-[#44a8b3]">
          <SiTailwindcss className="text-7xl text-[#44a8b3]" />
          <p className="font-semibold">Tailwind CSS</p>
        </div>
        <div className="bg-bgColor [clip-path:polygon(20%_0%,70%_0%,100%_0,100%_100%,70%_100%,0_100%,0%_70%,0%_20%)] w-32 h-36 flex justify-center items-center flex-col shadow-md shadow-[#fdfdfd]">
          <SiExpress className="text-7xl text-[#fdfdfd]" />
          <p className="font-semibold">Express</p>
        </div>
        <div className="bg-bgColor [clip-path:polygon(20%_0%,70%_0%,100%_0,100%_100%,70%_100%,0_100%,0%_70%,0%_20%)] w-32 h-36 flex justify-center items-center flex-col shadow-md shadow-[#116149]">
          <BiLogoMongodb className="text-7xl text-[#116149]" />
          <p className="font-semibold">MongoDB</p>
        </div>
        <div className="bg-bgColor [clip-path:polygon(20%_0%,70%_0%,100%_0,100%_100%,70%_100%,0_100%,0%_70%,0%_20%)] w-32 h-36 flex justify-center items-center flex-col shadow-md shadow-[#026e00]">
          <FaNode className="text-7xl text-[#026e00]" />
          <p className="font-semibold">NodeJS</p>
        </div>
        <div className="bg-bgColor [clip-path:polygon(20%_0%,70%_0%,100%_0,100%_100%,70%_100%,0_100%,0%_70%,0%_20%)] w-32 h-36 flex justify-center items-center flex-col shadow-md shadow-[#f7c52c]">
          <SiFirebase className="text-7xl text-[#f7c52c]" />
          <p className="font-semibold">Firebase</p>
        </div>
        <div className="bg-bgColor [clip-path:polygon(20%_0%,70%_0%,100%_0,100%_100%,70%_100%,0_100%,0%_70%,0%_20%)] w-32 h-36 flex justify-center items-center flex-col shadow-md shadow-[#000000]">
          <SiNextdotjs className="text-7xl text-[#000000]" />
          <p className="font-semibold">NextJS</p>
        </div>
        <div className="bg-bgColor [clip-path:polygon(20%_0%,70%_0%,100%_0,100%_100%,70%_100%,0_100%,0%_70%,0%_20%)] w-32 h-36 flex justify-center items-center flex-col shadow-md shadow-[#a03333]">
          <SiMongoose className="text-7xl text-[#a03333]" />
          <p className="font-semibold">Mongoose</p>
        </div>
        <div className="bg-bgColor [clip-path:polygon(20%_0%,70%_0%,100%_0,100%_100%,70%_100%,0_100%,0%_70%,0%_20%)] w-32 h-36 flex justify-center items-center flex-col shadow-md shadow-[#007fff]">
          <SiMui className="text-7xl text-[#007fff]" />
          <p className="font-semibold">Material UI</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsSec;
