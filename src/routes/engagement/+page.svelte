<script lang="ts">
	import Title from '$lib/components/Sidebar/Title.svelte';
	import {
		Timeline,
		TimelineItem,
		TimelineItemVertical,
		TimelineItemHorizontal,
		TimelineHorizontal,
		Activity,
		ActivityItem,
		Group,
		GroupItem
	} from 'flowbite-svelte';

	let peerReviews = [
		{
			company: 'Elsevier',
			items: [
				'Journal of Materials Science and Technology',
				'Arabian Journal of Chemistry',
				'Journal of Industrial and Engineering Chemistry',
				'Materials Chemistry and Physics',
				'Materials Today Chemistry',
				'Materials Today Communication',
				'Vacuum',
				'Journal of King Saud University: Science',
				'Materials Science and Engineering: B'
			]
		},
		{
			company: 'MDPI',
			items: [
				'Catalysts',
				'Crystals',
				'Processes',
				'Materials',
				'International Journal of Molecular Science'
			]
		}
	];

	let lectures = [
		{
			title: 'SEM – EDX Analysis: An Introduction',
			event: 'International Guest Lecture Program, Universitas Sumatera Utara',
			location: 'Medan, Indonesia',
			date: '25 November 2022'
		},
		{
			title: 'Toward Research Focus University',
			event: 'International Guest Lecture Program, Universitas Sumatera Utara',
			location: 'Medan, Indonesia',
			date: '14 November 2022'
		},
		{
			title: 'X-Rays Photoelectron Spectroscopy: An Introduction',
			event: 'International Guest Lecture Program, Universitas Sumatera Utara',
			location: 'Medan, Indonesia',
			date: '11 November 2022'
		},
		{
			title: 'Toward Research Focus University',
			event: 'International Guest Lecture Program, Universitas Negeri Medan',
			location: 'Medan, Indonesia',
			date: '7 November 2022'
		},
		{
			title: 'International Collaboration',
			event: 'World Class Professor Program, Universitas Sumatera Utara',
			location: 'Medan, Indonesia',
			date: '21 October 2022'
		},
		{
			title: 'Electrochemistry: Fundamental and Application',
			event: 'World Class Professor Program, Universitas Sumatera Utara',
			location: 'Medan, Indonesia',
			date: '19 October 2022'
		},
		{
			title:
				'Development of Nitrogen-decorated Carbon Dots (NCDs) Thermally Conductive Films for Windows Application',
			event: 'International Guest Lecture, Universitas Sari Mutiara Indonesia',
			location: 'Medan, Indonesia',
			date: '13 June 2022'
		},
		{
			title:
				'Novel High Performance SnO2-αWO3-based Electrochromic Smart Windows with Dual Band Modulation Property',
			event: 'The 10th International Conference on Nano and Materials Science (ICNMS 2022)',
			location: 'Singapore',
			date: '12-14 February 2022'
		},
		{
			title: 'High Performance Electrochromic Smart Windows: Energy Savings for Green Buildings',
			event: 'International Guest Lecture, President University',
			location: 'Jakarta, Indonesia',
			date: '2 December 2021'
		},
		{
			title: 'International Funding Research',
			event: 'Focus Group Discussion – World Class Professor Program, Universitas Sumatera Utara',
			location: 'Medan, Indonesia',
			date: '16 November 2021'
		},
		{
			title:
				'Electrochromic Smart Windows: Preparation, Characterization and Performance Evaluation',
			event: 'International Guest Lecture, Universitas Sari Mutiara Indonesia',
			location: 'Medan, Indonesia',
			date: '29 October 2021'
		},
		{
			title: 'Chemistry and The Future',
			event: 'Seminar Nasional Kimia 2021, Universitas Sari Mutiara Indonesia',
			location: 'Medan, Indonesia',
			date: '15 September 2021'
		},
		{
			title: 'Advanced Oxidation Processes for Water Treatment',
			event: 'Seminar Internasional, Universitas International Batam',
			location: 'Batam, Indonesia',
			date: '23 April 2015'
		}
	];
</script>

<div class="px-4 lg:px-8 pb-4 lg:pb-8">
	<Title>Peer Reviewer for:</Title>

	{#each peerReviews as peerReview}
		<p class="text-blue-700 font-semibold text-lg pt-2">{peerReview.company}</p>
		<ul class="list-disc pl-4">
			{#each peerReview.items as item}
				<li>{item}</li>
			{/each}
		</ul>
	{/each}

	<Title>Invited Lecture/Talk and Conference Presentation</Title>
	<Timeline>
		{#each lectures as lecture}
			<TimelineItem title={lecture.title} date={lecture.date}>
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">
					{lecture.event}
				</p>
				<p class="text-base font-normal text-gray-500 dark:text-gray-400">{lecture.location}</p>
			</TimelineItem>
		{/each}
	</Timeline>

	<Title>Certified Occupational First Aider (CPR + AED)</Title>
	<Title>National Umpire (Singapore Badminton Association)</Title>
	<Title>Badminton Asia Accredited Umpire</Title>
</div>
