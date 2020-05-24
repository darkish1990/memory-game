import React from "react";
const UndoButton = ({triggerUndo}) => {
  return (
    <div className="undo-button">
      <button
        className="glow-on-hover"
        onClick={() => {
          triggerUndo();
        }}
      >
        Big Undo Button
      </button>
    </div>
  );
};

export default UndoButton;
