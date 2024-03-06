import React from "react";

import asoBackground from "assets/img/asSeenOn.png";
import asoTile from "assets/img/asSeenOnTile.png";

import asoLogo1 from "assets/img/aso1.png";
import asoLogo2 from "assets/img/aso2.png";
import asoLogo3 from "assets/img/aso3.png";

export default function AsSeenOn() {
  return (
    <div id="AsSeenOn">
      <div className="maxWidthContainer">
        <div className="center">
          <h2 className="fadeOnScroll">As seen on</h2>
          <div className="ASOGrid">
            <div className="ASOTile fadeOnScroll">
              <div className="asoLogo">
                <img src={asoLogo1} alt="logo" />
              </div>
              <img className="asoTileBackground" src={asoTile} alt="tile" />
            </div>
            <div className="ASOTile fadeOnScroll">
              <div className="asoLogo">
                <img src={asoLogo2} alt="logo" />
              </div>
              <img className="asoTileBackground" src={asoTile} alt="tile" />
            </div>
            <div className="ASOTile fadeOnScroll">
              <div className="asoLogo">
                <img src={asoLogo3} alt="logo" />
              </div>
              <img className="asoTileBackground" src={asoTile} alt="tile" />
            </div>
          </div>
          <a href="https://cryptopia.com/invest">
            <button className="longBtn investBtn">Invest Now</button>
          </a>
        </div>
      </div>
      <div className="backgroundGraphic">
        <img src={asoBackground} alt="as seen on graphic" />
      </div>
    </div>
  );
}
