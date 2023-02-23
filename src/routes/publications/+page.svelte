<script lang="ts">
	import Title from '$lib/components/Sidebar/Title.svelte';
	/** @type {import('./$types').PageServerData} */
	export let data;
	let { result } = data;
	let con = result[0].contributors;
	// console.log(con);
</script>

<div class="px-8">
	<Title>Publications</Title>
	{#each result as item}
		<a href={item['url']}>
			<div class="hover:bg-stone-100 mb-2 card card-bordered shadow-md p-4 group">
				<h2 class="text-lg font-semibold">{item['title']}</h2>
				{#if item.contributors.length > 0}
					<hr class="hidden group-hover:block border-2 border-stone-500 my-4" />
				{/if}
				<ul class="list-disc pl-4 hidden group-hover:block">
					{#each item.contributors as person}
						<li class="text-gray-600">{person}</li>
					{/each}
				</ul>
			</div>
		</a>
	{/each}
</div>
