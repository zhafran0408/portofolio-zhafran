export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
        
        <p>
          © {new Date().getFullYear()} Personal Portfolio. All rights reserved.
        </p>

        {/* Bagian Link Sosial Media dengan Animasi */}
        <div className="flex gap-6">
          <a 
            href="#" 
            className="inline-block transition-all duration-300 ease-out hover:text-amber-400 hover:-translate-y-1 hover:scale-105"
          >
            GitHub
          </a>

          <a 
            href="#" 
            className="inline-block transition-all duration-300 ease-out hover:text-amber-400 hover:-translate-y-1 hover:scale-105"
          >
            LinkedIn
          </a>

          <a 
            href="#" 
            className="inline-block transition-all duration-300 ease-out hover:text-amber-400 hover:-translate-y-1 hover:scale-105"
          >
            Twitter
          </a>
        </div>

      </div>
    </footer>
  );
}