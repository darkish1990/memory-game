import React, { useContext, useEffect } from "react";
import Board from "../../components/Board/Board";
import Score from "../../components/Score/Score";
import { GameContext } from "../../contexts/GameContext";
import "./Game.css";
import { useHistory } from "react-router-dom";
import UndoButton from "../../components/UndoButton/UndoButton";

const HOME_PAGE = "/";

const Game = (props) => {
  const { cardsGroups, setArrOfPlayers } = props.location;
  const history = useHistory();
  const { gameHandler, currentPlayer, removeFromComplete } = useContext(
    GameContext
  );
  const triggerUndo = () => {
    removeFromComplete();
  };
  useEffect(() => {
    if (!cardsGroups) {
      history.push(HOME_PAGE);
    }
  }, [history, cardsGroups]);

  return (
    <div className="game-container">
      <div className="area-1">
        <h1>Memory Game!</h1>
        <Board
          className="Board"
          cardsGroups={cardsGroups}
          arrOfPlayers={gameHandler.arrOfPlayers}
          setArrOfPlayers={setArrOfPlayers}
          triggerUndo={triggerUndo}
        />
      </div>
      <div className="area-2">
        <Score
          className="Score"
          arrOfPlayers={gameHandler.arrOfPlayers}
          currentPlayer={currentPlayer}
        />
        <UndoButton triggerUndo={triggerUndo} />
      </div>
    </div>
  );
};

export default Game;
