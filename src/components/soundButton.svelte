<script>
	import { Howl } from 'howler';

	export let sound;
	export let language;

	$: soundName = language == "EN" ? sound.en : sound.jp;

	const soundEl = new Howl({
		src: [`/sounds/${sound.file}`],
		preload: false
	});
</script>

<button
	on:click={() => {
		soundEl.play();
	}}
	on:mouseover={() => {
		soundEl.load();
	}}
	on:focus={() => {
		soundEl.load();
	}}
>
	{soundName}
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
