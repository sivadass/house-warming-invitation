import React from "react";
import Decorator from "../components/decorator";
import Separator from "../components/separator";

const BusRoutes = () => (
  <div className="page">
    <Decorator />
    <h1>Bus Routes</h1>
    <Separator />

    <h3>From CMBT</h3>
    <p>570S/570X/570</p>
    <p>Stopping: Kumaran Nagar</p>

    <Separator />

    <h3>From Guindy</h3>
    <p>119M (Direct Bus)/570S/570X/570</p>
    <p>Stopping: Nest Builders / Kumaran Nagar</p>

    <Separator />

    <h3>From Central Railway Station</h3>
    <p>221</p>
    <p>Stopping: Kumaran Nagar</p>

    <Separator />

    <h3>From Broadway</h3>
    <p>102C</p>
    <p>Stopping: Nest Builders</p>

    <Separator />

    <h3>From T-Nagar/Saidapet</h3>
    <p>19A, 19B</p>
    <p>Stopping: Nest Builders / Kumaran Nagar</p>

    <Decorator type="bottom" />
  </div>
);

export default BusRoutes;
