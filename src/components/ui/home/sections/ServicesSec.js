import TitleAndDescription from "@/components/shared/TitleAndDescription";
import { FaChartPie } from "react-icons/fa6";
import { MdDeveloperMode, MdOutlineSpaceDashboard } from "react-icons/md";

const ServicesSec = () => {
  return (
    <div>
      <TitleAndDescription
        title={"Services"}
        description={"Quality Product Surveying is our main Goal."}
      />
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 md:mt-16">
        <div className="group relative bg-colorBlack rounded-md">
          <span className="absolute -top-7 left-10 p-3 bg-colorPrimary rounded-md group-hover:scale-[1.15] transition-all duration-300 ease-in-out">
            <MdOutlineSpaceDashboard className="text-3xl" />
          </span>
          <div className="p-10">
            <h3 className="font-bold text-xl">Responsive Website</h3>
            <p className="text-xs text-gray-500">
              Our cutting-edge Responsive Web Design ensures your website looks
              stunning and functions flawlessly on all devices. From smartphones
              to desktops, we guarantee a seamless user experience, enhancing
              accessibility and engagement.
            </p>
          </div>
        </div>
        <div className="group relative bg-colorBlack rounded-md">
          <span className="absolute -top-7 left-10 p-3 bg-colorPrimary rounded-md group-hover:scale-[1.15] transition-all duration-300 ease-in-out">
            <MdDeveloperMode className="text-3xl" />
          </span>
          <div className="p-10">
            <h3 className="font-bold text-xl">Web Application</h3>
            <p className="text-xs text-gray-500">
              Experience the future of online interaction with our Web
              Applications. Elevate user engagement through dynamic interfaces,
              real-time updates, and personalized experiences. Transform your
              digital presence and stay ahead of the competition.
            </p>
          </div>
        </div>
        <div className="group relative bg-colorBlack rounded-md">
          <span className="absolute -top-7 left-10 p-3 bg-colorPrimary rounded-md group-hover:scale-[1.15] transition-all duration-300 ease-in-out">
            <FaChartPie className="text-3xl" />
          </span>
          <div className="p-10">
            <h3 className="font-bold text-xl">Quality Website</h3>
            <p className="text-xs text-gray-500">
              Crafting excellence in every detail, our Quality Websites redefine
              online standards. Prioritizing usability, performance, and user
              satisfaction, we create a digital masterpiece tailored to your
              brand. Make a lasting impression with a website that truly stands
              out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSec;
