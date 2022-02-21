import {
  startGame,
  getScore,
  pointScored
  
} from "./index";

// Test Jest is up and running
describe("Tests", () => {
    test("Jest is up and running", () => {
      expect(1).toBe(1);
    });
  });


  // Initial score tests
  describe("Basic Scoring Tests", () => {
    
    test("Player One scores point", () => {
      startGame();
      pointScored("Player One");
      expect(getScore()).toBe("15 - Love");
    });

    test("Player One scores 3 points", () => {
      startGame();
      pointScored("Player One");
      pointScored("Player One");
      pointScored("Player One");
      expect(getScore()).toBe("40 - Love");
    });

    test("(40-40 without Deuce) Scoring Test", () => {
      startGame();
      pointScored("Player Two");
      pointScored("Player Two");
      pointScored("Player Two");
      pointScored("Player One");
      pointScored("Player One");
      pointScored("Player One");
      expect(getScore()).toBe("40 - 40");
    });
  });

  // Test basic win condition
  describe("Testing basic win condition (First to Four)", () => {
    test("Player One scores 4 times (Wins Game)", () => {
      startGame();
      pointScored("Player One");
      pointScored("Player One");
      pointScored("Player One");
      pointScored("Player One");
      expect(getScore()).toBe("Game - Player One");
    });

    test("Player Two scores 4 times (Wins Game)", () => {
      startGame();
      pointScored("Player Two");
      pointScored("Player Two");
      pointScored("Player Two");
      pointScored("Player Two");
      expect(getScore()).toBe("Game - Player Two");
    });
  });

  // Test error logging if player attempts to score once game is finished
  describe("Testing error ", () => {
    test("Player One scores 5 times (One more than required to Win Game)", () => {
      startGame();
      pointScored("Player One");
      pointScored("Player One");
      pointScored("Player One");
      pointScored("Player One");
      pointScored("Player One");
      expect(getScore()).toBe("Game is over.");
    });
  });
