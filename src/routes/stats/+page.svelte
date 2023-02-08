<script lang="ts">
	import { highScore, gamesPlayed, keysPressed, mistakesMade } from "../../lib/stores";
	import LabeledNumber from "$lib/LabeledNumber.svelte";
</script>

<div class=" mt-56 flex flex-wrap justify-center gap-4">
	<LabeledNumber singular="high score" plural="high score" num={$highScore} />
	<LabeledNumber singular="game played" plural="games played" num={$gamesPlayed} />
	<LabeledNumber singular="key pressed" plural="keys pressed" num={$keysPressed} />
	<LabeledNumber singular="mistake made" plural="mistakes made" num={$mistakesMade} />
</div>
