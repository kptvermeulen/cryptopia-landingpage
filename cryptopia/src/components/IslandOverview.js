import React from "react";

import iOGraphic from "assets/img/islandOverview.png";

export default function IslandOverview() {
  return (
    <div id="IslandOverview">
      <div className="backgroundGraphic">
        <img src={iOGraphic} alt="island overview graphic" />
      </div>
    </div>
  );
}
