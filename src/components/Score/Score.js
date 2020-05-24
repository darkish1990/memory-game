import React from "react";
import './Score.css'
const Score = ({ arrOfPlayers ,currentPlayer}) => {
  
  return (
    <div className="score-table">
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {arrOfPlayers?.map((player, index) => {
            return (
              <tr key={index} className={player.active?"active":"not-active"}>
                <td data-column="Name">{player.name}</td>
                <td data-column="Score">{player.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Score;
