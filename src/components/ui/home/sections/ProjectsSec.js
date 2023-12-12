import ProjectCard from "@/components/shared/ProjectCard";
import TitleAndDescription from "@/components/shared/TitleAndDescription";

import exForum24 from "@/assets/picture/exforum24.jpeg";
import studyhub from "@/assets/picture/studyhub.jpeg";

const ProjectsSec = () => {
  return (
    <div className="m-5 md:mt-36">
      <TitleAndDescription
        title="My Projects"
        description="Explore the world I have made with Coding."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <ProjectCard
          liveLink="https://exforum24.web.app"
          clientLink={"https://github.com/riajulpro/exforum24-client.git"}
          serverLink="https://github.com/riajulpro/exforum24-server.git"
          title="ExForum24"
          brief="A Forum Web Site to post, comment, like and share."
          thumbnail={exForum24}
        />
        <ProjectCard
          liveLink="https://exforum24.web.app"
          clientLink={"https://github.com/riajulpro/exforum24-client.git"}
          serverLink="https://github.com/riajulpro/exforum24-server.git"
          title="StudyHub"
          brief="A Forum Web Site to post, comment, like and share."
          thumbnail={studyhub}
        />
      </div>
    </div>
  );
};

export default ProjectsSec;
