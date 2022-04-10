<script>
	import { sounds } from '../data/sounds.js';
	import SoundButton from '../components/soundButton.svelte';
</script>

<main>
	<h1>Wataboard</h1>

	<div class="sound-grid">
		{#each sounds as sound}
			<SoundButton {sound} />
		{/each}
	</div>
</main>

<style>
	main {
		max-width: 55rem;
		margin: 2rem auto;
	}

	h1 {
		text-align: center;
		margin-bottom: 2rem;
	}

	.sound-grid {
		display: flex;
		flex-wrap: wrap;
		grid-gap: 1rem;
	}
</style>
