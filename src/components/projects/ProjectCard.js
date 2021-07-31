import React, { useState } from "react";

const ProjectCard = ({
  projectTitle,
  description,
  startDate,
  endDate,
  projectURL,
  githubURL,
  imgURL,
  technologies,
}) => {
  const [cardExpanded, setCardExpanded] = useState(false);

  const style = {
    background: {
      backgroundColor: "#FFFFFF",
      width: "100%",
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px",
      margin: "60px 0px",
    },
    titleContainer: {
      width: "100%",
      marginBottom: cardExpanded ? "30px" : "0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    imgContainer: {
      marginBottom: "30px",
      width: "100%",
      height: "400px",
      border: "2px solid red",
    },
    overviewContainer: {
      width: "90%",
    },
    tryButton: {
      height: "fit-content",
      marginRight: "30px",
    },
  };

  const handleExpandCard = () => {
    setCardExpanded(!cardExpanded);
  };

  return cardExpanded ? (
    <div style={style.background}>
      <div onClick={handleExpandCard} style={style.titleContainer}>
        <h2>{projectTitle}</h2>
        <div>
          <button
            style={style.tryButton}
            onClick={() => window.open(projectURL, "_blank")}
          >
            Try it out!
          </button>
          <i className="fa fa-caret-up fa-lg"></i>
        </div>
      </div>
      <div style={style.imgContainer}></div>
      <div style={{ width: "100%" }}>
        <h3>Project Overview</h3>
      </div>
      <div style={style.overviewContainer}>
        <table className={"projectOverviewTable"}>
          <tr>
            <td>Description</td>
            <td>{description}</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>
              {startDate} - {endDate}
            </td>
          </tr>
          <tr>
            <td>Github Repo</td>
            <td>
              <a href={githubURL} target={"_blank"}>
                {githubURL}
              </a>
            </td>
          </tr>
          <tr>
            <td>Technologies</td>
            <td>
              {technologies.map((tech) => (
                <span>{tech}, </span>
              ))}
            </td>
          </tr>
        </table>
      </div>
    </div>
  ) : (
    <div onClick={handleExpandCard} style={style.background}>
      <div style={style.titleContainer}>
        <h2>{projectTitle}</h2>
        <div>
          <button
            style={style.tryButton}
            onClick={() => window.open(projectURL, "_blank")}
          >
            Try it out!
          </button>
          <i className="fa fa-caret-down fa-lg"></i>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
