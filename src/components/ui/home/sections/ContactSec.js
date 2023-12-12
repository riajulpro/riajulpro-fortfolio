import EmailForm from "@/components/shared/EmailForm";
import TitleAndDescription from "@/components/shared/TitleAndDescription";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const ContactSec = () => {
  return (
    <div>
      <TitleAndDescription
        title={"Contact Me"}
        description={"Get me in touch with these mediums."}
      />
      <div className="m-5 bg-colorBlack rounded-md flex flex-col md:flex-row justify-between items-start">
        <div className="flex-1 p-5">
          <h1 className="mb-3 font-semibold uppercase">Social Links:</h1>
          <div className="flex gap-2 items-center">
            <Link href="https://facebook.com/pro.riajul" target="_blank">
              <FaFacebook className="text-3xl" />
            </Link>
            <Link href="https://linkedin.com/in/riajul-pro" target="_blank">
              <FaLinkedin className="text-3xl" />
            </Link>
            <Link href="https://github.com/riajulpro" target="_blank">
              <FaGithub className="text-3xl" />
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <EmailForm />
        </div>
      </div>
    </div>
  );
};

export default ContactSec;
