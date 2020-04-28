import React, { useState, useEffect } from "react";
import { HOME } from "../../routes/router";
import { GoogleLogout } from "react-google-login";
import { GoogleConfig } from "../../config/GoogleLogin";
import { Navbar, Nav, Image, Spinner } from "react-bootstrap";

const styles = {
  userImg: {
    height: "40px",
    width: "40px",
    // borderRadius: "50px",
    marginRight: "10px",
  },
};

const UserNavbar = (props) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let data = JSON.parse(sessionStorage.getItem("user"));
    let userdata = data;
    setUser(userdata.profileObj);
  }, []);

  const logout = () => {
    setLoading(true);
    try {
      sessionStorage.removeItem("user");
      setLoading(false);
      return props.history.push(HOME);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  return loading ? (
    <Spinner animation="border" variant="primary"></Spinner>
  ) : (
    <Navbar expand="lg">
      <Navbar.Brand>Udemy-Clone</Navbar.Brand>
      <Nav className="ml-auto">
        <Image
          src={user.imageUrl}
          alt={user.name}
          style={styles.userImg}
          fluid
          roundedCircle
        />
        <p>{user.name}</p>
        <GoogleLogout
          clientId={GoogleConfig.client_id}
          render={(renderProps) => (
            <button
              className="btn btn-error"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <i className="fas fa-power-off"></i>
            </button>
          )}
          buttonText="Logout"
          onLogoutSuccess={logout}
        />
      </Nav>
    </Navbar>
  );
};

export default UserNavbar;
