import React from "react";
import Decorator from "../components/decorator";
import Separator from "../components/separator";

import whiteBuilding from "../images/white-building.jpg";
import paulSchoolWay from "../images/paul-school-way.jpg";
import nestIris from "../images/nest-iris.jpg";

const Directions = () => (
  <div className="page directions">
    <Decorator />
    <h1>Directions</h1>
    <div style={{ textAlign: "left" }}>
      <p>
        From OMR Road Kumaran Nagar Signal, take <b>Right</b>.
      </p>
      <p>
        <img
          src={whiteBuilding}
          style={{
            float: "right",
            maxWidth: 120,
            borderRadius: 60,
            margin: "24px 0 24px 24px"
          }}
          alt="Big White Buidling"
        />
      </p>

      <p>
        After 1.5 Kms along the Straight Road, you will find a{" "}
        <b>Big White Colored Building </b> construction going like the picture
        above.
      </p>
      <p>
        <img
          src={paulSchoolWay}
          style={{
            float: "left",
            maxWidth: 120,
            borderRadius: 60,
            margin: "24px 24px 24px 0"
          }}
          alt="Paul School Way"
        />
      </p>
      <p>
        From there at around 200 Mts, you will see a left turn, near blue
        colored board, saying <b>St. Paul School</b> in Tamil.
      </p>
      <p>
        <img
          src={nestIris}
          style={{
            float: "right",
            maxWidth: 120,
            borderRadius: 60,
            margin: "24px 0 24px 24px"
          }}
          alt="Nest Iris Building"
        />
      </p>
      <p>
        Along the Paul's School Road, take <b>3rd Left</b> and enter{" "}
        <b>2nd Building</b>.
      </p>
      <p>
        Our house is in the <b>1st floor</b> of Nest Iris Building!
      </p>
    </div>

    <p>&nbsp;</p>

    <Separator />
    <div className="actions">
      <a
        href="http://www.google.com/maps/place/12.876122,80.213968"
        target="_blank"
      >
        Or Just follow Google Maps :D
      </a>
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
