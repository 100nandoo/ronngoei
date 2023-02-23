<script>
	import SimpleGallery from '$lib/components/SimpleGallery.svelte';
	import Title from '$lib/components/Sidebar/Title.svelte';

	/** @type {import('./$types').PageServerData} */
	export let data;

	let { images } = data;
	// console.log(images);
</script>

<div class="px-8">
	<Title>Photo Gallery</Title>
	<div class="pt-4" />
	<SimpleGallery galleryID="my-test-gallery" {images} />
</div>
