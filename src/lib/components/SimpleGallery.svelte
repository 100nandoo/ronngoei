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

<div class="pswp-gallery columns-1 md:columns-2 lg:columns-3 gap-2" id={galleryID}>
	{#each images as image}
		<div class="mb-2">
			<a
				href={image.meta.image}
				data-pswp-width={image.meta.width}
				data-pswp-height={image.meta.height}
				target="_blank"
				rel="noreferrer"
				aria-label={image.meta.image}
			>
				<img src={image.meta.image} alt="" />
			</a>
		</div>
	{/each}
</div>
