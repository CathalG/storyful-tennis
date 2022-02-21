"use strict";

var _index = require("./index");

// Test Jest is up and running
describe("Jest test", () => {
  test("Jest is up and running", () => {
    expect(1).toBe(1);
  });
}); // Initial score tests

describe("Basic Scoring Tests", () => {
  test("Player One scores point", () => {
    (0, _index.startGame)();
    (0, _index.pointScored)("Player One");
    expect((0, _index.getScore)()).toBe("Fifteen - Love");
  });
  test("Player One scores 3 points", () => {
    (0, _index.startGame)();
    (0, _index.pointScored)("Player One");
    (0, _index.pointScored)("Player One");
    (0, _index.pointScored)("Player One");
    expect((0, _index.getScore)()).toBe("Forty - Love");
  });
}); // Test basic win condition

describe("Testing basic win condition (First to Four)", () => {
  test("Player One scores 4 times (Wins Game)", () => {
    (0, _index.startGame)();
    (0, _index.pointScored)("Player One");
    (0, _index.pointScored)("Player One");
    (0, _index.pointScored)("Player One");
    (0, _index.pointScored)("Player One");
    expect((0, _index.getScore)()).toBe("Game - Player One");
  });
  test("Player Two scores 4 times (Wins Game)", () => {
    (0, _index.startGame)();
    (0, _index.pointScored)("Player Two");
    (0, _index.pointScored)("Player Two");
    (0, _index.pointScored)("Player Two");
    (0, _index.pointScored)("Player Two");
    expect((0, _index.getScore)()).toBe("Game - Player Two");
  });
}); // Test error logging if player attempts to score once game is finished

describe("Testing error ", () => {
  test("Player One scores 5 times (One more than required to Win Game)", () => {
    (0, _index.startGame)();
    (0, _index.pointScored)("Player One");
    (0, _index.pointScored)("Player One");
    (0, _index.pointScored)("Player One");
    (0, _index.pointScored)("Player One");
    (0, _index.pointScored)("Player One");
    expect((0, _index.getScore)()).toBe("Game is over.");
  });
}); // Test Duece and Advantage functionality

describe("Test Duece and Advantage ", () => {
  test("Player One scores 3 times and Player Two scores 3 times.", () => {
    (0, _index.startGame)();
    (0, _index.pointScored)("Player One");
    ;
    (0, _index.pointScored)("Player One");
    ;
    (0, _index.pointScored)("Player One");
    ;
    (0, _index.pointScored)("Player Two");
    (0, _index.pointScored)("Player Two");
    (0, _index.pointScored)("Player Two");
    expect((0, _index.getScore)()).toBe("Deuce");
  });
  test("Player One scores 3 times and Player Two scores 4 times.", () => {
    (0, _index.startGame)();
    (0, _index.pointScored)("Player One");
    ;
    (0, _index.pointScored)("Player One");
    ;
    (0, _index.pointScored)("Player One");
    ;
    (0, _index.pointScored)("Player Two");
    (0, _index.pointScored)("Player Two");
    (0, _index.pointScored)("Player Two");
    (0, _index.pointScored)("Player Two");
    expect((0, _index.getScore)()).toBe("Advantage - Player Two");
  });
  test("Player One scores 3 times and Player Two scores 5 times.", () => {
    (0, _index.startGame)();
    (0, _index.pointScored)("Player One");
    ;
    (0, _index.pointScored)("Player One");
    ;
    (0, _index.pointScored)("Player One");
    ;
    (0, _index.pointScored)("Player Two");
    (0, _index.pointScored)("Player Two");
    (0, _index.pointScored)("Player Two");
    (0, _index.pointScored)("Player Two");
    (0, _index.pointScored)("Player Two");
    expect((0, _index.getScore)()).toBe("Game - Player Two");
  });
  test("Player One scores 3 times and Player Two scores 6 times.", () => {
    (0, _index.startGame)();
    (0, _index.pointScored)("Player One");
    ;
    (0, _index.pointScored)("Player One");
    ;
    (0, _index.pointScored)("Player One");
    ;
    (0, _index.pointScored)("Player Two");
    (0, _index.pointScored)("Player Two");
    (0, _index.pointScored)("Player Two");
    (0, _index.pointScored)("Player Two");
    (0, _index.pointScored)("Player Two");
    (0, _index.pointScored)("Player Two");
    expect((0, _index.getScore)()).toBe("Game is over.");
  });
});