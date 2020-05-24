import React, { useState, useEffect, useContext } from "react";
import Card from "../Card/Card";
import WinnerComponent from "../Winner/Winner";
import { buildCards } from "./../../utils/buildCards";
import { GameContext } from "../../contexts/GameContext";
import "./Board.css";
import {
  validateCouples,
  cardAlreadyIncouples,
  couplesFull,
  resetCouplesAfter,
} from "./../../utils/BoardUtils";

const SINGLE_SECOND = 1000;

const Board = ({ cardsGroups }) => {
  const [winner, setWinner] = useState([]);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const {
    incrementScore,
    gameHandler,
    updateCurrentPlayer,
    updateComplete,
    completed,
    setCompleted,
    FindWinner,
  } = useContext(GameContext);

  const [cards, setCards] = useState(buildCards(cardsGroups));
  const [couples, setCouples] = useState([]);
  useEffect(() => {
    let flippedCards = 0;
    if (cards) {
      const newCards = cards.map((card) => ({
        ...card,
        flipped:
          couples.find((c) => c.id === card.id) ||
          completed?.includes(card.type),
      }));
      newCards.forEach((card) => {
        if (card.flipped) {
          flippedCards++;
        }
      });
      if (flippedCards === cardsGroups) {
        setWinner(FindWinner());
      }
      setCards(newCards);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [couples, completed]);

  const onCardClick = (card) => () => {
    if (couplesFull(couples) || cardAlreadyIncouples(couples, card)) return;
    const newcouples = [...couples, card];
    setCouples(newcouples);
    const cardsIncouplesMatched = validateCouples(newcouples);

    if (cardsIncouplesMatched) {
      if (Array.isArray(completed)) {
        setCompleted([]);
      }
      updateComplete([...completed, newcouples[0].type]);
      incrementScore(
        gameHandler.arrOfPlayers[currentPlayerIndex]["name"],
        newcouples[0].type
      );
      nextTurn();
    }

    if (couplesFull(newcouples)) {
      nextTurn();
      resetCouplesAfter(SINGLE_SECOND, setCouples);
    }

    function nextTurn() {
      if (currentPlayerIndex === gameHandler.arrOfPlayers.length - 1) {
        setCurrentPlayerIndex(0);
        updateCurrentPlayer(gameHandler.arrOfPlayers[0]["name"]);
        return;
      }
      setCurrentPlayerIndex(currentPlayerIndex + 1);
      updateCurrentPlayer(
        gameHandler.arrOfPlayers[currentPlayerIndex + 1]["name"]
      );
    }
  };
  function mapTheCards() {
    return (
      cards &&
      cards.map((card) => (
        <Card {...card} onClick={onCardClick(card)} key={card.id} />
      ))
    );
  }

  return (
    <div className="Board">
      {winner?.length > 0 ? WinnerComponent(winner) : mapTheCards()}
    </div>
  );
};

export default Board;
