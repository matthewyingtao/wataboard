<script>
	import { Howl } from 'howler';

	export let sound;

	const soundEl = new Howl({
		src: [`/sounds/${sound}`],
		preload: true
	});
</script>

<button
	on:click={() =>
		// @ts-ignore
		soundEl.play()}
>
	{sound}
</button>

<style>
	button {
		display: block;
		background: white;
		border: 1px solid #000b42;
		border-radius: 999px;
		padding: 0.5rem 1rem;
		flex-grow: 1;
	}
</style>
