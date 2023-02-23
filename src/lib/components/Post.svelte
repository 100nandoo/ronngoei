<script>
	export let post;
</script>

<div
	class="card card-bordered lg:card-side bg-base-100 shadow-xl my-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:bg-stone-200 duration-300"
>
	<figure>
		<img src={post.meta.image} alt="post image" class="lg:pr-8 lg:w-60" />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{post.meta.title}</h2>
		<p class="font-serif text-sm">{post.meta.description}</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary"><a href={post.path}>Read More</a></button>
		</div>
	</div>
</div>
