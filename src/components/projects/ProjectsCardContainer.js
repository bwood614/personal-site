import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsCardContainer = () => {
  const style = {
    width: "70%",
    margin: "0px auto",
  };

  const MOCK_DATA = [
    {
        projectTitle: "Scripture Search Tool",
        description: "CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.vent",
        startDate: "June 2021",
        endDate: "August 2021",
        projectURL: "https://scripturesearch.braydenwood.com",
        githubURL: "https://github.com/bwood614/scripture-search-full",
        imgURL: "",
        technologies: ["CSS", "HTML", "JaveScript", "VueJS", "MongoDB", "NodeJS"]
    },
    {
        projectTitle: "Personal Website CMS",
        description: "CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.vent",
        startDate: "June 2021",
        endDate: "August 2021",
        projectURL: "https://scripturesearch.braydenwood.com",
        githubURL: "https://github.com/bwood614/scripture-search-full",
        imgURL: "",
        technologies: ["CSS", "HTML", "JaveScript", "VueJS", "MongoDB", "NodeJS"]
      },
  ];

  return (
    <div style={style}>
      {MOCK_DATA.map((project) => (
        <ProjectCard
            projectTitle={project.projectTitle}
            description={project.description}
            startDate={project.startDate}
            endDate={project.endDate}
            projectURL={project.projectURL}
            githubURL={project.githubURL}
            imgURL={project.imgURL}
            technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export default ProjectsCardContainer;
