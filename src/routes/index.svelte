<script>
	import LangSelect from './../components/LangSelect.svelte';
	import SoundGrid from '../components/SoundGrid.svelte';
</script>

<main>
	<aside>
		<div>
			<h1>Wataboard</h1>
			<LangSelect />
		</div>
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
		color: rgb(255, 250, 203);
		text-shadow: 0 0 0.6em rgb(255, 243, 137), 0 0 1em rgb(255, 243, 137);
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
