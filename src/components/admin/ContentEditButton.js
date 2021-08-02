import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ContentEditButton = ({ onClick, loggedIn }) => {
  const style = {
    wrapper: {
      cursor: "pointer",
    },
  };
  return (
    <div style={style.wrapper}>
      {loggedIn && (
        <Link to={"/admin"}>
          <i className="fa fa-edit fa-2x"></i>
        </Link>
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
  };
}

export default connect(mapStateToProps)(ContentEditButton);
