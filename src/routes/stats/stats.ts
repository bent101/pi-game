import { writable, type Writable } from "svelte/store";

// makes a number store that starts at 0 and syncs with `localStorage`
const createLocalStorageStore = (name: string): Writable<number> => {
    const init = +(localStorage.getItem(name) ?? '0');
	const store = writable(init);
	store.subscribe((value) => {
		localStorage.setItem(name, String(value));
	});

	return store;
};

export const highScore = createLocalStorageStore('highScore');
export const gamesPlayed = createLocalStorageStore('gamesPlayed');
export const keysPressed = createLocalStorageStore('keysPressed');
export const mistakesMade = createLocalStorageStore('mistakesMade');
