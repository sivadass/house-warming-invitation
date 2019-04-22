import React from "react";
import Decorator from "../components/decorator";
import Separator from "../components/separator";

const Contact = () => (
  <div className="page">
    <Decorator />
    <h1>Contact</h1>
    <p>
      Please feel free to call us anytime for guidance on location or any thing!
    </p>
    <div className="page-contents">
      <p>
        Sivadass: <a href="tel:+918056277987">+91-80562-77987</a>
      </p>
      <p>
        Usha: <a href="tel:+919283224734">+91-92832-24734</a>
      </p>
    </div>
    <Decorator type="bottom" />
  </div>
);

export default Contact;
