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
		cursor: pointer;
		color: white;
		background: none;
		border: 0.13em solid white;
		border-radius: 999px;
		padding: 0.5rem 2rem;
		margin: 0rem 0.5rem;
		flex-grow: 1;

		text-shadow: 0 0 0.5em white;
		box-shadow: inset 0 0 0.4em white, 0 0 0.4em white;
		transition: 150ms;
	}

	button:hover {
		box-shadow: inset 0 0 0.8em white, 0 0 0.8em white;
		opacity: 1;
	}

	#lang-button-wrapper {
		text-align: center;
	}
</style>
