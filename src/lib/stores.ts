import { createLocalStorageStore } from "$lib/utils";

export const highScore = createLocalStorageStore("highScore", 0);
export const gamesPlayed = createLocalStorageStore("gamesPlayed", 0);
export const keysPressed = createLocalStorageStore("keysPressed", 0);
export const mistakesMade = createLocalStorageStore("mistakesMade", 0);
export const firstTime = createLocalStorageStore("firstTime", true);

export type Game = {
	score: number;
	hints: number;
	mistakes: number;
};
export const games = createLocalStorageStore<Game[]>("games", []);
export const newGame = {
	score: 0,
	hints: 0,
	mistakes: 0
};
export const curGame = createLocalStorageStore<Game>("curGame", newGame);
