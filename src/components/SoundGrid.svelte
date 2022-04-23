<script>
	import { sounds } from '../data/sounds.js';
	import SoundButton from './SoundButton.svelte';
</script>

{#each sounds as section}
	<section>
		<h2>{section.title}</h2>
		<div class="sound-grid">
			{#each section.sounds as sound}
				<SoundButton {sound} />
			{/each}
		</div>
	</section>
{/each}

<style>
	h2 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	.sound-grid {
		display: flex;
		flex-wrap: wrap;
		grid-gap: 1rem;
	}
</style>
