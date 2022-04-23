<script>
	import SoundGrid from '../components/SoundGrid.svelte';
</script>

<main>
	<aside>
		<h1>Wataboard</h1>
		<SoundGrid />
	</aside>
	<img src="/watameSinging.png" alt="" />
</main>

<style>
	main {
		position: relative;
		padding: 3rem 1.5rem;
		display: grid;
		grid-template-columns: 1fr;
	}

	aside {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		max-width: 40rem;
		margin: auto;
	}

	h1 {
		text-align: center;
		font-size: 4rem;
	}

	img {
		display: none;
	}

	@media screen and (min-width: 50rem) {
		main {
			grid-template-columns: 3fr 1fr;
		}

		img {
			display: block;
			position: sticky;
			top: 3rem;
			width: 100%;
			min-width: 25rem;
		}
	}
</style>
