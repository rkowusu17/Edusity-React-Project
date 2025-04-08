import React from "react";
import "./title.css";

const Title = ({ title, subtitle }) => {
  return (
    <div className="title">
      <p>{title}</p>
      <h2>{subtitle}</h2>
    </div>
  );
};

export default Title;
