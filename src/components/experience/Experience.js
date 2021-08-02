import React from "react";
import ExperienceCardContainer from "./ExperienceCardContainer";
import { connect } from "react-redux";
import ContentEditButton from "../admin/ContentEditButton";

const Experience = ({ loggedIn }) => {
  const style = {
    background: {
      backgroundColor: "#F3F3F3",
      padding: 30,
    },
    title: {
      marginBottom: 0,
      marginRight: "20px",
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
        <h1 style={style.title}>My Experience</h1>
        <ContentEditButton />
      </div>
      <ExperienceCardContainer />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
  };
}

export default connect(mapStateToProps)(Experience);
