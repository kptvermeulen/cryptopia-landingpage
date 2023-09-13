import React from "react";

import footerBackground from "assets/img/footerBackground.png";
import logo from "assets/svg/cryptopiaLogo.svg";

import partner1 from "assets/img/partner1.png";
import partner2 from "assets/img/partner2.png";
import partner3 from "assets/img/partner3.png";
import partner4 from "assets/img/partner4.png";
import partner5 from "assets/img/partner5.png";
import partner6 from "assets/img/partner6.png";
import partner7 from "assets/img/partner7.png";

export default function Footer() {
  return (
    <div id="footer">
      <div className="maxWidthContainer">
        <div className="footerColumns">
          <div className="mainFooterContent">
            <div className="footerLogo">
              <img src={logo} alt="logo" />
              <p className="footerText">
                Cryptopia is an independent city-state society based on the
                blockchain, where citizens can buy, sell, vote, and perform
                other essential activities using a safe, secure, and transparent
                system.
              </p>
              <div className="flex footerButtons">
                <button className="accentBtn">Mint</button>
                <button>Join Now</button>
              </div>
            </div>
          </div>
          <div className="siteMapColumns">
            <div className="sMColumn">
              <div className="sMTitle">Website</div>
              <div className="sMItem">Game</div>
              <div className="sMItem">Wallet</div>
              <div className="sMItem">Team</div>
              <div className="sMItem">Roadmap</div>
              <div className="sMItem">Invest</div>
            </div>
            <div className="sMColumn">
              <div className="sMTitle">Cryptopia</div>
              <div className="sMItem">Whitepaper</div>
              <div className="sMItem">Support</div>
              <div className="sMItem">Blog</div>
              <div className="sMItem">Wiki</div>
              <div className="sMItem">Community</div>
            </div>
            <div className="sMColumn">
              <div className="sMTitle">Downloads</div>
              <div className="sMItem">Story White-Paper</div>
              <div className="sMItem">Logo Pack</div>
              <div className="sMItem">Art Pack</div>
              <div className="sMItem">Marketing Plan</div>
              <div className="sMItem">Roadmap</div>
            </div>
          </div>
        </div>
        <div className="partners">
          <div className="partnersTitle">Partners</div>
          <div className="partnersGrid">
            <img src={partner1} alt="partner" />
            <img src={partner2} alt="partner" />
            <img src={partner3} alt="partner" />
            <img src={partner4} alt="partner" />
            <img src={partner5} alt="partner" />
            <img src={partner6} alt="partner" />
            <img src={partner7} alt="partner" />
          </div>
        </div>
        <div className="footerHLine"></div>
        <div className="footerText">
          <div className="copyrightText">Copyright © 2023 Cryptopia Ltd.</div>
          <div className="terms">
            <span>Terms</span> / <span>Privacy Policy</span>
          </div>
        </div>
      </div>
      <div className="backgroundGraphic">
        <img src={footerBackground} alt="footer background" />
      </div>
    </div>
  );
}
