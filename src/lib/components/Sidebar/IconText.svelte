<script>
	export let text = '';
	export let url = '';
</script>

<div class="flex justify-start items-center hover:bg-base-300">
	<slot name="icon" />
	<a href={url}>{text}</a>
</div>
