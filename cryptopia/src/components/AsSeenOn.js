import React from "react";

import asoBackground from "assets/img/asSeenOn.jpg";
import asoTile from "assets/img/asSeenOnTile.png";

import asoLogo1 from "assets/img/aso1.png";
import asoLogo2 from "assets/img/aso2.png";
import asoLogo3 from "assets/img/aso3.png";

export default function AsSeenOn() {
  return (
    <div id="AsSeenOn">
      <div className="maxWidthContainer">
        <div className="center">
          <h2>As seen on</h2>
          <div className="ASOGrid">
            <div className="ASOTile">
              <div className="asoLogo">
                <img src={asoLogo1} alt="logo" />
              </div>
              <img src={asoTile} alt="tile" />
            </div>
            <div className="ASOTile">
              <div className="asoLogo">
                <img src={asoLogo2} alt="logo" />
              </div>
              <img src={asoTile} alt="tile" />
            </div>
            <div className="ASOTile">
              <div className="asoLogo">
                <img src={asoLogo3} alt="logo" />
              </div>
              <img src={asoTile} alt="tile" />
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundGraphic">
        <img src={asoBackground} alt="as seen on graphic" />
      </div>
    </div>
  );
}
