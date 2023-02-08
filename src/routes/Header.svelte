<script lang="ts">
	import { page } from "$app/stores";
	const nav = [
		{ url: "/", name: "Play" },
		{ url: "/games", name: "Games" },
		{ url: "/stats", name: "Stats" }
	];
</script>

<div class="flex items-center justify-center">
	<nav
		class="flex h-16 w-fit items-center justify-center rounded-full bg-fuchsia-800 px-5 text-xl font-bold uppercase text-[#14001a] decoration-4 underline-offset-4"
	>
		{#each nav as { url, name }}
			<span class:underline={$page.url.pathname === url}>
				<a href={url} class="px-10 py-3">{name}</a>
			</span>
		{/each}
	</nav>
</div>
