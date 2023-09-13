import AsSeenOn from "components/AsSeenOn";
import Cards from "components/Cards";
import CryptopiaGame from "components/CryptopiaGame";
import Footer from "components/Footer";
import Gameplay from "components/Gameplay";
import Hero from "components/Hero";
import IslandOverview from "components/IslandOverview";
import LostWP from "components/LostWP";
import Socials from "components/Socials";
import React, { useEffect, useState } from "react";

import logo from "assets/svg/cryptopiaLogo.svg";
import logoDark from "assets/svg/cryptopiaLogoDark.svg";

import "styles/landingpage.css";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default function LandingPage() {
  return (
    <>
      <div className="loadingScreen">
        <div className="lSContent">
          <div className="LSLogoWhiteWrapperWrapper">
            <div className="LSLogoWhiteWrapper">
              <img src={logo} className="LSLogoWhite" alt="logo" />
            </div>
          </div>
          <img src={logoDark} className="LSLogoDark" alt="logo" />
        </div>
      </div>

      <Hero />
      <LostWP />
      <Socials />
      <IslandOverview />
      <AsSeenOn />
      <CryptopiaGame />
      <Gameplay />
      <Cards />
      <Footer />
    </>
  );
}
