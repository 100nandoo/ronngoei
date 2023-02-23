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
	<Title>{data.title}</Title>
	<h2>{data.description}</h2>
	{#if data.optional}
		<h3>{data.optional}</h3>
	{/if}

	<img src={data.image.src} alt="demo" width={data.image.width} height={data.image.height} />

	<Markdown hast={data.body} {imageOptions} />
</div>
