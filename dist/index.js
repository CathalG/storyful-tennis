"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScore = getScore;
exports.getScoreAsString = getScoreAsString;
exports.playerOneScores = playerOneScores;
exports.playerTwoScores = playerTwoScores;
exports.startGame = startGame;
let score;
let gameComplete;
let error; //Start new game (reset score and win condition)

function startGame() {
  score = [0, 0];
  gameComplete = false;
  error = false;
} //Player one scores a point 


function playerOneScores() {
  // If game is over set error message and break
  if (gameComplete === true) {
    error = "Game is over.";
    return;
  }

  score[0]++;
  getScore();
} //Player Two scores a point


function playerTwoScores() {
  // If game is over set error message and break
  if (gameComplete === true) {
    error = "Game is over.";
    return;
  }

  score[1]++;
  getScore();
} //return individual score as corresponding tennis score string


function getScoreAsString(score) {
  switch (score) {
    case 0:
      return "Love";

    case 1:
      return "15";

    case 2:
      return "30";

    case 3:
      return "40";

    case 4:
      return "Game";
  }
} //return current score as tennis score string


function getScore() {
  //if an error has been logged then return it
  if (error) return error;
  const playerOneScore = getScoreAsString(score[0]);
  const playerTwoScore = getScoreAsString(score[1]); // Player one has won

  if (playerOneScore === "Game") {
    gameComplete = true;
    return "Game - Player One";
  } // Player two has won
  else if (playerTwoScore === "Game") {
    gameComplete = true;
    return "Game - Player Two";
  } // game is in progress | return current score
  else {
    return `${getScoreAsString(score[0])} - ${getScoreAsString(score[1])}`;
  }
}