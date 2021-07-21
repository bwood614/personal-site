import React from "react";
import ContentCard from "./ContentCard";
import experienceIcon from "../../images/icons/experience.png";
import projectsIcon from "../../images/icons/projects.png";
import contactIcon from "../../images/icons/contact.png";
import useBreakpoints from "../../hooks/useBreakpoints";

const CardContainer = () => {
  const { isMobile, isTablet } = useBreakpoints();
  const style = {
    cardContainer: {
      background: "#FFFFFF",
      height: !isMobile ? "285px" : "",
      position: "relative",
      zIndex: "2",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <div style={style.cardContainer}>
      <div
        style={
          !isMobile
            ? {
                display: "flex",
                width: isTablet ? "95%" : "65%",
                justifyContent: isTablet ? "space-around" : "space-between",
              }
            : {
                display: "flex",
                flexDirection: "column",
              }
        }
      >
        <ContentCard
          title={"My Experience"}
          text={"Previous work experience and skills"}
          buttonText={"See more"}
          icon={experienceIcon}
          url={"/experience"}
        />
        <ContentCard
          title={"My Projects"}
          text={"Personal projects and school projects"}
          buttonText={"Explore"}
          icon={projectsIcon}
          url={"/projects"}
        />
        <ContentCard
          title={"Contact Me"}
          text={"braydenwood1@gmail.com (559)827-8240"}
          buttonText={"Send a Message"}
          icon={contactIcon}
          url={"/contact"}
        />
      </div>
    </div>
  );
};

export default CardContainer;
