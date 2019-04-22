import React from "react";
import { withRouter } from "react-router";
import Decorator from "../components/decorator";
import Separator from "../components/separator";

const getInviteeName = search => {
  const params = new URLSearchParams(search);
  const name = params.get("invitee");
  return name;
};

const Home = ({ location }) => (
  <div className="page">
    <Decorator />
    <div className="page-contents home">
      <h1>Hi {getInviteeName(location.search)},</h1>
      <p className="message">
        Sivadass s/o Usha, invites you and your family to <b>OUR NEW HOME</b>
      </p>
      <Separator />
      <p className="message">
        Please join us for our House warming ceremoney on
      </p>
      <p className="message">
        <b>Sunday</b>,
        <br />{" "}
        <b>
          April 28<sup>th</sup>
        </b>
        , 2019, <br /> Between <b>6 AM to 11 AM</b>
      </p>
    </div>
    <Decorator type="bottom" />
    <div className="actions">
      <a
        href="http://www.google.com/maps/place/12.876122,80.213968"
        target="_blank"
      >
        Google Maps
      </a>
      <a href="olacabs://app/launch?drop_lat=12.876122&drop_lng=80.213968">
        Ola
      </a>
      <a href="https://m.uber.com/ul/?action=setPickup&client_id=sasasas&pickup=my_location&dropoff[formatted_address]=Chemmanchery%20Bus%20Depot%2C%20Semmancheri%2C%20Arasankazhani%2C%20Sithalapakkam%2C%20Chennai%2C%20Tamil%20Nadu%2C%20India&dropoff[latitude]=12.874620&dropoff[longitude]=80.209865">
        Uber
      </a>
    </div>
  </div>
);

export default withRouter(Home);
