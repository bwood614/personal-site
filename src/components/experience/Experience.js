import React from "react";
import ExperienceCardContainer from "./ExperienceCardContainer";

const Experience = () => {
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
      <h1 style={style.title}>My Experience</h1>
      <ExperienceCardContainer />
    </div>
  );
};

export default Experience;
