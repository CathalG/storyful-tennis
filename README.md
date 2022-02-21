# storyful-tennis
## Code Challenge for Storyful

**Problem:**
Tennis scoring

- Write a program that simulates a simple tennis game.
Scores from zero to three points are described as “love”, “fifteen”, “thirty”,
and “forty” respectively.
- If at least three points have been scored by each side and a player has one
more point than his opponent, the score of the game is “advantage” for
the player in the lead.
- If at least three points have been scored by each player, and the scores are
equal, the score is “deuce”.
- A game is won by the first player to have won at least four points in total
and at least two points more than the opponent.

**Examples:**
- Player A scored twice, Player B scored once: Thirty - Fifteen
- Player A scored 3 times, Player B didn’t score: Forty - Love
- Player A scored 3 times, Player B scored 3: Deuce
- Player A scored 5 times, Player B scored 4: Advantage Player A

## Installation & Usage
Clone the project:

`git clone git@github.com:CathalG/storyful-tennis.git`

Enter the root directory:

`cd storyful-tennis`

Install dependencies:

`npm install`

Run test scripts:

`npm run test`

## Tests
(Jest) 10 Tests can be found at src/index.spec.js
Feel free to add/modify any tests in this file

**Basic Scoring Tests**
- Player One scores point | expected response: Fifteen - Love
- Player One scores 3 points | expected response: Forty - Love

**Testing basic win condition (First to Four)**
- Player One scores 4 times (Wins Game) | expected response: Game - Player One
- Player Two scores 4 times (Wins Game) | expected response: Game - Player Two

**Testing error (Attempt to score once game is complete)**
- Player One scores 5 times (One more than required to Win Game) | expected response: Game is over.

**Test Duece and Advantage**
- Player One scores 3 times and Player Two scores 3 times. | expected response: Duece
- Player One scores 3 times and Player Two scores 4 times. | expected response: Advantage - Player Two
- Player One scores 3 times and Player Two scores 5 times | expected response: Game - Player Two
- Player One scores 3 times and Player Two scores 6 times. | expected response: Game is over.
