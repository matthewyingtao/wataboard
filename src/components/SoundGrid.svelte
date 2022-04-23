<script>
	import { sounds } from '../data/sounds.js';
	import SoundButton from './SoundButton.svelte';

	let language = "EN";

	function changeLang(newLang) {
		language = newLang;
	}
</script>

<div id="lang-button-wrapper">
	<button on:click={() => changeLang("JP")}>JP</button>
	<button on:click={() => changeLang("EN")}>EN</button>
</div>
{#each sounds as section}
	<section>
		<h2>{section.title}</h2>
		<div class="sound-grid">
			{#each section.sounds as sound}
				<SoundButton {sound} {language}/>
			{/each}
		</div>
	</section>
{/each}

<style>
	h2 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}

	button {
		display: inline-block;
		background: white;
		border: 1px solid #000b42;
		border-radius: 999px;
		padding: 0.5rem 2rem;
		margin: 0rem 0.5rem;
		flex-grow: 1;
	}

	.sound-grid {
		display: flex;
		flex-wrap: wrap;
		grid-gap: 1rem;
	}

	#lang-button-wrapper {
		text-align: center;
	}
</style>
