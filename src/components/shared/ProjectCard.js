import Image from "next/image";
import Link from "next/link";
import { Button } from "react-scroll";

const ProjectCard = ({
  title,
  brief,
  thumbnail,
  liveLink,
  clientLink,
  serverLink,
}) => {
  console.log(thumbnail);
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="bg-colorBlack rounded-xl overflow-hidden md:max-w-2xl my-2 md:my-8"
    >
      <div className="overflow-y-auto w-full h-48">
        <Image
          className="object-cover object-top"
          src={thumbnail}
          alt="Card Image"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <p className="text-gray-400 mb-4">{brief}</p>
        <div className="flex space-x-4">
          <Link href={liveLink}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Review
            </button>
          </Link>
          <Link href={clientLink}>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Client
            </button>
          </Link>
          <Link href={serverLink}>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
              Server
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
