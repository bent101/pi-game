<script lang="ts">
	import KeyboardShortcut from "$lib/KeyboardShortcut.svelte";
	import LabeledNumber from "$lib/LabeledNumber.svelte";
	import {
		highScore,
		gamesPlayed,
		keysPressed,
		mistakesMade,
		games,
		curGame,
		firstTime
	} from "../lib/stores";

	let pi =
		"3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268";
	$: i = $curGame.score + 4;
	$: typedDigits = pi.slice(0, i);
	$: hintDigits = pi.slice(i, i + 15);
	let blinking = true;
	let cursorBlinkingTimeout: NodeJS.Timeout;
	let redBlinkingTimeout: NodeJS.Timeout;
	let showingHint = false;
	let playing = !$firstTime;
	$firstTime = false;
	let blinkingRed = false;

	const restartGame = () => {
		$games = [{ ...$curGame }, ...$games];
		$highScore = Math.max($highScore, $curGame.score);
		$curGame = { score: 0, hints: 0, mistakes: 0 };
		console.log($curGame);
		$gamesPlayed++;
		blinkingRed = false;
		showingHint = false;
	};

	const keydown = (e: KeyboardEvent) => {
		if (playing) {
			if (e.key === "e") {
				if (showingHint) {
					showingHint = false;
				} else {
					showingHint = true;
					$curGame.hints++;
				}
				return;
			}
			if (e.key === "Enter" && $curGame.score > 0) {
				restartGame();
				return;
			}
		}

		if (e.metaKey || isNaN(+e.key) || e.key < "0" || e.key > "9") return;

		$keysPressed++;
		playing = true;
		showingHint = false;
		if (pi[i] === e.key) {
			$curGame.score++;
		} else {
			$curGame.mistakes++;
			$mistakesMade++;
			blinkingRed = true;
			clearTimeout(redBlinkingTimeout);
			redBlinkingTimeout = setTimeout(() => {
				blinkingRed = false;
			}, 800);
		}

		blinking = false;
		clearTimeout(cursorBlinkingTimeout);
		cursorBlinkingTimeout = setTimeout(() => {
			blinking = true;
		}, 2000);
	};
</script>

<svelte:body on:keydown={keydown} />

<div
	class:opacity-0={!playing}
	class="flex flex-1 basis-0 items-center justify-center gap-24 transition-opacity duration-150"
>
	<LabeledNumber
		num={$curGame.score}
		singular="{$curGame.hints} hint{$curGame.hints === 1
			? ''
			: 's'} • {$curGame.mistakes} mistake{$curGame.mistakes === 1 ? '' : 's'}"
	/>
</div>

<div class="flex">
	<div
		class:flash-red={blinkingRed}
		class="glow text-bold fade-l rtl flex-1 overflow-hidden font-mono text-5xl tracking-widest text-fuchsia-300"
	>
		{typedDigits}
	</div>
	<div class:blinking class="w-1 origin-center rounded-full bg-fuchsia-300 opacity-0" />
	<div
		class:opacity-0={!showingHint}
		class="glow text-bold fade-r flex-1 overflow-hidden font-mono text-5xl tracking-widest text-fuchsia-300/10"
	>
		{hintDigits}
	</div>
</div>

<div
	class:opacity-0={!playing}
	class="flex flex-1 basis-0 items-center justify-center gap-16 transition-opacity delay-100 duration-150"
>
	<KeyboardShortcut key={"e"} action={"get a hint"} />
	<KeyboardShortcut key={"Enter"} action={"finish"} />
</div>

<style lang="postcss">
	.fade-r {
		-webkit-mask-image: -webkit-gradient(
			linear,
			left top,
			right top,
			from(rgba(0, 0, 0, 1)),
			to(rgba(0, 0, 0, 0))
		);
	}
	.fade-l {
		-webkit-mask-image: -webkit-gradient(
			linear,
			right top,
			left top,
			from(rgba(0, 0, 0, 1)),
			to(rgba(0, 0, 0, 0))
		);
	}

	@keyframes flash-red {
		50% {
			@apply text-red-500;
		}
	}

	.flash-red {
		animation: flash-red 0.4s infinite;
	}

	@keyframes blinking {
		50% {
			opacity: 1;
			scale: 1 1;
		}
		0%,
		100% {
			opacity: 0;
			scale: 1 0.8;
		}
	}

	.blinking {
		animation: blinking 1.3s infinite;
	}

	.rtl {
		direction: rtl;
	}
</style>
