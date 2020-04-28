import React from "react";

const styles = {
  container: {
    position: 'static',
    textAlign: "center"
  },
  text: {
    textAlign: "center",
    fontSize: "12px",
    color: "#23r5f2",
    opacity: 0.5,
    marginTop: "10px",
  },
};

const Footer = () => {
  return (
    <footer style={styles.container}>
      <hr />
      <p style={styles.text}>Udemy-Clone created by Chiagoziem</p>
    </footer>
  );
};

export default Footer;
