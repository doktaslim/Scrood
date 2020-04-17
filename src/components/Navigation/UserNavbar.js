import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../routes/router";
import { GoogleLogout } from "react-google-login";
import { GoogleConfig } from "../../config/GoogleLogin";
import Search from "../Search";

const styles = {
  userImg: {
    height: "40px",
    width: "40px",
    borderRadius: "50px", 
    marginRight: "10px",
  },
  navbar: {
    height: "60px",
    padding: "10px 20px"
  }
};

const UserNavbar = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    let data = JSON.parse(sessionStorage.getItem("user"));
    let userdata = data;
    setUser(userdata.profileObj);
  }, []);

  const logout = () => {
    try {
      sessionStorage.removeItem("user");
      props.history.push(HOME);
    } catch (error) {
      console.log(error.details);
    }
  };

  return (
    <header className="navbar bg-secondary" style={styles.navbar}>
      <section className="navbar-section">
        <Link to={HOME} className="navbar-brand">
          UDEMY_CLONE
        </Link>
      </section>
      <section className="navbar-center">
        <Search />
      </section>
      <section className="navbar-section">
        <img
          src={user.imageUrl}
          className="img-responsive"
          alt={user.name}
          style={styles.userImg}
        />
        <span style={{ marginRight: '20px', fontSize: '13px' }}>{user.name}</span>
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
      </section>
    </header>
  );
};

export default UserNavbar;
