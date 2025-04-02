export const dynamic = "force-dynamic"; // Enables SSR

// Define Post Type
interface Post {
  id: number;
  title: string;
  body: string;
}

async function getSSR(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // Ensures fresh data on every request
  });
  return res.json();
}

export default async function SSRPage() {
  const posts = await getSSR();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Server-Side Rendered (SSR) Posts</h1>
      <ul className="mt-4">
        {posts.slice(0, 5).map((post) => (
          <li key={post.id} className="border p-4 my-2">{post.title}</li>
        ))}
      </ul>
    </div>
  );
}