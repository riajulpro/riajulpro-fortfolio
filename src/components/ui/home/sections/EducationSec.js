import TitleAndDescription from "@/components/shared/TitleAndDescription";

import { FaGraduationCap } from "react-icons/fa";

const EducationSec = () => {
  return (
    <div>
      <TitleAndDescription
        title={"My Education"}
        description={"The degree I have been trying to acquire."}
      />
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 mt-16">
        <div className="relative bg-colorBlack rounded-md">
          <span className="absolute -top-7 left-10 p-3 bg-colorPrimary rounded-md">
            <FaGraduationCap className="text-3xl" />
          </span>
          <div className="p-10">
            <h3 className="font-bold text-2xl">
              English Literature & Language
            </h3>
            <h4 className="text-sm text-gray-400">BA Hons.</h4>
            <h5 className="text-sm text-gray-400">Chandpur Govt. College</h5>
            <h6 className="text-xs text-gray-400">Passing Year: 2021</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSec;
