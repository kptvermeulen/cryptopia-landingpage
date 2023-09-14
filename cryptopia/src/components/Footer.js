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
            </div>
            <p className="footerText">
              Cryptopia is an independent city-state society based on the
              blockchain, where citizens can buy, sell, vote, and perform other
              essential activities using a safe, secure, and transparent system.
            </p>
            <div className="flex footerButtons">
              <a href="https://cryptopia.com/mint/">
                <button className="accentBtn">Mint</button>
              </a>
              <a href="https://discord.com/invite/cryptopia">
                <button>Join Now</button>
              </a>
            </div>
          </div>
          <div className="siteMapColumns">
            <div className="sMColumn">
              <div className="sMTitle">
                <div className="VLine"></div>Website
              </div>
              <a href="https://cryptopia.com/game/ ">
                <div className="sMItem">Game</div>
              </a>
              <a href="https://cryptopia.com/wallet/">
                <div className="sMItem">Wallet</div>
              </a>
              <a href="https://cryptopia.com/#team">
                <div className="sMItem">Team</div>
              </a>
              <a href="https://cryptopia.com/#roadmap ">
                <div className="sMItem">Roadmap</div>
              </a>
              <a href="https://cryptopia.com/invest/">
                <div className="sMItem">Invest</div>
              </a>
            </div>
            <div className="sMColumn">
              <div className="sMTitle">
                <div className="VLine"></div>Cryptopia
              </div>
              <a href=" https://whitepaper.cryptopia.com/ ">
                <div className="sMItem">Whitepaper</div>
              </a>
              <a href="https://support.cryptopia.com/portal/en/home?_gl=1*k6ppko*_ga*NzM0MDA4MTc5LjE2NzYzNzYxMDc.*_ga_LNE28LM025*MTY5NDQ0MjE3MC4yNzIuMS4xNjk0NDQzMTUyLjUuMC4w ">
                <div className="sMItem">Support</div>
              </a>
              <a href="https://coinmarketcap.com/community/profile/Cryptopia/ ">
                <div className="sMItem">Blog</div>
              </a>
              <a href="https://wiki.cryptopia.com/  ">
                <div className="sMItem">Wiki</div>
              </a>
              <a href="https://discord.com/invite/cryptopia   ">
                <div className="sMItem">Community</div>
              </a>
            </div>
            <div className="sMColumn">
              <div className="sMTitle">
                <div className="VLine"></div>Downloads
              </div>
              <a href="https://github.com/cryptopia-com/whitepaper-legacy/blob/main/Cryptopia_Legacy__White_Paper.pdf ">
                <div className="sMItem">Story White-Paper</div>
              </a>
              <a href="https://cryptopia.com/downloads/Logo_pack.zip ">
                <div className="sMItem">Logo Pack</div>
              </a>
              <a href="https://cryptopia.com/downloads/Art_pack.zip ">
                <div className="sMItem">Art Pack</div>
              </a>
              <a href="https://docs.google.com/presentation/d/19hkJT56WvO3Iil5tjOtahcdnRqPje-AcXtR-KXYyDcg/edit#slide=id.g227a3367db3_0_650 ">
                <div className="sMItem">Marketing Plan</div>
              </a>
              <a href="https://sharing.clickup.com/24415847/b/q93k7-827/board">
                <div className="sMItem">Roadmap</div>
              </a>
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
        <div className="footerTextCopy">
          <div className="copyrightText">Copyright © 2023 Cryptopia Ltd.</div>
          <div className="terms">
            <a href="https://workdrive.zohopublic.eu/external/b8c2d2a5be8331d9df2be8425933efcf2f1d5b249445b195eb97eae05c11a6d1 ">
              <span>Terms</span>
            </a>{" "}
            /{" "}
            <a href="https://workdrive.zohopublic.eu/external/b8ef7f04d1d5d75c8191bbcc67a0dc088cd454ae658352c476f244415709954d">
              <span>Privacy Policy</span>
            </a>
          </div>
        </div>
      </div>
      <div className="backgroundGraphic">
        <img src={footerBackground} alt="footer background" />
      </div>
    </div>
  );
}
