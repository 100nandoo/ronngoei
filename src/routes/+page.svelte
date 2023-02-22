<script>
	import Title from '$lib/components/Sidebar/Title.svelte';
	import Post from '$lib/components/Post.svelte';
	/** @type {import('./$types').PageServerData} */
	export let data;

	let { result } = data;
	console.log(result);
</script>

<div class="px-8">
	<Title>Posts</Title>

	{#each result as post}
		<Post {post} />
	{/each}
</div>
