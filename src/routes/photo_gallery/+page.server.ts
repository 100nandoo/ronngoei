export const load = async () => {
	const allGalleryFiles = import.meta.glob('/src/content/gallery/*.md');
	const iterableGalleryFiles = Object.entries(allGalleryFiles);

	const images = await Promise.all(
		iterableGalleryFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const fileName = path.replace('.md', '').replace('/src/content', '');
			return {
				meta: metadata,
				path: fileName
			};
		})
	);

	return { images };
};
