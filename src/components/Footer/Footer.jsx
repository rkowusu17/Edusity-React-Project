import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p> &copy; {year} Edusity. All rights reserved </p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
};

export default Footer;
