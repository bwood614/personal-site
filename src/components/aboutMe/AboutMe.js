import React from "react";
import MainContent from "./MainContent";
import CardContainer from "./CardContainer";

const AboutMe = () => {
  const style = {
    title: {
      color: "red",
    },
  };

  const mainTitle = "Hi, I'm Brayden";
  const bodyText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <div>
      <MainContent title={mainTitle} bodyText={bodyText} />
      <CardContainer />
    </div>
  );
};

export default AboutMe;
