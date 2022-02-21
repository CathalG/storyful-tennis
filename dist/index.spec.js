"use strict";

var _index = require("./index");

// Test Jest is up and running
describe("Tests", () => {
  test("Jest is up and running", () => {
    expect(1).toBe(1);
  });
}); // Initial score tests

describe("Basic Scoring Tests", () => {
  test("Player 1 scores point", () => {
    (0, _index.startGame)();
    (0, _index.playerOneScores)();
    expect((0, _index.getScore)()).toBe("15 - Love");
  });
  test("Player 1 scores 3 points", () => {
    (0, _index.startGame)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    expect((0, _index.getScore)()).toBe("40 - Love");
  });
  test("(40-40 without Deuce) Scoring Test", () => {
    (0, _index.startGame)();
    (0, _index.playerTwoScores)();
    (0, _index.playerTwoScores)();
    (0, _index.playerTwoScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    expect((0, _index.getScore)()).toBe("40 - 40");
  });
}); // Test basic win condition

describe("Testing basic win condition (First to Four)", () => {
  test("Player One scores 4 times (Wins Game)", () => {
    (0, _index.startGame)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    expect((0, _index.getScore)()).toBe("Game - Player One");
  });
  test("Player Two scores 4 times (Wins Game)", () => {
    (0, _index.startGame)();
    (0, _index.playerTwoScores)();
    (0, _index.playerTwoScores)();
    (0, _index.playerTwoScores)();
    (0, _index.playerTwoScores)();
    expect((0, _index.getScore)()).toBe("Game - Player Two");
  });
}); // Test error logging if player attempts to score once game is finished

describe("Testing error ", () => {
  test("Player One scores 5 times (One more than required to Win Game)", () => {
    (0, _index.startGame)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    expect((0, _index.getScore)()).toBe("Game is over.");
  });
});