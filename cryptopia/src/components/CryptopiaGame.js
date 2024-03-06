import React from "react";

import gameGraphicBackground from "assets/img/GameGraphic.png";
import gameFrame from "assets/img/gameFrame.png";

export default function CryptopiaGame() {
  return (
    <div id="CryptopiaGame">
      <div className="maxWidthContainer">
        <div className="center">
          <div className="CGContent">
            <h2 className="fadeOnScroll">Cryptopia Game</h2>
            <p className="fadeOnScroll">
              Explore a world beyond today's society, a place where blockchain
              technology helps build dreams. Become a tycoon or a skilled
              adventurer. Plunder the high seas as a pirate, or live the
              exciting, risky life of a bounty hunter. Pursue any life you want
              the way you please. Welcome to Cryptopia.
            </p>
            <a href="https://cryptopia.com/game/">
              <button className="longBtn fadeOnScroll">Go to game</button>
            </a>
            <div className="gameGraphic">
              <img src={gameFrame} alt="game preview" />
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundGraphic">
        <img src={gameGraphicBackground} alt="game graphic" />
      </div>
    </div>
  );
}
