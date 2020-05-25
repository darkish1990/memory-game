import React from "react";
import Card from "../Card/Card";

const BoardCreator = ({ cards, onCardClick }) => {
  //Creating the Board
  return cards ? (
    cards.map((card) => (
      <Card {...card} onClick={onCardClick(card)} key={card.id} />
    ))
  ) : (
    <div></div>
  );
};

export default BoardCreator;
