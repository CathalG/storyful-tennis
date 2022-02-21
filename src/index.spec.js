import {
  startGame,
  getScore,
  pointScored
} from "./index";

// Test Jest is up and running
  describe("Jest test", () => {
    test("Jest is up and running", () => {
      expect(1).toBe(1);
    });
  });

  // Initial score tests
  describe("Basic Scoring Tests", () => {
    
    test("Player One scores point", () => {
      startGame();
      pointScored("Player One");
      expect(getScore()).toBe("Fifteen - Love");
    });

    test("Player One scores 3 points", () => {
      startGame();
      pointScored("Player One");
      pointScored("Player One");
      pointScored("Player One");
      expect(getScore()).toBe("Forty - Love");
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


  // Test Duece and Advantage functionality
  describe("Test Duece and Advantage ", () => {


    test("Player One scores 3 times and Player Two scores 3 times.", () => {
      startGame();
      pointScored("Player One");;
      pointScored("Player One");;
      pointScored("Player One");;
      pointScored("Player Two");
      pointScored("Player Two");
      pointScored("Player Two");
      expect(getScore()).toBe("Deuce");
    });

    test("Player One scores 3 times and Player Two scores 4 times.", () => {
      startGame();
      pointScored("Player One");;
      pointScored("Player One");;
      pointScored("Player One");;
      pointScored("Player Two");
      pointScored("Player Two");
      pointScored("Player Two");
      pointScored("Player Two");
      expect(getScore()).toBe("Advantage - Player Two");
    });

    test("Player One scores 3 times and Player Two scores 5 times.", () => {
      startGame();
      pointScored("Player One");;
      pointScored("Player One");;
      pointScored("Player One");;
      pointScored("Player Two");
      pointScored("Player Two");
      pointScored("Player Two");
      pointScored("Player Two");
      pointScored("Player Two");
      expect(getScore()).toBe("Game - Player Two");
    });

    test("Player One scores 3 times and Player Two scores 6 times.", () => {
      startGame();
      pointScored("Player One");;
      pointScored("Player One");;
      pointScored("Player One");;
      pointScored("Player Two");
      pointScored("Player Two");
      pointScored("Player Two");
      pointScored("Player Two");
      pointScored("Player Two");
      pointScored("Player Two");
      expect(getScore()).toBe("Game is over.");
    });
  });