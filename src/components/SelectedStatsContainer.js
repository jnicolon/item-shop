import React from "react";

export default function SelectedStatsContainer(props) {
  return (
    <table className="selected-item-stats-container">
      <tbody>
        <tr>
          <td>HP</td>
          <td className="selected-item-stats-number">{props.stats.hp}</td>
        </tr>
        <tr>
          <td>ATK</td>
          <td className="selected-item-stats-number">{props.stats.atk}</td>
        </tr>
        <tr>
          <td>MANA</td>
          <td className="selected-item-stats-number">{props.stats.mana}</td>
        </tr>
      </tbody>
    </table>
  );
}
