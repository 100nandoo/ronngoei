<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import HeaderMobile from '$lib/components/HeaderMobile.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import { navigating } from '$app/stores';
	import { Pulse } from 'svelte-loading-spinners';
	import Color, { primary } from '../lib/constants/Color.svelte';
	import '../app.css';
</script>

<Header />
<HeaderMobile />
<div class="grid-cols-1 flex flex-col-reverse xl:flex-row lg:grid-cols-3 xl:mx-28">
	<div class="basis-1/3">
		<Sidebar />
	</div>
	<div class="basis-2/3">
		{#if $navigating}
			<div class="w-full place-items-center grid h-screen">
				<Pulse size="60" color={primary} unit="px" duration="1s" />
			</div>
		{:else}
			<slot />
		{/if}
	</div>
</div>
<Footer />
