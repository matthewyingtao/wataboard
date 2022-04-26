<script>
	import { Howl } from 'howler';

	export let sound;
	export let language;

	$: soundName = language == 'EN' ? sound.en : sound.jp;

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
	<img class="glasses" src="/watamePartyGlasses.png" alt="" />
</button>

<style>
	button {
		position: relative;
		display: block;
		cursor: pointer;
		background: linear-gradient(to bottom, #fff4d6, #ffe382);
		border: 1px solid #000b42;
		border-radius: 999px;
		padding: 0.5rem 2rem;
		flex-grow: 1;
		transition: transform 150ms ease-out;
	}

	.glasses {
		position: absolute;
		top: -0.25rem;
		right: -0.75rem;
		width: 3.25rem;
		transform: rotate(10deg);
		opacity: 0;
		transition: opacity 150ms ease-out;
	}

	button:hover {
		transform: translateY(-2px);
	}

	button:hover .glasses {
		opacity: 1;
	}

	button:active {
		transition: transform 50ms ease-out;
		transform: translateY(2px);
	}
</style>
