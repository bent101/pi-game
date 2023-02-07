<script lang="ts">
	import { highScore, gamesPlayed, keysPressed, mistakesMade } from "./stats.js";
	import LabeledNumber from "$lib/LabeledNumber.svelte";
</script>

<div class="flex h-full flex-1 items-center justify-center">
	<LabeledNumber name={"high score"} num={$highScore} />
	<LabeledNumber name={"games played"} num={$gamesPlayed} />
	<LabeledNumber name={"keys pressed"} num={$keysPressed} />
	<LabeledNumber name={"mistakes made"} num={$mistakesMade} />
</div>
