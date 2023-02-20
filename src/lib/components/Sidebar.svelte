<script>
	import { faLinkedin, faOrcid, faResearchgate } from '@fortawesome/free-brands-svg-icons';
	import { faPhone } from '@fortawesome/free-solid-svg-icons';
	import Color, {
		linkedin,
		orcidColor,
		researchGateColor,
		webOfScienceColor
	} from '$lib/constants/Color.svelte';
	import IconText from '$lib/components/Sidebar/IconText.svelte';
	import Title from '$lib/components/Sidebar/Title.svelte';
	import {
		googleScholarUrl,
		webOfScienceUrl,
		researchGateUrl,
		linkedinUrl,
		orcidUrl
	} from '$lib/constants/Const.svelte';
	import Icon from '$lib/components/Sidebar/Icon.svelte';
	import ImageIcon from '$lib/components/Sidebar/ImageIcon.svelte';
	import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
	import Position from '$lib/components/Sidebar/Position.svelte';

	let iconTexts = [
		{
			id: '1',
			text: 'ronn.goei@gmail.com',
			url: 'mailto:hello@ronngoei.com',
			icon: faEnvelope,
			imageIcon: false
		},
		{
			id: '2',
			text: '(+65) 9878-9849 (GMT +8)',
			url: 'tel:+6598789849',
			icon: faPhone,
			imageIcon: false
		},
		{
			id: '3',
			text: 'Linkedin',
			url: linkedinUrl,
			color: linkedin,
			icon: faLinkedin,
			imageIcon: false
		},
		{
			id: '4',
			text: '0000-0001-6794-0601',
			url: orcidUrl,
			color: orcidColor,
			icon: faOrcid,
			imageIcon: false
		},
		{
			id: '5',
			text: 'Google Scholar',
			url: googleScholarUrl,
			color: orcidColor,
			src: '/google-scholar.svg',
			imageIcon: true
		},
		{
			id: '6',
			text: 'Research Gate',
			url: researchGateUrl,
			color: researchGateColor,
			icon: faResearchgate,
			imageIcon: false
		},
		{
			id: '7',
			text: 'Web of Science',
			url: webOfScienceUrl,
			color: webOfScienceColor,
			src: '/web-of-science.svg',
			imageIcon: true
		}
	];

	let positions = [
		{
			institution:
				'Nanyang Environment and Water Research Institute – Nanyang Technological University',
			position:
				'Research Associate (2012) – Research Fellow (2014) – Industrial Research Fellow (2016)'
		},
		{
			institution: 'Phytosys Pte. Ltd. – Terrazenith Pte. Ltd. – start-up spin-off of NTU',
			position: 'Director of Operations (2017)'
		},
		{
			institution: 'School of Business and Environmental Sciences, James Cook University Singapore',
			position: 'Sessional Lecturer (2019)'
		},
		{
			institution: 'School of Materials Science & Engineering, Nanyang Technological University',
			position: 'Research Fellow (2020) – Senior Research Fellow (2021)'
		}
	];
</script>

<div class="bg-base-200 text-base-content p-8 card shadow-xl m-4 xl:m-0">
	<div class="menu menu-compact">
		<div class="font-semibold font-serif text-2xl">Ronn Goei, Ph. D.</div>
		{#each iconTexts as iconText (iconText.id)}
			<IconText url={iconText.url} text={iconText.text}>
				<div slot="icon" class="p-4">
					{#if iconText.imageIcon}
						<ImageIcon src={iconText.src} />
					{:else}
						<Icon color={iconText.color} icon={iconText.icon} />
					{/if}
				</div>
			</IconText>
		{/each}
	</div>

	<Title>Education:</Title>
	<ul class="list-disc pl-4">
		<li>
			<strong>
				B. Eng. (Hons.) (Materials Science and Engineering) with Minor in Business and Minor in
				Environmental Management</strong
			> (2007 – Nanyang Technological University)
		</li>
		<li>
			<strong>M.S. (Environmental Science and Engineering)</strong> (2008 – Singapore Stanford Partnership)
		</li>
		<li>
			<strong>Ph.D. (Environmental Engineering)</strong> (2014 – Nanyang Technological University)
		</li>
	</ul>

	<Title>Position Held:</Title>
	<ul class="list-disc pl-4 font-bold">
		{#each positions as position}
			<Position institution={position.institution} position={position.position} />
		{/each}
	</ul>

	<Title>Expertise:</Title>
	<ul class="list-disc pl-4">
		<li>
			Advanced Materials Characterization: XPS, TEM, FESEM-EDX, Raman Spectroscopy, AFM, FTIR, TGA,
			DSC, TMA, DMA.
		</li>
		<li>Materials Science and Engineering.</li>
		<li>Environmental Chemistry and Materials.</li>
		<li>Electrochemistry and Applied Catalysis.</li>
	</ul>
</div>
