<script lang="ts">
	import "../app.css";
	import Header from "./Header.svelte";
	import Footer from "./Footer.svelte";
</script>

<header>
	<Header />
</header>

<main class="flex w-full max-w-screen-lg flex-1 flex-col ">
	<slot />
</main>

<footer>
	<Footer />
</footer>

<style lang="postcss">
	:global(html) {
		@apply bg-[hsl(286,100%,6%)];
	}
	:global(.glow) {
		text-shadow: 0 0 5px;
	}
	:global(*) {
		user-select: none;
	}
</style>
