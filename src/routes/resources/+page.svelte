<script>
	import Title from '$lib/components/Sidebar/Title.svelte';
	import Post from '$lib/components/Resource.svelte';
	/** @type {import('./$types').PageServerData} */
	export let data;

	let { result } = data;
	console.log(result);
</script>

<div class="px-8">
	<Title>Resources</Title>

	{#each result as resource}
		<Post {resource} />
	{/each}
</div>
