

export default async function sitemap() {
  // const response = await fetch("https://dummyjson.com/posts");
  // const { posts }: BlogPostsResponse = await response.json();

  // const postEntries: MetadataRoute.Sitemap = posts.map(({ id }) => ({
  //   url: `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`,
  //   // lastModified: new Date(post.updatedAt),
  //   // changeFrequency:,
  //   // priority:
  // }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: new Date(),
    },
    // ...postEntries,
  ];
}
