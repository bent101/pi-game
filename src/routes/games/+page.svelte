<script lang="ts">
	import LabeledNumber from "$lib/LabeledNumber.svelte";
	import { games, type Game } from "$lib/stores";
	import { flip } from "svelte/animate";

	let showingPerfectGames = false;
	let sorting = false;
	const indexedGames = $games.map((game, i) => ({ ...game, id: i }));
	$: filteredGames = showingPerfectGames
		? indexedGames.filter((game) => game.mistakes === 0 && game.hints === 0)
		: indexedGames;
	$: sortedGames = sorting ? [...filteredGames].sort((a, b) => b.score - a.score) : filteredGames;
</script>

{#if $games.length === 0}
	<div class="flex flex-1 items-center justify-center">
		<div class="text-base font-extrabold uppercase tracking-wide text-fuchsia-800">
			Your game history will show up here
		</div>
	</div>
{:else}
	<div class="flex items-center justify-center gap-3 text-center">
		<label
			class="{showingPerfectGames
				? 'bg-fuchsia-800 text-[#14001a]'
				: 'text-fuchsia-800'} rounded-full border-2 border-fuchsia-800 px-3 py-2 text-base font-extrabold uppercase tracking-wide"
		>
			Show only perfect games
			<input type="checkbox" class="hidden" bind:checked={showingPerfectGames} />
		</label>
		<label
			class="{sorting
				? 'bg-fuchsia-800 text-[#14001a]'
				: 'text-fuchsia-800'} rounded-full border-2 border-fuchsia-800 px-4 py-2 text-base font-extrabold uppercase tracking-wide"
		>
			Sort by score
			<input type="checkbox" class="hidden" bind:checked={sorting} />
		</label>
	</div>
	<div class="mt-6 flex flex-wrap justify-center gap-4">
		{#each sortedGames as { score, hints, mistakes, id } (id)}
			<div animate:flip={{ duration: 300 }} class=" rounded-2xl bg-fuchsia-900/10 p-4">
				<LabeledNumber
					num={score}
					singular="{hints} hint{hints === 1 ? '' : 's'} • {mistakes} mistake{mistakes === 1
						? ''
						: 's'}"
				/>
			</div>
		{/each}
	</div>
{/if}
