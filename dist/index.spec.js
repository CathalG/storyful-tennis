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


  // Initial score test
  describe("Basic Scoring Test", () => {
    test("Player 1 scores point", () => {
      startGame();
      playerOneScores();
      expect(getScore()).toBe("15 - Love");
    });
  });

  describe("Multiple Points Scoring Test", () => {
    test("Player 1 scores point", () => {
      startGame();
      playerOneScores();
      playerOneScores();
      playerOneScores();
      expect(getScore()).toBe("40 - Love");
    });
  });

  describe("(40-40 without Deuce) Scoring Test", () => {
    test("Player 1 scores point", () => {
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

