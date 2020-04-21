import React, { useState, useEffect } from "react";
import { DASHBOARD } from "../routes/router";
import { GoogleLogin } from "react-google-login";
import { GoogleConfig } from "../config/GoogleLogin";
import Layout from "../components/Layout/Layout";
import Axios from "axios";

const Register = (props) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const responseGoogle = (user) => {
    try {
      if (user) {
        Axios.post("http://localhost:4000/users", {
          id: user.googleId,
          fname: user.profileObj.name,
          email: user.profileObj.email,
        })
          .then((resp) => resp.data)
          .then(sessionStorage.setItem("user", JSON.stringify(user)))
          .catch((error) => setErrorMessage(error.message));
      }
      return props.history.push(DASHBOARD);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    responseGoogle();
  });

  return (
    <Layout>
      <div className="columns">
        <div className="column col-5 p-centered" style={{ marginTop: "10vh" }}>
          <div className="card">
            <div className="card-body">
              <h5>Register</h5>
              <hr />
              {errorMessage ? (
                <div className="toast toast-error">{errorMessage}</div>
              ) : null}
              <form>
                <div className="form-group">
                  <label htmlFor="username" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-input" id="username" />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" id="email" className="form-input" />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-input" id="password" />
                </div>
                <div className="form-group">
                  <button
                    className="btn btn-primary"
                    style={{ width: "100%", margin: "20px 0" }}
                  >
                    Register
                  </button>
                </div>
                <hr />
                <div style={{ textAlign: "center" }}>
                  <GoogleLogin
                    className="my-2"
                    clientId={GoogleConfig.client_id}
                    buttonText="SignUp With Google"
                    onSuccess={props.responseGoogle}
                    onFailure={props.responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
