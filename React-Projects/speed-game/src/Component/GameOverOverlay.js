import React from "react";

const closeHandler = () => {
  window.location.reload();
};

const GameOverOverlay = (props) => {
   return (
    <div className="overlay">
      <div className="popup">
        <button onClick={closeHandler} className="btn-text close-btn">
          X
        </button>
        <h2>Game Over</h2>
        <p>Your final score is {props.finalScore}</p>
      </div>
    </div>
  );
};

export default GameOverOverlay;