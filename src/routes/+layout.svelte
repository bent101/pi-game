<script lang="ts">
	import '../app.css';
	import Header from './Header.svelte';
    import Footer from './Footer.svelte';
</script>

<header>
	<Header />
</header>

<main class="flex-auto">
	<slot />
</main>

<footer>
    <Footer />
</footer>

<style lang="postcss">
	:global(html) {
		@apply bg-[#14001a];
	}
    :global(.glow) {
		text-shadow: 0 0 5px;
	}
</style>
