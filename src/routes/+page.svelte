<script>
	import Title from '$lib/components/Sidebar/Title.svelte';
	/** @type {import('./$types').PageServerData} */
	export let data;

	let { result } = data;
	console.log(result);
</script>

<div class="px-8">
	<Title>Posts</Title>

	{#each result as post}
		<a href={post.path}>
			<p>{post.meta.title}</p>
		</a>
	{/each}
</div>
