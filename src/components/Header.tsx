import Link from "next/link"

const Header = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-xl font-bold">My next.js project</h1>
      <div className="space-x-8">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/ssr" className="hover:underline">Posts (SSR)</Link>
        <Link href="/isr" className="hover:underline">Posts (ISR)</Link>
        <Link href="/contact" className="hover:underline">Contact Us</Link>
      </div>
    </div>
  </nav>
  )
}
export default Header
