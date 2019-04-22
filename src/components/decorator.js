import React from "react";
import decorator from "../images/decorator.svg";

const Decorator = ({ type }) => (
  <p className={type === "bottom" ? "decorator bottom" : "decorator"}>
    <img src={decorator} />
  </p>
);

export default Decorator;
