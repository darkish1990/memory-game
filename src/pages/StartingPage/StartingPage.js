import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../../contexts/GameContext";
import "./StartingPage.css";

const StartingPage = () => {
  const arrOfPlayers = [];
  const { updateArrOfPlayers } = useContext(GameContext);
  const [numberofplayers, setNumberofplayers] = useState(1);
  const createPlayerList = () => {
    for (let index = 0; index < numberofplayers; index++) {
      arrOfPlayers.push({
        name: `player${index}`,
        score: 0,
        typesFound: [],
        active: false,
      });
    }
    arrOfPlayers[0].active = true;
    updateArrOfPlayers(arrOfPlayers);
  };
  
  const [cardsGroups, setCardsGroups] = useState(8);
  
  
  return (
    <form className="form">
      <div className="cards-amount-container">
        <label htmlFor="cards">Choose how many cards:</label>
        <select
          id="cards"
          onChange={(e) => {
            setCardsGroups(e.target.value);
          }}
        >
          <option>8</option>
          <option>16</option>
          <option>24</option>
        </select>
      </div>
      <div className="numberofplayers-input-container">
        <input
          className="numberofplayers-input"
          type="number"
          placeholder="Enter number of players (default is 1)"
          onChange={(e) => {
            setNumberofplayers(e.target.value);
          }}
        />
      </div>
      <div className="button-container ">
        <Link
          to={{
            pathname: "/game",
            cardsGroups,
          }}
        >
          <button
            className="glow-on-hover"
            onClick={() => {
              createPlayerList();
            }}
          >
            Begin!
          </button>
        </Link>
      </div>
    </form>
  );
};

export default StartingPage;
