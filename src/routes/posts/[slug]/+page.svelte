<script lang="ts">
	import Image from '$lib/components/image.svelte';
	import Markdown from '$lib/components/markdown.svelte';
	import Title from '$lib/components/Sidebar/Title.svelte';

	import type { PageData } from './$types';

	export let data: PageData;

	const imageOptions = {
		sizes: [{ width: 400, maxWidth: 400 }, { width: 640 }]
	};
</script>

<div class="px-8">
	<img src={data.image.src} alt="demo" width={data.image.width} height={data.image.height} />

	<Title>{data.title}</Title>
	<p class="font-serif text-sm">{data.description}</p>

	<hr class="border-2 border-stone-300 my-2" />

	{#if data.optional}
		<h3>{data.optional}</h3>
	{/if}

	<Markdown hast={data.body} {imageOptions} />
</div>
