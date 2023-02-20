<script>
	import Fa from 'svelte-fa';
	import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
	let visible = false;
</script>

<div class="lg:hidden">
	<div class="navbar">
		<button class="btn btn-ghost" aria-label="Burger menu" on:click={() => (visible = !visible)}>
			<Fa icon={faBars} />
		</button>
	</div>
	{#if visible}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="p-2">
			<ul class="drawer-side font-mono" on:click={() => (visible = !visible)}>
				<li><a href="/">Posts</a></li>
				<li><a href="/research">Research</a></li>
				<li><a href="/publications">Publications</a></li>
				<li><a href="/teaching_mentoring">Teaching & Mentoring</a></li>
				<li><a href="/engagement">Engagement</a></li>
				<li><a href="/collaborators">Collaborators</a></li>
				<li><a href="/resources">Resources</a></li>
				<li><a href="/photo_gallery">Photo Gallery</a></li>
			</ul>
		</div>
	{/if}
</div>

<style>
	li {
		padding: 0.5rem;
	}
</style>
