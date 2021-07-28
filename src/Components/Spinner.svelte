<main>
	<div class="outer-circle">
		<div class="pfp"></div>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	.outer-circle {
		width: 200px;
		height: 200px;
		margin: 0;
		padding: 3px;

		transition: 0.2s ease;
		animation-name: rotate-circle;
		animation-duration: 1.5s;
		animation-timing-function: ease;
		animation-iteration-count: infinite;

		filter: drop-shadow( -10px 0 8px rgba(0, 132, 255, 0.3));

		background: linear-gradient(to right, rgba(0, 132, 255, 1) 0%, transparent 25%);
		border-radius: 200%;
	}

	.pfp {
		width: 200px;
		height: 200px;

		background-color: #030303;
		
		border-radius: 50%;
	}

	@keyframes rotate-circle {
		from {
			transform: rotate(0)
		}
		to {
			transform: rotate(360deg)
		}
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>