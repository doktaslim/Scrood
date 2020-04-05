import React from "react";
import UserNavbar from "../Navigation/UserNavbar";

const UserLayout = (props) => {
  return (
    <div>
      <UserNavbar />
      {props.children}
    </div>
  );
};

export default UserLayout;
