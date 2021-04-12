import React, { Component } from "react";

import Circle from "./Component/Circle";
import GameOverOverlay from "./Component/GameOverOverlay";

import "./App.css";

import bgMusic from "./assests/sound/bonus.wav";
import gameOverMusic from "./assests/sound/gameOver.wav";

let gameStartSound = new Audio(bgMusic);
let gameEndSound = new Audio(gameOverMusic);

class App extends Component {
  state = {
    circles: [
      { id: 1, angrybird: "pink" },
      { id: 2, angrybird: "red" },
      { id: 3, angrybird: "white" },
      { id: 4, angrybird: "yellow" },
    ],
    score: 0,
    current: 0,
    showGameOver: false,
    rounds: 0,
    gameStart: false,
  };

  timer = undefined;
  pace = 1500;

  clickHandler = (id) => {
    if (this.state.current !== id) {
      this.endHandler();
      return;
    }

    this.setState({
      score: this.state.score + 1,
      rounds: 0,
    });
  };

  nextCircle = () => {
    if (this.state.rounds >= 5) {
      this.endHandler();
      return;
    }
    const getRandomNumber = (currentActive) => {
      let nextActive;
      do {
        nextActive = Math.floor(Math.random() * 4) + 1;
      } while (currentActive === nextActive);

      return nextActive;
    };

    this.setState({
      current: getRandomNumber(this.state.current),
      rounds: this.state.rounds + 1,
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace);

    console.log("active circle is ", this.state.current);
  };

  startHandler = () => {
    this.setState({ gameStart: true });
    gameStartSound.play();
    this.nextCircle();
  };

  endHandler = () => {
    clearTimeout(this.timer);
    gameStartSound.pause();
    gameEndSound.play();
    this.setState({ showGameOver: true });
  };

  render() {
    const circles = this.state.circles.map((circle) => {
      return (
        <Circle
          key={circle.id}
          id={circle.id}
          angrybird={circle.angrybird}
          click={() => {
            this.clickHandler(circle.id);
          }}
          active={this.state.current === circle.id}
          disabled={!this.state.gameStart}
        />
      );
    });

    return (
      <div className="container">
        <h1>Speed Game</h1>
        <p>Your Score: {this.state.score}</p>
        <div className="circles">{circles}</div>
        <div className="buttons">
          <button
            disabled={this.state.gameStart}
            onClick={this.startHandler}
            className="btn-text"
            id="start"
            type="submit"
          >
            Start
          </button>
          <button
            disabled={!this.state.gameStart}
            onClick={this.endHandler}
            className="btn-text"
            id="stop"
            type="submit"
          >
            Stop
          </button>
        </div>
        {this.state.showGameOver && (
          <GameOverOverlay finalScore={this.state.score} />
        )}
      </div>
    );
  }
}

export default App;