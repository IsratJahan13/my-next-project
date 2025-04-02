export const revalidate = 10 // ISR: Regenerate every 10 seconds

interface Post {
    id: number
    title: string
    body: string
}

async function getISR (): Promise<Post[]> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    return res.json()
}

export default async function IsrPage () {
    const posts = await getISR()

    return (
        <div className="p-10">
      <h1 className="text-3xl font-bold">Incremental Static Regeneration (ISR) Posts</h1>
      <ul className="mt-4">
        {posts.slice(0, 5).map((post) => (
          <li key={post.id} className="border p-4 my-2">{post.title}</li>
        ))}
      </ul>
      <p className="text-gray-500 mt-4">This page updates every 10 seconds.</p>
    </div>
    )
}