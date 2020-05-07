import React, { useState, useEffect } from "react";
import { HOME } from "../../routes/router";
import { GoogleLogout } from "react-google-login";
import { Navbar, Nav, Image, Spinner } from "react-bootstrap";

const styles = {
  navbar: {
    height: "60px",
    padding: "10px 25px",
    background: "#1b3331"
  },
  text: {
    color: "#FFF"
  },
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
    <Navbar expand="lg" style={styles.navbar}>
      <Navbar.Brand style={styles.text}>Udemy-Clone</Navbar.Brand>
      <Nav className="ml-auto">
        <Image
          src={user.imageUrl}
          alt={user.name}
          style={styles.userImg}
          fluid
          roundedCircle
        />
        <p style={{ marginTop: "10px", color: "#FFF" }}>{user.name}</p>
        <GoogleLogout
          clientId={process.env.REACT_APP_CLIENT_ID}
          render={(renderProps) => (
            <button
              className="btn btn-error"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              style={{ background: "red", color: "#FFF", marginLeft: "10px" }}
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
