<script lang="ts">
	export let num = 0;
	export let singular = "";
	export let plural = "";
</script>

<div class="w-56">
	<div class="overflow-hidden pb-2 text-center font-mono text-7xl text-fuchsia-600">
		{num}
	</div>
	<div class="text-center text-base font-extrabold uppercase tracking-wide text-fuchsia-800/75">
		{num === 1 || plural === "" ? singular : plural}
	</div>
</div>
