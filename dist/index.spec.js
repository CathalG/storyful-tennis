"use strict";

var _index = require("./index");

// Test Jest is up and running
describe("Tests", () => {
  test("Jest is up and running", () => {
    expect(1).toBe(1);
  });
}); // Initial score test

describe("Basic Scoring Test", () => {
  test("Player 1 scores point", () => {
    (0, _index.startGame)();
    (0, _index.playerOneScores)();
    expect((0, _index.getScore)()).toBe("15 - Love");
  });
});
describe("Multiple Points Scoring Test", () => {
  test("Player 1 scores point", () => {
    (0, _index.startGame)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    expect((0, _index.getScore)()).toBe("40 - Love");
  });
});
describe("(40-40 without Deuce) Scoring Test", () => {
  test("Player 1 scores point", () => {
    (0, _index.startGame)();
    (0, _index.playerTwoScores)();
    (0, _index.playerTwoScores)();
    (0, _index.playerTwoScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    (0, _index.playerOneScores)();
    expect((0, _index.getScore)()).toBe("40 - 40");
  });
});