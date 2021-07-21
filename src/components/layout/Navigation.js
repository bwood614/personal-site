import React from "react";
import NavItem from "./NavItem";
import useBreakpoints from "../../hooks/useBreakpoints";

const Navigation = () => {
  const { isMobile, isTablet, isMobileOrTablet } = useBreakpoints();

  const style = {
    navigation: {
      width: "100%",
      height: "100%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    navItems: !isMobileOrTablet
      ? {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }
      : {
          position: "absolute",
          right: "0px",
          top: "100%",
          zIndex: "1000",
          backgroundColor: "white",
          padding: "15px",
        },
    leftNav: isMobileOrTablet
      ? {
          display: "block",
        }
      : {
          display: "flex",
        },
    rightNav: isMobileOrTablet
      ? {
          display: "block",
        }
      : {
          display: "flex",
        },
    mobileNavIcon: isMobileOrTablet
      ? {
          display: "block",
          float: "right",
        }
      : {
          display: "none",
        },
  };

  const handelMobileDropdown = () => {
    style.leftNav = {
      display: "flex",
    };
  };

  return (
    <div style={style.navigation}>
      <div style={style.navItems}>
        <div style={style.leftNav}>
          <NavItem to={"/"} name={"About Me"} />
          <NavItem to={"/experience"} name={"My Experience"} />
          <NavItem to={"/projects"} name={"My Projects"} />
          <NavItem to={"/contact"} name={"Contact Me"} />
        </div>
        <div style={style.rightNav}>
          <NavItem to={"/"} name={"Sign In"} />
        </div>
      </div>
      <div style={style.mobileNavIcon} onClick={handelMobileDropdown}>
        <i class="fa fa-bars fa-lg"></i>
      </div>
    </div>
  );
};

export default Navigation;
