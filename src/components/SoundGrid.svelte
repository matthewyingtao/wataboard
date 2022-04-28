<script>
	import { lang } from './../store/store.js';
	import { sounds } from '../data/sounds.js';
	import SoundButton from './SoundButton.svelte';
</script>

{#each sounds as section}
	<section>
		<div class="heading">
			<img class="penlights" src="/penlights.png" alt="" />
			<h2>{$lang == 'EN' ? section.title.en : section.title.jp}</h2>
			<img class="penlights" src="/penlights.png" alt="" />
		</div>
		<div class="sound-grid">
			{#each section.sounds as sound}
				<SoundButton {sound} language={$lang} />
			{/each}
		</div>
	</section>
{/each}

<style>
	h2 {
		font-size: 2rem;
		margin-bottom: 1rem;
		color: rgba(255, 255, 255, 0.8);
		text-transform: uppercase;
		letter-spacing: 0.02em;
		text-shadow: 0 0 0.2em white, 0 0 1em white;
	}

	.heading {
		display: flex;
		gap: 1rem;
	}

	.penlights {
		height: 2.5rem;
	}

	.sound-grid {
		display: flex;
		flex-wrap: wrap;
		grid-gap: 1.5rem;
	}
</style>
