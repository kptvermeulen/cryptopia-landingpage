import React from "react";

import wpGraphic from "assets/img/whitepaperGraphic.jpg";

export default function LostWP() {
  return (
    <div id="LostWP">
      <div className="maxWidthContainer">
        <div className="center">
          <div className="lWPContent">
            <h2>The lost white paper</h2>
            <p>
              A few years after Satoshi Nakamoto’s Bitcoin white paper changed
              the world, another white paper of mysterious origin created a
              stir.
            </p>
            <p>
              Satoshi’s work states that the world is due for economic collapse
              due to its reliance on fiat currency. It would take only one
              crisis, such as climate change, to unleash an unmitigated global
              catastrophe. His startling proposal: Cryptopia World, a nation
              based on the blockchain, a new society would serve as an example
              for all others to follow.
            </p>
            <button className="longBtn">Download Whitepaper</button>
          </div>
        </div>
      </div>
      <div className="backgroundGraphic">
        <img src={wpGraphic} alt="cryptopia whitepaper graphic" />
      </div>
    </div>
  );
}
