import React from "react";

const Footer = () => (
  <div className="footer">
    <div className="actions">
      <a
        href="http://www.google.com/maps/place/12.876122,80.213968"
        target="_blank"
      >
        View on Google Maps
      </a>
      <a href="olacabs://app/launch?drop_lat=12.876122&drop_lng=80.213968">
        Book an Ola
      </a>
      <a href="https://m.uber.com/ul/?action=setPickup&client_id=sasasas&pickup=my_location&dropoff[formatted_address]=Chemmanchery%20Bus%20Depot%2C%20Semmancheri%2C%20Arasankazhani%2C%20Sithalapakkam%2C%20Chennai%2C%20Tamil%20Nadu%2C%20India&dropoff[latitude]=12.874620&dropoff[longitude]=80.209865">
        Book an Uber
      </a>
    </div>
    <p>Save Paper, Save Trees!</p>
    <p>
      &copy; 2019{" "}
      <a href="https://sivadass.in" target="_blank">
        Sivadass
      </a>
      , All rights reserved!
    </p>
  </div>
);

export default Footer;
