<script>
	import Title from '$lib/components/Sidebar/Title.svelte';
	import TeachingItem from '$lib/components/Teaching/TeachingItem.svelte';
	const teachings = [
		{
			code: 'EN2703',
			subject: 'Laboratory for Environmental Engineering',
			degree: 'Undergraduate',
			faculty: 'School of Civil and Environmental Engineering',
			university: 'Nanyang Technological University, Singapore',
			year: '2009-2010'
		},
		{
			code: 'CV6581',
			subject: 'Water Chemistry Laboratory',
			degree: 'Postgraduate',
			faculty: 'School of Civil and Environmental Engineering',
			university: 'Nanyang Technological University, Singapore',
			year: '2009-2010'
		},
		{
			code: 'EV1011',
			subject: 'Introduction to Sustainability',
			degree: 'Undergraduate',
			faculty: 'School of Civil and Environmental Engineering',
			university: 'College of Science and Engineering – James Cook University, Singapore',
			year: '2019-2020'
		},
		{
			code: 'MS2012',
			subject: 'Introduction to Manufacturing Processes',
			degree: 'Undergraduate',
			faculty: 'School of Materials Science and Engineering',
			university: 'Nanyang Technological University, Singapore',
			year: '2009-2010'
		},
		{
			code: 'MS7001',
			subject: 'Graduate Student Experiment',
			degree: 'Postgraduate',
			faculty: 'School of Materials Science and Engineering',
			university: 'Nanyang Technological University, Singapore',
			year: '2020 – current'
		},
		{
			code: 'EG0001',
			subject: 'Engineers and Society',
			degree: 'Undergraduate',
			faculty: 'College of Engineering',
			university: 'Nanyang Technological University, Singapore',
			year: '2022 – current'
		},
		{
			code: 'MS7320',
			subject: 'Physical Analysis of Materials',
			degree: 'Postgraduate',
			faculty: 'School of Materials Science and Engineering',
			university: 'Nanyang Technological University, Singapore',
			year: '2022'
		}
	];

	const b_eng_22_23 = [
		'Kweh En Ling',
		'Jovan Law Kai Jian',
		'Quek Zheng Yi',
		'Chan Yong Ching',
		'Edward Thong Chun Wah',
		'Tan Rou Ping',
		'Adnan Faisal Taufiq'
	];

	const b_eng_21_22 = [
		'Frankie Tan Ting Feng',
		'Colin Tan Wei',
		'Afrina Bte Zaidi',
		'Ong Su-Ann',
		'Felicia Loh Yi Hui',
		'Rayner Ng Bao Feng'
	];

	const b_eng_20_21 = ['Yeong Zhun', 'Soon Pei Pei', 'Haw Chee Yeng', 'Loke Jie Yi', 'Tan Jun Hao'];

	const msc = ['Yang Zhandi', 'Rayland Low Jun Yan', 'Zhao Sunyu'];
	const phd = [
		'Zou Yiming (2020-current)',
		'Li Yun (2022-current)',
		'Amanda Ong Jiamin (2022-current)',
		'Song Jinxuan (2023-current)',
		'Sgambaro De Lorenzi Mariana (2023-current)'
	];
</script>

<div class="px-4 lg:px-8 pb-4 lg:pb-8">
	<Title>Teaching</Title>
	<ul class="list-disc pl-4">
		{#each teachings as teachingItem}
			<TeachingItem item={teachingItem} />
		{/each}
	</ul>

	<Title>Student Mentoring</Title>
	<p class="text-primary font-bold">
		B. Eng (Final Year Project) NTU MSE – Supervisor: A/P Alfred Tok Iing Yoong
	</p>

	<div class="pt-4">
		<strong>2022-2023</strong>
		<ul class="list-disc pl-4">
			{#each b_eng_22_23 as name}
				<li>{name}</li>
			{/each}
		</ul>
	</div>

	<div class="pt-4">
		<strong class="pt-4">2021-2022</strong>
		<ul class="list-disc pl-4">
			{#each b_eng_21_22 as name}
				<li>{name}</li>
			{/each}
		</ul>
	</div>

	<div class="pt-4">
		<strong class="pt-4">2020-2021</strong>
		<ul class="list-disc pl-4">
			{#each b_eng_20_21 as name}
				<li>{name}</li>
			{/each}
		</ul>
		<br />
	</div>

	<p class="text-primary font-bold">M. Sc (NTU MSE) – Supervisor: A/P Alfred Tok Iing Yoong</p>
	<strong>2022-2023</strong>
	<ul class="list-disc pl-4">
		{#each msc as name}
			<li>{name}</li>
		{/each}
	</ul>
	<br />

	<p class="text-primary font-bold">Ph.D. (NTU MSE) – Supervisor: A/P Alfred Tok Iing Yoong</p>
	<ul class="list-disc pl-4">
		{#each phd as name}
			<li>{name}</li>
		{/each}
	</ul>
</div>
