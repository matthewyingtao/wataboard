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
		flex-grow: 1;
	}
</style>
