<script lang="ts">
	import LabeledNumber from "$lib/LabeledNumber.svelte";
import { games, type Game } from "../stats/stats";
</script>

{#each $games as { score, hints, mistakes }}
    <div class="flex">
        <LabeledNumber 
    </div>
{/each}