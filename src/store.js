import { writable } from "svelte/store";

export const pageNumber = writable(1);

export const showMobileMenuModal = writable(true);