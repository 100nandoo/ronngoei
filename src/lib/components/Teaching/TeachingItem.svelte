<script>
	/**
	 * @type {{ code: any; subject: any; degree: any; faculty: any; university: any; year: any; }}
	 */
	export let item;
</script>

<li>
	<div>
		<span class="badge">{item.code}</span>
		<span class="text-xl">{item.subject}</span>
		<span class="text">• {item.degree}</span>
	</div>
	{item.faculty} • {item.university}
	<div class="badge badge-outline">{item.year}</div>
</li>
