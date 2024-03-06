import React from "react";

import cardsBackground from "assets/img/CardsGraphic.png";
import cardsGraphic from "assets/img/CardsDisplayGraphic.png";

export default function Cards() {
  return (
    <div id="Cards">
      <div className="maxWidthContainer">
        <div className="center">
          <div className="cardsContent">
            <div className="cardsGaphic fadeOnScroll">
              <img src={cardsGraphic} alt="cards cryptopia" />
            </div>
            <p>
              Explore a world beyond today's society, a place where blockchain
              technology helps build dreams. Become a tycoon or a skilled
              adventurer. Plunder the high seas as a pirate, or live the
              exciting, risky life of a bounty hunter. Pursue any life you want
              the way you please. Welcome to Cryptopia.
            </p>
            <a href="https://wiki.cryptopia.com/story/cryptopia/">
              <button className="longBtn">Learn More</button>
            </a>
          </div>
        </div>
      </div>
      <div className="backgroundGraphic">
        <img src={cardsBackground} alt="cards graphic" />
      </div>
    </div>
  );
}
