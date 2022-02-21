"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScore = getScore;
exports.getScoreAsString = getScoreAsString;
exports.playerOneScores = playerOneScores;
exports.playerTwoScores = playerTwoScores;
exports.startGame = startGame;
let score; //Start new game (reset score and win condition)

function startGame() {
  score = [0, 0];
} //Player one scores a point 


function playerOneScores() {
  score[0]++;
} //Player Two scores a point


function playerTwoScores() {
  score[1]++;
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
  const playerOneScore = getScoreAsString(score[0]);
  const playerTwoScore = getScoreAsString(score[1]); // Player one has won

  if (playerOneScore === "Game") {
    return "Game - Player One";
  } // Player two has won
  else if (playerTwoScore === "Game") {
    return "Game - Player Two";
  } // game is in progress | return current score
  else {
    return `${getScoreAsString(score[0])} - ${getScoreAsString(score[1])}`;
  }
}