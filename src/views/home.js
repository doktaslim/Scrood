import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { REGISTER } from "../routes/router";

const styles = {
  left: {
    margin: "25vh 0",
    marginLeft: "20px",
  },
  img: {
    margin: "5vh 0"
  }
};

const Home = () => {
  return (
    <Layout>
      <div className="columns">
        <div className="column col-6">
          <div style={styles.left}>
            <h4 style={{ fontSize: "3.5rem" }}>Improve Your Skill</h4>
            <h5 style={{ fontSize: "2rem", marginBottom: "20px" }}>
              Learn Online Today
            </h5>
            <Link to={REGISTER} className="btn btn-primary">Get Started</Link>
          </div>
        </div>
        <div className="column col-6">
          <img style={styles.img} alt="" src="https://res.cloudinary.com/gozzycloud/image/upload/v1587036086/learning_mrewjg.svg" className="img-responsive" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
