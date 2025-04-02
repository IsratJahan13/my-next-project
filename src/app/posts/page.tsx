export const dynamic = "force-dynamic"; // Enable SSR

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // Always fetch fresh data
  });
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Server-Side Rendered (SSR) Posts</h1>
      <ul className="mt-4">
        {posts.slice(0, 10).map((post: any) => (
          <li key={post.id} className="border p-4 my-2">{post.title}</li>
        ))}
      </ul>
    </div>
  );
}