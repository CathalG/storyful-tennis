
let score;


//Start new game (reset score and win condition)
export function  startGame() {
    score = [0, 0];
}

  //Player one scores a point 
  export function playerOneScores() {
    score[0]++;
  }
  
  //Player Two scores a point
  export function playerTwoScores() {
    score[1]++;
  }

  //return individual score as corresponding tennis score 
  export function getScoreAsString(score) {
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
  }

  //return current score as tennis score
  export function getScore() {
    return `${getScoreAsString(score[0])} - ${getScoreAsString(score[1])}`;
  }