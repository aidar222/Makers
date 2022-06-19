import React from "react";
import "./SideBar.css";

const SideBar = (props) => {
    console.log(props);
  return (
    <div
      className="sidebar"
      style={{ backgroundColor: props.place === "left" ? "pink" : "red" }}
    >
      SideBar
    </div>
  );
};

export default SideBar;