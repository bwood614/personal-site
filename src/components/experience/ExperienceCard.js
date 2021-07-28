import React from "react";

const ExperienceCard = ({
  jobTitle,
  startDate,
  endDate,
  company,
  location,
  imgURL,
  actionBullets,
}) => {
  const style = {
    background: {
      backgroundColor: "#FFFFFF",
      width: "100%",
      padding: "30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 4px 8px",
      margin: "60px 0px",
    },
    imgContainer: {
      marginBottom: "30px",
      width: "100%",
      height: "120px",
      border: "2px solid red",
    },
    jobInfoContainer: {
      width: "100%",
      display: "flex",
      marginBottom: "10px",
    },
    titleContainer: {
      width: "60%",
    },
    dateContainer: {
      width: "40%",
      display: "flex",
      justifyContent: "flex-end",
    },
    actionBulletsContainer: {
      width: "100%",
    },
  };

  return (
    <div style={style.background}>
      <div style={style.imgContainer}>
        <img src="" />
      </div>
      <div style={style.jobInfoContainer}>
        <div style={style.titleContainer}>
          <h2>{jobTitle}</h2>
          <p>
            {company} | {location}
          </p>
        </div>
        <div style={style.dateContainer}>
          <p>
            {startDate} - {endDate}
          </p>
        </div>
      </div>
      <div style={style.actionBulletsContainer}>
        <ul>
          {actionBullets.map((bullet) => (
            <li style={{ margin: "10px 0px" }}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
