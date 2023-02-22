export const load = async () => {

  const allPostFiles = import.meta.glob('/src/content/resources/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const result = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const fileName = path.replace('.md', '').replace('/src/content', '');
      return {
        meta: metadata,
        path: fileName
      };
    })
  );


  return { result }
}
