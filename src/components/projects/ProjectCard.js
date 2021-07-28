import React from "react";

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
  const style = {
    background: {
      backgroundColor: "#FFFFFF",
      width: "100%",
      padding: "45px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px",
      margin: "60px 0px",
    },
    titleContainer: {
      width: "100%",
      display: 'flex',
      justifyContent: 'space-between'
    },
    imgContainer: {
      marginBottom: "30px",
      width: "100%",
      height: "400px",
      border: "2px solid red",
    },
    overviewContainer: {
      width: "90%",
    }
  };

  return <div style={style.background}>
      <div style={style.titleContainer}>
          <h2>{projectTitle}</h2>
          <button>Try it out!</button>
      </div>
      <div style={style.imgContainer}></div>
      <div style={{width: '100%'}}>
        <h3>Project Overview</h3>
      </div>
      <div style={style.overviewContainer}>
        <table className={'projectOverviewTable'}>
            <tr>
                <td>Description</td>
                <td>{description}</td>
            </tr>
            <tr>
                <td>Date</td>
                <td>{startDate} - {endDate}</td>
            </tr>
            <tr>
                <td>Project URL</td>
                <td>{projectURL}</td>
            </tr>
            <tr>
                <td>Github Repo</td>
                <td>{githubURL}</td>
            </tr>
            <tr>
                <td>Technologies</td>
                <td>{technologies.map(tech => <span>{tech}, </span>)}</td>
            </tr>
        </table>
      </div>
  </div>;
};

export default ProjectCard;
