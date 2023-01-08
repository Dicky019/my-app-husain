import { writable } from 'svelte/store';

export const tanaman = writable({
	kelembapan: 40.3,
	pompa: "aktif"
});
