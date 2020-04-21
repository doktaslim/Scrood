import React from "react";
import Navigation from "../Navigation/Navbar";
import Footer from "../Footer";

const Layout = props => {
  return (
    <div>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
