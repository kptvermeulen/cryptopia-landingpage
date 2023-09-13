import React from "react";

import tileA from "assets/img/socialsTileA.png";
import tileB from "assets/img/socialsTileB.png";

import FB from "assets/svg/faceBook.svg";
import Discord from "assets/svg/discord.svg";
import X from "assets/svg/X.svg";
import coinMarketCap from "assets/svg/coinMarketCap.svg";

export default function Socials() {
  return (
    <div id="Socials">
      <div className="maxWidthContainer">
        <div className="tileGrid">
          <div className="socialTile">
            <div className="sTContent">
              <img src={FB} alt="facebook" />
              <div className="STFollowers">55K+</div>
              <p>Followers</p>
            </div>
            <img src={tileA} alt="tile" />
          </div>
          <div className="socialTile">
            <div className="sTContent">
              <img src={Discord} alt="discord" />
              <div className="STFollowers">29K+</div>
              <p>Followers</p>
            </div>
            <img src={tileB} alt="tile" />
          </div>
          <div className="socialTile">
            <div className="sTContent">
              <img src={X} alt="X" />
              <div className="STFollowers">11K+</div>
              <p>Followers</p>
            </div>
            <img src={tileB} alt="tile" />
          </div>
          <div className="socialTile">
            <div className="sTContent">
              <img src={coinMarketCap} alt="CoinMarketCap" />
              <div className="STFollowers">55K+</div>
              <p>Followers</p>
            </div>
            <img src={tileA} alt="tile" />
          </div>
        </div>
      </div>
    </div>
  );
}
