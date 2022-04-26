<script>
	import { changeLang } from '../store/store';
</script>

<div id="lang-button-wrapper">
	<button on:click={() => changeLang('JP')}>JP</button>
	<button on:click={() => changeLang('EN')}>EN</button>
</div>

<style>
	button {
		display: inline-block;
		background: white;
		border: 1px solid #000b42;
		border-radius: 999px;
		padding: 0.5rem 2rem;
		margin: 0rem 0.5rem;
		flex-grow: 1;
	}

	#lang-button-wrapper {
		text-align: center;
	}
</style>
