import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginActions from "../../redux/actions/loginActions";

const VerticalSpace = () => <div style={{ height: "20px" }}></div>;

const Login = ({ loggedIn, actions }) => {
  const style = {
    loginContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "100px",
    },
    submitButton: {
      display: "flex",
      justifyContent: "center",
    },
  };
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    actions.loginUser({ username, password });
    if (loggedIn) {
      console.log("Logged in success!");
    } else {
      console.log("incorrect credentials");
    }
  };

  return (
    <div style={style.loginContainer}>
      <h2>Please Log In</h2>
      <VerticalSpace />
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <VerticalSpace />
        <label>
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <VerticalSpace />
        <div style={style.submitButton}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    loggedIn: state.loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loginUser: bindActionCreators(loginActions.loginUser, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
