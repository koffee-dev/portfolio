<script>
	import { cursor } from '$lib/cursor.svelte';
</script>

<div
	class="grid-background relative z-10 min-h-screen w-full overflow-hidden px-4 py-20 md:px-48 md:py-40"
	style={`background-position: ${-cursor.x / 300}% ${-cursor.y / 300}%;`}
>
	<div
		class="absolute top-0 -left-40 -z-10 aspect-square h-[250px] w-[250px] rounded-full bg-pink-400/30 blur-3xl"
		style={`translate: ${cursor.x / 30}px ${cursor.y / 30}px;`}
	></div>
	<div
		class="absolute -right-40 bottom-0 -z-10 aspect-square h-[1000px] w-[1000px] rounded-full bg-blue-400/8 blur-3xl"
		style={`translate: ${-cursor.x / 10}px ${-cursor.y / 10}px;`}
	></div>

	<div class="grid text-center md:grid-cols-2 md:text-start">
		<div class="md:text-md card flex flex-col gap-3 text-sm md:w-[700px]">
			<h3 class="text-3xl opacity-50">koffee-dev</h3>
			<p class="op mt-6 text-2xl font-bold">Mobile App Developer</p>
			<p>
				I work with <b>React Native</b>, <b>Kotlin</b> and
				<b>Flutter</b> to build mobile apps. Currently working as a freelancer.
				<b>Located in US.</b>
			</p>
			<p>Some projects I've worked on:</p>
			<ul class="list-inside list-disc opacity-80">
				<li>Adoption app for animal lovers.</li>
				<li>AI-powered planning app.</li>
				<li>German learning app to help me learn faster.</li>
			</ul>
			<div class="mt-4 flex justify-center gap-4 md:justify-start">
				<a href="mailto:koffee.dev@proton.me" class="btn btn-primary w-fit">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler icons-tabler-outline icon-tabler-mail"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
						/><path d="M3 7l9 6l9 -6" /></svg
					>
					Contact
				</a>
				<a href="https://github.com/koffee-dev" class="btn btn-secondary w-fit">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
						><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
							d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
						/></svg
					>
					GitHub
				</a>
			</div>
		</div>
		<div class="px-20 py-10 transition-all duration-200 hover:grayscale md:py-0">
			<img
				alt="#"
				src="/frog.webp"
				width="500"
				height="500"
				class="pointer-events-none scale-x-[-1] select-none"
				style={`translate: ${cursor.x / 100}px ${cursor.y / 30}px;`}
			/>
		</div>
	</div>
	<h3 class="my-6 pt-2 text-2xl font-bold">Projects</h3>
	<div class="z-50 grid w-full gap-5 md:grid-cols-3">
		<div
			class="flex items-center justify-between rounded-md border-1 border-white/20 bg-white/10 px-8 py-6 backdrop-blur-xs transition duration-200 hover:border-white/30 hover:bg-white/20"
		>
			<div class="flex flex-col gap-3">
				<b>Adoption App</b>
				<p class="badge badge-outline badge-secondary">Kotlin</p>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
				><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
					d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
				/></svg
			>
		</div>
		<div
			class="flex items-center justify-between rounded-md border-1 border-white/20 bg-white/10 px-8 py-6 backdrop-blur-xs transition duration-200 hover:border-white/30 hover:bg-white/20"
		>
			<div class="flex flex-col gap-3">
				<b>AI-Powered Planning App</b>
				<p class="badge badge-outline badge-accent">React Native</p>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
				><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
					d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
				/></svg
			>
		</div>
		<div
			class="flex items-center justify-between rounded-md border-1 border-white/20 bg-white/10 px-8 py-6 backdrop-blur-xs transition duration-200 hover:border-white/30 hover:bg-white/20"
		>
			<div class="flex flex-col gap-3">
				<b>Learn German</b>
				<p class="badge badge-outline badge-primary">Flutter</p>
			</div>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
				><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path
					d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
				/></svg
			>
		</div>
	</div>
</div>
