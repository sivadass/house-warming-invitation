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
  </div>
);

export default withRouter(Home);
