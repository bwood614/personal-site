import React from "react";
import { Link } from "react-router-dom";

const ExperienceList = ({ items, onClickAdd }) => {
  const style = {
    wrapper: {
      width: "90%",
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 20,
    },
  };

  return (
    <div style={style.wrapper}>
      <h2 style={{ marginBottom: 20, textAlign: "center" }}>Experiences</h2>
      {items.map((item) => (
        <div style={style.item}>
          <div>
            <h3 style={{ margin: 0 }}>{item.jobTitle}</h3>
            <div>{item.company}</div>
          </div>
          <Link to={`/admin/experience/${item.id}`}>
            <i className="fa fa-edit fa-lg"></i>
          </Link>
        </div>
      ))}
      <Link to={"/admin/experience/"}>
        <button>Add Experience</button>
      </Link>
    </div>
  );
};

export default ExperienceList;
