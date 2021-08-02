import React from "react";
import ProjectsCardContainer from "./ProjectsCardContainer.js";
import { connect } from "react-redux";
import ContentEditButton from "../admin/ContentEditButton.js";

const Projects = ({ loggedIn }) => {
  const style = {
    background: {
      backgroundColor: "#F3F3F3",
      padding: 30,
    },
    title: {
      marginRight: "20px",
      marginBottom: 0,
    },
  };

  return (
    <div style={style.background}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={style.title}>My Projects</h1>
        <ContentEditButton />
      </div>
      <ProjectsCardContainer />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
  };
}

export default connect(mapStateToProps)(Projects);
