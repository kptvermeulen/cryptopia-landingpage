import React from "react";

import tycoon from "assets/img/gameplayTycoon.png";
import adventure from "assets/img/gameplayAdventure.png";
import bounty from "assets/img/gameplayBounty.png";
import pirate from "assets/img/gameplayPirate.png";

export default function Gameplay() {
  return (
    <div id="Gameplay">
      <div className="maxWidthContainer">
        <div className="center">
          <h2>Gameplay</h2>
          <div className="gameplayGrid">
            <div className="gameplayItem fadeOnScroll">
              <img src={tycoon} alt="tycoon" />
            </div>
            <div className="gameplayItem fadeOnScroll">
              <img src={adventure} alt="adventure" />
            </div>
            <div className="gameplayItem fadeOnScroll">
              <img src={bounty} alt="bounty" />
            </div>
            <div className="gameplayItem fadeOnScroll">
              <img src={pirate} alt="pirate" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
