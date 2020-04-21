import React from "react";
import UserNavbar from "../Navigation/UserNavbar";
import Footer from "../Footer";

const UserLayout = (props) => {
  return (
    <div>
      <UserNavbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default UserLayout;
