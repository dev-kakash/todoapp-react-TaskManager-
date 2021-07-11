import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-center">
      <p>Copyright &copy; 2021 </p>
      <Link to="/about"> About</Link>
    </footer>
  );
};

export default Footer;
