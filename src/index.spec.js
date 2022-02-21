import {
  startGame,
  getScore,
  playerOneScores,
  playerTwoScores
  
} from "./index";

// Test Jest is up and running
describe("Tests", () => {
    test("Jest is up and running", () => {
      expect(1).toBe(1);
    });
  });


  // Initial score tests
  describe("Basic Scoring Tests", () => {
    
    test("Player 1 scores point", () => {
      startGame();
      playerOneScores();
      expect(getScore()).toBe("15 - Love");
    });

    test("Player 1 scores 3 points", () => {
      startGame();
      playerOneScores();
      playerOneScores();
      playerOneScores();
      expect(getScore()).toBe("40 - Love");
    });

    test("(40-40 without Deuce) Scoring Test", () => {
      startGame();
      playerTwoScores();
      playerTwoScores();
      playerTwoScores();
      playerOneScores();
      playerOneScores();
      playerOneScores();
      expect(getScore()).toBe("40 - 40");
    });
  });

  describe("Testing basic win condition (First to Four)", () => {
    test("Player One scores 4 times (Wins Game)", () => {
      startGame();
      playerOneScores();
      playerOneScores();
      playerOneScores();
      playerOneScores();
      expect(getScore()).toBe("Game - Player One");
    });

    test("Player Two scores 4 times (Wins Game)", () => {
      startGame();
      playerTwoScores();
      playerTwoScores();
      playerTwoScores();
      playerTwoScores();
      expect(getScore()).toBe("Game - Player Two");
    });
  });

