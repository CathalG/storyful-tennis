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
} //return individual score as corresponding tennis score 


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
  }
} //return current score as tennis score


function getScore() {
  return `${getScoreAsString(score[0])} - ${getScoreAsString(score[1])}`;
}