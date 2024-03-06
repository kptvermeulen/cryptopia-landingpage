import React from "react";

import tileA from "assets/img/socialsTileA.png";
import tileB from "assets/img/socialsTileB.png";

import FB from "assets/svg/faceBook.svg";
import Discord from "assets/svg/discord.svg";
import X from "assets/svg/X.svg";
import coinMarketCap from "assets/svg/coinMarketCap.svg";

import CountUp from "react-countup";

export default function Socials() {
  return (
    <div id="Socials">
      <div className="maxWidthContainer">
        <div className="tileGrid">
          <div className="socialTile">
            <div className="sTContent fadeOnScroll">
              <img src={FB} alt="facebook" />
              <div className="STFollowers">
                <CountUp start={0} end={55} duration={4} suffix="K+"></CountUp>
              </div>
              <p>Followers</p>
            </div>
            <img className="tileBackground" src={tileA} alt="tile" />
          </div>
          <div className="socialTile">
            <div className="sTContent fadeOnScroll">
              <img src={Discord} alt="discord" />
              <div className="STFollowers">
                <CountUp start={0} end={29} duration={4} suffix="K+"></CountUp>
              </div>
              <p>Members</p>
            </div>
            <img className="tileBackground" src={tileB} alt="tile" />
          </div>
          <div className="socialTile">
            <div className="sTContent fadeOnScroll">
              <img src={X} alt="X" />
              <div className="STFollowers">
                <CountUp start={0} end={11} duration={4} suffix="K+"></CountUp>
              </div>
              <p>Followers</p>
            </div>
            <img className="tileBackground" src={tileB} alt="tile" />
          </div>
          <div className="socialTile">
            <div className="sTContent fadeOnScroll">
              <img src={coinMarketCap} alt="CoinMarketCap" />
              <div className="STFollowers">
                <CountUp start={0} end={55} duration={4} suffix="K+"></CountUp>
              </div>
              <p>Followers</p>
            </div>
            <img className="tileBackground" src={tileA} alt="tile" />
          </div>
        </div>
      </div>
    </div>
  );
}
