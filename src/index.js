
let game = { 
  complete : false, 
  error : '',
  score:[],
  reset: function () {
      this.complete = false;
      this.error = '';
      this.score = [0,0];
  }
};

//Start new game (reset score and win condition)
export function  startGame() {
    game.reset();
}

  //Player scores a point 
  export function pointScored(playerName) {
    // If game is over set error message and break
    if ( game.complete === true) {
        game.error = "Game is over.";
        return;
    }
    if(playerName == 'Player One') {
      game.score[0]++
    }

    else if(playerName == 'Player Two'){
      game.score[1]++;
    }
    getScore();
  }


  //return individual score as corresponding tennis score string
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
      case 4:
        return "Game";
    }
  }

  //return current score as tennis score string
  export function getScore() {

    //if an error has been logged then return it
    if (game.error) return game.error;

    const playerOneScore = getScoreAsString(game.score[0]);
    const playerTwoScore = getScoreAsString(game.score[1]);

    // Player one has won
    if (playerOneScore === "Game") {
        game.complete = true;
        return "Game - Player One";
      }
    // Player two has won
    else if (playerTwoScore === "Game") {
        game.complete = true;
        return "Game - Player Two";
    }
    // game is in progress | return current score
    else{
        return `${getScoreAsString(game.score[0])} - ${getScoreAsString(game.score[1])}`;
    }
}