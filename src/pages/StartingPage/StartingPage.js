import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../../contexts/GameContext";
import "./StartingPage.css";

const StartingPage = () => {
  const arrOfPlayers = [];
  const { updateArrOfPlayers } = useContext(GameContext);
  const [numberOfPlayers, setNumberOfPlayers] = useState(1);
  const createPlayerList = (chosenNumberOfPlayers ) => {
      for (let index = 0; index < chosenNumberOfPlayers; index++) {
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
          required
          placeholder="Players"
          onChange={(e) => {
            setNumberOfPlayers(e.target.value);
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
              if (numberOfPlayers > 0) {
                createPlayerList(numberOfPlayers);
              } else {
                createPlayerList(1);
              }
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
