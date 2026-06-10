

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b border-zinc-200 dark:border-white/5">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#" className="text-2xl font-black tracking-wide text-zinc-900 dark:text-white">
          <span className="text-amber-400">ZH.</span>ATHA
        </a>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-10 text-sm text-zinc-600 dark:text-zinc-400">
          <li><a href="#" className="hover:text-amber-500 dark:hover:text-amber-400 transition">Home</a></li>
          <li><a href="#" className="hover:text-amber-500 dark:hover:text-amber-400 transition">About</a></li>
          <li><a href="#" className="hover:text-amber-500 dark:hover:text-amber-400 transition">Projects</a></li>
          <li><a href="#" className="hover:text-amber-500 dark:hover:text-amber-400 transition">Contact</a></li>
        </ul>

      </nav>
    </header>
  );
}