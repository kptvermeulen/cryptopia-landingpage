import React from "react";
import shipVideoBackground from "assets/img/shipVideoBackground.png";
import shipVideo from "assets/video/cryptopiaShip.webm";

export default function ShipVideo() {
  return (
    <div id="ShipVideo">
      <div className="maxWidthContainer">
        <div className="center">
          <div className="shipVideo">
            <video autoPlay muted loop>
              <source src={shipVideo} type="video/webm"></source>
            </video>
          </div>

          <div className="shipContent">
            <h2>Get Your Ship</h2>
            <a href="https://cryptopia.com/mint/">
              <button className="accentBtn">Mint Now</button>
            </a>
          </div>
        </div>
      </div>
      <div className="backgroundGraphic">
        <img src={shipVideoBackground} alt="crypopia background graphic" />
      </div>
    </div>
  );
}
