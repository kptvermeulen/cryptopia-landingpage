import React from "react";

import heroGraphic from "assets/img/heroGraphic.jpg";

import logo from "assets/svg/cryptopiaLogo.svg";

export default function Hero() {
  return (
    <div id="hero">
      <div className="header">
        <div className="headerLogo">
          <img src={logo} alt="logo" />
        </div>
        <div className="headerMenu">
          <button className="noBtn">Game</button>
          <button className="noBtn">Wallet</button>
          <button className="noBtn">Tokenomics</button>
          <button className="noBtn">Wiki</button>
          <button className="noBtn">Blog</button>
        </div>
        <div className="headerButtons">
          <button className="accentBtn">Mint</button>
          <button>Join Now</button>
        </div>
      </div>
      <div className="maxWidthContainer">
        <div className="heroContentWrapper">
          <div className="heroContent">
            <h1>Embark on a blockchain</h1>
            <p>
              Cryptopia is an independent city-state society based on the
              blockchain, where citizens can buy, sell, vote, and perform other
              essential activities using a safe, secure, and transparent system.
            </p>
            <p>
              Additionally, as a seasteading city-state, Cryptopia lies outside
              of any existing nation’s borders, allowing its citizens free reign
              to experiment and create the community they want for themselves.
              Cryptopia has become humanity’s haven, the reboot of society the
              world needs to survive.
            </p>
            <button className="longBtn">Learn More</button>
          </div>
        </div>
      </div>

      <div className="backgroundGraphic">
        <img src={heroGraphic} alt="hero graphic" />
      </div>
    </div>
  );
}
