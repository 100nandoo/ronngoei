<script>
	import Fa from 'svelte-fa';
	import { faHome } from '@fortawesome/free-solid-svg-icons';
</script>

<div class="navbar hidden lg:flex xl:px-28">
	<div class="flex-1">
		<a class="btn btn-ghost" href="/" aria-label="Burger menu"> <Fa icon={faHome} /> </a>
	</div>
	<ul class="menu menu-horizontal px-1 font-menu font-medium">
		<li><a href="/research" class="hover-underline-animation">Research</a></li>
		<li><a href="/publications" class="hover-underline-animation">Publications</a></li>
		<li>
			<a href="/teaching_mentoring" class="hover-underline-animation">Teaching & Mentoring</a>
		</li>
		<li><a href="/engagement" class="hover-underline-animation">Engagement</a></li>
		<li><a href="/collaborators" class="hover-underline-animation">Collaborators</a></li>
		<li><a href="/resources" class="hover-underline-animation">Resources</a></li>
		<li><a href="/photo_gallery" class="hover-underline-animation">Photo Gallery</a></li>
	</ul>
</div>

<style>
	.hover-underline-animation {
		position: relative;
		text-decoration: none;
	}

	.hover-underline-animation::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #000;
		transform-origin: bottom right;
		transition: transform 0.25s ease-out;
	}

	.hover-underline-animation:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
</style>
