<script lang="ts">
	import LabeledNumber from "$lib/LabeledNumber.svelte";
	import { games, type Game } from "../stats/stats";
</script>

<div class=" h-fit w-min self-center ">
	{#each $games as { score, hints, mistakes }}
		<div class="flex items-center justify-center gap-8 rounded-3xl py-4 odd:bg-fuchsia-900/10">
			<LabeledNumber num={score} name="score" />
			<LabeledNumber num={hints} name="hints" />
			<LabeledNumber num={mistakes} name="mistakes" />
		</div>
	{/each}
</div>
