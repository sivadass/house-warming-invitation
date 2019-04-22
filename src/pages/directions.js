import React from "react";
import Decorator from "../components/decorator";
import Separator from "../components/separator";

const Directions = () => (
  <div className="page">
    <Decorator />
    <h1>Directions</h1>
    <div style={{ textAlign: "left" }}>
      <p>
        From OMR Road Kumaran Nagar Signal, take <b>Right</b>
      </p>
      <p>
        After 1.5 Kms along the Straight Road, you will find a{" "}
        <b>Big White Colored Building </b> construction going on like this:
      </p>

      <p>
        From there at around 200 Mts, you will see a left turn, near blue
        colored board, saying <b>St. Paul School</b> in Tamil
      </p>
    </div>

    <Separator />
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

export default Directions;
