import React from "react";

import gameGraphicBackground from "assets/img/GameGraphic.png";
import gameGraphicBackgroundTop from "assets/img/GameGraphicTop.png";
import gameFrame from "assets/img/gameFrame.png";

export default function CryptopiaGame() {
  return (
    <div id="CryptopiaGame">
      <div className="maxWidthContainer">
        <div className="center">
          <div className="CGContent">
            <h2>Cryptopia Game</h2>
            <p>
              Explore a world beyond today's society, a place where blockchain
              technology helps build dreams. Become a tycoon or a skilled
              adventurer. Plunder the high seas as a pirate, or live the
              exciting, risky life of a bounty hunter. Pursue any life you want
              the way you please. Welcome to Cryptopia.
            </p>
            <button className="longBtn">Go to game</button>
            <div className="gameGraphic">
              <img src={gameFrame} alt="game preview" />
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundGraphic">
        <img src={gameGraphicBackgroundTop} alt="game graphic top" />
        <img src={gameGraphicBackground} alt="game graphic" />
      </div>
    </div>
  );
}
