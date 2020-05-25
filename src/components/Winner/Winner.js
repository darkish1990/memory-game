import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../../contexts/GameContext";

function WinnerComponent() {
  const { winner, setWinner, setCompleted } = useContext(GameContext);
  useEffect(() => {
    return () => {
      console.log("got To clean the winners");

      setWinner([]);
    };
  }, [setWinner]);
  return (
    <div>
      {winner?.length > 1 ? (
        <div>
          {" "}
          <div>
            And The Winners are{" "}
            {winner.map((singleWinner, index) => (
              <h1 key={index}>{singleWinner}</h1>
            ))}
          </div>
          <Link
            to="/"
            onClick={() => {
              setCompleted([]);
              setWinner([]);
            }}
          >
            <button>Create a new Game</button>
          </Link>
        </div>
      ) : (
        <div>
          {" "}
          <h1>And The Winner is {winner}</h1>
          <Link
            to="/"
            onClick={() => {
              setCompleted([]);
              setWinner([]);
            }}
          >
            <button>Create a new Game</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default WinnerComponent;
