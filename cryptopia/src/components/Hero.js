import React from "react";

import heroGraphic from "assets/img/heroGraphic.png";

import logo from "assets/svg/cryptopiaLogo.svg";

export default function Hero() {
  return (
    <div id="hero">
      <div className="header">
        <div className="headerLogo">
          <img src={logo} alt="logo" />
        </div>
        <div className="headerMenu">
          <a href="https://cryptopia.com/game/">
            <button className="noBtn">Game</button>
          </a>
          <a href="https://cryptopia.com/wallet/">
            <button className="noBtn">Wallet</button>
          </a>
          <a href="https://wiki.cryptopia.com/">
            <button className="noBtn">Wiki</button>
          </a>
          <a href="https://coinmarketcap.com/community/profile/Cryptopia/">
            <button className="noBtn">Blog</button>
          </a>
          <a href="https://cryptopia.com/tokenomics/">
            <button className="noBtn">Tokenomics</button>
          </a>
        </div>
        <div className="headerButtons">
          <a href="https://cryptopia.com/mint/">
            <button className="accentBtn">Mint</button>
          </a>
          <a href="https://discord.com/invite/cryptopia">
            <button>
              <span>Join Now</span>
            </button>
          </a>
        </div>
      </div>
      <div className="maxWidthContainer">
        <div className="heroContentWrapper">
          <div className="heroContent">
            <h1 className="fadeOnScroll">
              <div className="smallerHeroTitle">Embark on a</div>
            </h1>
            <h1 className="fadeOnScroll">blockchain Adventure</h1>
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
            <a href="https://wiki.cryptopia.com/story/cryptopia/">
              <button className="longBtn fadeOnScroll">Learn More</button>
            </a>
          </div>
        </div>
      </div>

      <div className="backgroundGraphic">
        <div className="backgroundGraphicWrapper">
          <img src={heroGraphic} alt="hero graphic" />
        </div>
      </div>
    </div>
  );
}
