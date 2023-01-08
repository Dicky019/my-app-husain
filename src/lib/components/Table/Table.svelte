<script>
	import TableItemBody from './TableItemBody.svelte';
	import { ref, onValue } from 'firebase/database';
	import { database } from '$lib/firebase/firebase_config';
	import { tanaman } from '$lib/stores/stores';

	const starTanamanRef = ref(database, '/');
	onValue(starTanamanRef, (snapshot) => {
		const data = snapshot.val();
		console.log(data.Pompa);
		console.log(data['Kelembapan Tanah']);
		tanaman.set({
			kelembapan: data['Kelembapan Tanah'],
			pompa: data['Pompa'] ? 'Aktif' : 'Tidak Aktif'
		});
	});

	let tanamanValue = {
		kelembapan: 40.3,
		pompa: 'aktif'
	};

	tanaman.subscribe((value) => {
		tanamanValue = value;
	});
</script>

<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
<link
	rel="stylesheet"
	href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
/>

<div class="flex flex-wrap ">
	<TableItemBody data={{ text: 'Nama', value: 'Husain', color: 'bg-red-500', icon: 'fa-user' }} />
	<TableItemBody
		data={{ text: 'Jenis Tanaman', value: 'Angrek', color: 'bg-green-500', icon: 'fa-leaf' }}
	/>
	<TableItemBody
		data={{
			text: 'Kelembapan',
			value: `${tanamanValue.kelembapan}`,
			color: 'bg-blue-500',
			icon: 'fa-percent'
		}}
	/>
	<TableItemBody
		data={{ text: 'Pompa', value: `${tanamanValue.pompa}`, color: 'bg-pink-500', icon: 'fa-water' }}
	/>
</div>
