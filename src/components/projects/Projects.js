import React from "react";
import ProjectsCardContainer from "./ProjectsCardContainer.js";

const Projects = () => {
  const style = {
    background: {
      backgroundColor: "#F3F3F3",
      padding: 30,
    },
    title: {
      textAlign: "center",
      marginBottom: 0,
    },
  };

  return (
    <div style={style.background}>
      <h1 style={style.title}>My Projects</h1>
      <ProjectsCardContainer />
    </div>
  );
};

export default Projects;
