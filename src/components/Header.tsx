const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <h2 className="text-xl">My next.js project</h2>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-blue-200">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-200">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
