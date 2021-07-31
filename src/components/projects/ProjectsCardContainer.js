import React, { useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as projectActions from "../../redux/actions/projectActions";

const ProjectsCardContainer = ({ projects, actions }) => {
  const style = {
    width: "70%",
    margin: "0px auto",
  };

  useEffect(() => {
    actions.loadProjects().catch((error) => {
      alert("Loading projects failed" + error);
    });
  }, []);

  return (
    <div style={style}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
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

function mapStateToProps(state) {
  return {
    projects: state.projects,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadProjects: bindActionCreators(projectActions.loadProjects, dispatch),
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsCardContainer);
