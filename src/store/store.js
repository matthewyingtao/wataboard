import { writable } from 'svelte/store';

export const lang = writable('EN');

export const changeLang = (newLang) => {
	lang.update(() => {
		return newLang;
	});
};
