import { writable, type Writable } from "svelte/store";

const createLocalStorageStore = <Type>(name: string, init: Type): Writable<Type> => {
    let val = init;
	if(localStorage.getItem(name)) {
		val = JSON.parse(localStorage.getItem(name) ?? "{}");
	}
	const store = writable(val);
	store.subscribe((value) => {
		localStorage.setItem(name, JSON.stringify(value));
	});

	return store;
};


export const highScore = createLocalStorageStore('highScore', 0);
export const gamesPlayed = createLocalStorageStore('gamesPlayed', 0);
export const keysPressed = createLocalStorageStore('keysPressed', 0);
export const mistakesMade = createLocalStorageStore('mistakesMade', 0);

export type Game = {
	score: number;
	hints: number;
	mistakes: number;
}
export const games = createLocalStorageStore<Game[]>('games', []);