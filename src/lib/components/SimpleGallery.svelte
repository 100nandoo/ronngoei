<script>
	import { onMount } from 'svelte';
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	export let galleryID;
	export let images;

	onMount(() => {
		const options = {
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe')
		};
		let lightbox = new PhotoSwipeLightbox(options);
		lightbox.on('uiRegister', function () {
			lightbox.pswp.ui.registerElement({
				name: 'download-button',
				order: 8,
				isButton: true,
				tagName: 'a',

				html: {
					isCustomSVG: true,
					inner:
						'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1ZM23 23H9v2h14Z" id="pswp__icn-download"/>',
					outlineID: 'pswp__icn-download'
				},

				onInit: (el, pswp) => {
					el.setAttribute('download', '');
					el.setAttribute('target', '_blank');
					el.setAttribute('rel', 'noopener');

					pswp.on('change', () => {
						console.log('change');
						el.href = pswp.currSlide.data.src;
					});
				}
			});
		});
		lightbox.init();
	});
</script>

<div class="pswp-gallery grid grid-flow-col auto-cols-max gap-2" id={galleryID}>
	{#each images as image}
		<a
			href={image.largeURL}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			target="_blank"
			rel="noreferrer"
		>
			<img src={image.thumbnailURL} alt="" />
		</a>
	{/each}
</div>
