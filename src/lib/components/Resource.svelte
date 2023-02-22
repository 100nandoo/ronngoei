<script>
	export let resource;
</script>

<div
	class="card card-bordered lg:card-side bg-base-100 shadow-xl my-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:bg-stone-200 duration-300"
>
	<div class="card-body">
		<h2 class="card-title">{resource.meta.title}</h2>
		<div class="card-actions justify-end">
			<button class="btn btn-primary"><a href={resource.meta.myfile}>Open</a></button>
			<button class="btn btn-accent"><a href={resource.meta.myfile} download>Download</a></button>
		</div>
	</div>
</div>
