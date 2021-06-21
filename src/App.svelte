<script>
	import WhatIDo from "./Components/WhatIDo.svelte";
	import WhereIveDoneIt from "./Components/WhereIveDoneIt.svelte";
	import HowIDoIt from "./Components/HowIDoIt.svelte";
	import Sidebar from "./Components/Sidebar.svelte";
	import HeaderBar from "./Components/HeaderBar.svelte";
	import { pageNumber } from "./store.js";

	let pageNumberValue;

	pageNumber.subscribe(val => {
		pageNumberValue = val;
	})
</script>

<div class="grid-row">
	<Sidebar />
	
	<main>
		<HeaderBar />
		{#if pageNumberValue === 1}
		<WhatIDo />
		{:else if pageNumberValue === 2}
		<WhereIveDoneIt />
		{:else if pageNumberValue === 3}
		<HowIDoIt />
		{:else}
		<WhatIDo />
		{/if}
	</main>
</div>
<style>
	.grid-row {
		height: 100vh;
		width: 100vw;
		display: grid;
		grid-template-columns: 210px auto;
	}
</style>