<script>
	import WhatIDo from "./Components/WhatIDo.svelte";
	import WhereIveDoneIt from "./Components/WhereIveDoneIt.svelte";
	import HowIDoIt from "./Components/HowIDoIt.svelte";
	import Sidebar from "./Components/Sidebar.svelte";
	import HeaderBar from "./Components/HeaderBar.svelte";
	import MobileMenuModal from "./Components/MobileMenuModal.svelte";
	import { pageNumber, showMobileMenuModal } from "./store.js";

	let pageNumberValue;
	let showMobileMenuModalValue;

	setInterval(() => {
		if(showMobileMenuModalValue) {
			document.getElementsByTagName("body")[0].style.overflowY = "hidden";
			window.scrollTo(0,0)
		} else {
			document.getElementsByTagName("body")[0].style.overflowY = "";
		}
	}, 100)

	pageNumber.subscribe(val => {
		pageNumberValue = val;
	})

	showMobileMenuModal.subscribe(val => {
		showMobileMenuModalValue = val;
	})
</script>

<div class="grid-row">
	<div class="sidebar-wrapper">
		<Sidebar />
	</div>
	
	<main>
			{#if showMobileMenuModalValue}
			<MobileMenuModal />
			{/if}

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
		grid-template-columns: 230px auto;
	}

	@media only screen and (max-width: 970px) {
		.sidebar-wrapper {
			display: none;
		}

		.grid-row {
			grid-template-columns: auto;
		}
	}
</style>