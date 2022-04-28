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
		background: linear-gradient(to top, hsl(57, 90%, 75%), hsl(57, 100%, 90%));
		border: none;
		border-radius: 999px;
		padding: 0.5rem 2rem;
		box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.6);
		flex-grow: 1;
		transition: transform 150ms ease-out;
	}

	button::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 999px;
		box-shadow: 0 0 1rem rgba(255, 255, 255, 0.6);
		opacity: 0;
		transition: opacity 150ms ease-out;
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

	button:hover::after {
		opacity: 1;
	}

	button:active {
		transition: transform 50ms ease-out;
		transform: translateY(2px);
	}
</style>
