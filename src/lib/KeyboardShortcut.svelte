<script lang="ts">
	export let key = "";
	export let action = "";
</script>

<div>
	<span
		class="solid-shadow mr-4 rounded-xl border-2 border-fuchsia-600 px-4 py-2 font-mono font-extrabold text-base uppercase text-fuchsia-600"
	>
		{key}
	</span>

	<span class="text-base font-extrabold uppercase tracking-wide text-fuchsia-800/75">
		{action}
	</span>

	<style>
		.solid-shadow {
			box-shadow: 2px 2px;
		}
		span {
			display: inline;
		}
	</style>
</div>
