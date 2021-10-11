import { writable } from "svelte/store";

export const darkMode = writable("");
export const username = writable("");
export const date = writable("");
export const isLoading = writable(false);
export const dataProfile = writable();
