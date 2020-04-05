import React from "react";
import Navigation from "../Navigation/Navbar";

const Layout = props => {
  return (
    <div>
      <Navigation />
      {props.children}
    </div>
  );
};

export default Layout;
