<script lang="ts">
	import CustomCursor from '$lib/components/CustomCursor.svelte';
	import '../app.css';

	let { children } = $props();
	let mounted = $state(false);

	$effect(() => {
		mounted = true;

		return () => {
			mounted = false;
		};
	});
</script>

{#if mounted}
	<CustomCursor />
{/if}
{@render children()}
