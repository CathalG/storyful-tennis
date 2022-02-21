//define game object
let game = { 
  complete : false, 
  error : '',
  score:[0,0],
  reset: function () {
      this.complete = false;
      this.error = '';
      this.score = [0,0];
  }
};

//Start new game (reset score, win and error status)
export function  startGame() {
    game.reset();
}

  //Player scores a point 
  export function pointScored(playerName) {
    // If game is over set error message and return
    if (game.complete == true) {
        game.error = "Game is over.";
        return;
    }
    //otherwise add score to players tally
    else{
      if(playerName == 'Player One') {
        game.score[0]++
      }

      else if(playerName == 'Player Two'){
        game.score[1]++;
      }
      getScore();
    }
  }

  //return current score as tennis score string
  export function getScore() {
    //if an error has been logged then return it
    if (game.error) return game.error;
    let scoreString;
    const playerOneScore = game.score[0];
    const playerTwoScore = game.score[1];
    const difference = Math.abs(playerOneScore - playerTwoScore);
   
    //if either player has a score greater than 3
    if (playerOneScore > 3 || playerTwoScore > 3) {
      const isPlayerOneUp = playerOneScore > playerTwoScore; //check who is ahead
      scoreString = getGameOver(difference, isPlayerOneUp);      //check if game is complete
      scoreString = !game.complete ? getAdvantage(difference, isPlayerOneUp) : scoreString; //if not game complete get advantage
    }

    //if both players have a score greater than 3 and they're equal 
    if (playerOneScore >= 3 && playerTwoScore >= 3 && difference === 0) {
      scoreString = "Deuce";
    }
    
    //if scoreString has been set return otherwise return score
    return scoreString ? scoreString: `${getScoreAsString(game.score[0])} - ${getScoreAsString(game.score[1])}`;

}

// Get game winner
function getGameOver(difference, isPlayerOneUp) {
  if (difference > 1) {
      game.complete = true;
      return isPlayerOneUp ? "Game - Player One" : "Game - Player Two";
  }
}

// get advantage player
function getAdvantage(difference, isPlayerOneUp) {
  if (difference === 1) {
    return isPlayerOneUp ? "Advantage - Player One" : "Advantage - Player Two";
  }
}

//return Individual score as corresponding tennis score string
  export function getScoreAsString(score) {
    switch (score) {
      case 0:
        return "Love";
      case 1:
        return "Fifteen";
      case 2:
        return "Thirty";
      case 3:
        return "Forty";
      case 4:
        return "Game";
    }
  }