import { writable, type Writable } from "svelte/store";

export const createLocalStorageStore = <Type>(name: string, init: Type): Writable<Type> => {
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