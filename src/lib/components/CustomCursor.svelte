<script lang="ts">
	import { cursor } from '$lib/cursor.svelte';

	let scale = $state(1);

	let lastX = 0;
	let lastY = 0;
	let lastTime = performance.now();

	function handleMouseMove(event: MouseEvent) {
		const now = performance.now();
		const dx = event.clientX - lastX;
		const dy = event.clientY - lastY;
		const dt = now - lastTime;

		const distance = Math.sqrt(dx * dx + dy * dy);
		const speed = distance / dt;

		scale = Math.min(1 + speed * 0.5, 2);

		cursor.x = event.clientX;
		cursor.y = event.clientY;

		lastX = event.clientX;
		lastY = event.clientY;
		lastTime = now;
	}

	const relax = () => {
		scale = scale > 1 ? scale - 0.02 : 1;
		requestAnimationFrame(relax);
	};
	relax();
</script>

<svelte:window on:mousemove={handleMouseMove} />
<!-- <div -->
<!-- 	class="pointer-events-none fixed top-0 left-0 z-50 h-screen w-full shadow-[inset_10px_10px_100px_rgba(0,0,0,1)] select-none" -->
<!-- ></div> -->
<div
	class="pointer-events-none fixed inset-0 z-50 h-screen w-full animate-pulse bg-black/45 blur-3xl select-none"
	style="mask-image: radial-gradient(ellipse at calc({cursor.x}px) calc({cursor.y}px), rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,1) 100%);
         -webkit-mask-image: radial-gradient(ellipse at calc({cursor.x}px) calc({cursor.y}px), rgba(0,0,0,0) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,1) 100%);"
></div>
<div
	class="cursor-custom"
	style="
		top: {cursor.y}px;
		left: {cursor.x}px;
		transform: translate(-50%, -50%) scale({scale});
	"
></div>

<style>
    .cursor-custom {
        position: fixed;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        background: radial-gradient(circle at center, #ff79c6, #bd93f9);
        box-shadow: 0 0 10px #ff79c6,
        0 0 20px #bd93f9,
        0 0 30px #8be9fd;
        transition: transform 0.01s linear,
        opacity 0.01s linear;
        transform-origin: center;
        transform: translate(-50%, -50%);
        opacity: 0.9;
    }

    @media (max-width: 1024px) {
        .cursor-custom {
            display: none;
        }
    }
</style>
