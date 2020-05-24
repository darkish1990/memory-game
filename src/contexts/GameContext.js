import React, { useState, createContext } from "react";

export const GameContext = createContext();

const GameContextProvider = (props) => {
  const [gameHandler, setGameHandler] = useState({});
  const [currentPlayer, setCurrentPlayer] = useState({});
  const [completed, setCompleted] = useState([]);

  const updateArrOfPlayers = (arrOfPlayers) => {
    setGameHandler({ ...gameHandler, arrOfPlayers });
  };

  const updateComplete = (itemToUpdate) => {
    setCompleted(itemToUpdate);
  };
  const removeFromComplete = () => {
    let poppedElement = "";
    if (Array.isArray(completed)) {
      poppedElement = completed.pop();
      decrementScore(poppedElement);
      return setCompleted(() => [...completed]);
    }
    setCompleted([]);
  };
  const decrementScore = (element) => {
    const playerToDecrementScore = gameHandler.arrOfPlayers.findIndex((x) =>
      x["typesFound"].includes(element)
    );
    gameHandler.arrOfPlayers[playerToDecrementScore]["score"] -= 1;
  };
  const incrementScore = (currentPlayer, type) => {
    const currentPlayerindex = gameHandler.arrOfPlayers.findIndex(
      (x) => x.name === currentPlayer
    );
    gameHandler.arrOfPlayers[currentPlayerindex]["typesFound"].push(type);
    gameHandler.arrOfPlayers[currentPlayerindex]["score"] += 1;
    setGameHandler(gameHandler);
  };

  const updateCurrentPlayer = (nextPlayer) => {
    const nextPlayerindex = gameHandler.arrOfPlayers.findIndex(
      (x) => x.name === nextPlayer
    );
    gameHandler.arrOfPlayers.forEach((player) => (player.active = false));
    gameHandler.arrOfPlayers[nextPlayerindex]["active"] = true;
    setCurrentPlayer(gameHandler.arrOfPlayers[nextPlayerindex]["name"]);
    setGameHandler(gameHandler);
  };

  const FindWinner = () => {
    let maxScore = 0;
    let arrOfWinners = [];
    gameHandler.arrOfPlayers.forEach((player) => {
      if (player["score"] > maxScore) {
        arrOfWinners = [];
        maxScore = player["score"];
        arrOfWinners.push(player["name"]);
      } else if (player["score"] === maxScore) {
        arrOfWinners.push(player["name"]);
      }
    });
    return arrOfWinners;
  };
  return (
    <GameContext.Provider
      value={{
        updateArrOfPlayers,
        gameHandler,
        incrementScore,
        updateCurrentPlayer,
        currentPlayer,
        updateComplete,
        removeFromComplete,
        completed,
        setCompleted,
        FindWinner,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
