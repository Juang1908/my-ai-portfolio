export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold tracking-wide">Juan Galvan</h1>
        <nav className="space-x-6">
          <a href="#projects" className="hover:text-purple-400">Projects</a>
          <a href="#ai" className="hover:text-purple-400">AI</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}
