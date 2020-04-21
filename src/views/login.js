import React from "react";
import Layout from "../components/Layout/Layout";

const Login = () => {

  return (
    <Layout>
      <div className="columns">
        <div className="column col-5 p-centered" style={{ marginTop: "10vh" }}>
          <div className="card">
            <div className="card-body">
              <h5>Login</h5>
              <hr />
              <form>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
