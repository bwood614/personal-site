import React, { useEffect } from "react";
import ExperienceList from "./ExperienceList";
import ProjectList from "./ProjectList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as projectActions from "../../redux/actions/projectActions";
import * as experienceActions from "../../redux/actions/experienceActions";

const Admin = ({ projects, experiences, actions }) => {
  const style = {
    background: {
      backgroundColor: "#F3F3F3",
      padding: 30,
    },
    title: {
      textAlign: "center",
    },
    columnWrapper: {
      width: "100%",
      display: "flex",
    },
    column: {
      width: "33%",
    },
  };

  useEffect(() => {
    actions.loadProjects().catch((error) => {
      alert("Loading projects failed" + error);
    });
    actions.loadExperiences().catch((error) => {
      alert("Loading experiences failed" + error);
    });
  }, []);

  return (
    <div style={style.background}>
      <h1 style={style.title}>Admin</h1>
      <div style={style.columnWrapper}>
        <div style={style.column}>
          <ExperienceList items={experiences} />
        </div>
        <div style={style.column}>
          <ProjectList items={projects} />
        </div>
        <div style={style.column}></div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    projects: state.projects,
    experiences: state.experiences,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadProjects: bindActionCreators(projectActions.loadProjects, dispatch),
      loadExperiences: bindActionCreators(
        experienceActions.loadExperiences,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
