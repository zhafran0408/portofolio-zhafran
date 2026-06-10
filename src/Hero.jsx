export default function Hero() {
  return (
    <section className="relative px-6 py-24 text-center overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-400/10 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Avatar */}
        <div className="inline-block mb-8 group relative">

          <div className="absolute inset-0 bg-amber-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-full" />

          <div
            className="w-36 h-36 p-1 bg-zinc-900 border border-amber-400/40 shadow-[0_0_40px_rgba(251,191,36,0.2)]"
            style={{
              borderRadius:
                "45% 55% 60% 40% / 50% 45% 55% 50%",
            }}
          >
            <img
              src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
              style={{
                borderRadius:
                  "45% 55% 60% 40% / 50% 45% 55% 50%",
              }}
            />
          </div>

        </div>

        {/* Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs uppercase tracking-widest text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />

            Full-Stack Developer

            <span className="text-amber-400">
              Technical Educator
            </span>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
          Zhafran Atha Razin Hadiny
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed mb-10">
          Building modern web experiences using React,
          Tailwind CSS, Next.js, and scalable frontend
          architectures.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <button className="px-8 py-4 rounded-xl bg-amber-400 text-black font-bold hover:bg-amber-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.35)] transition">
            Get In Touch
          </button>

          <button className="px-8 py-4 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 transition">
            View Projects
          </button>

        </div>

      </div>
    </section>
  );
}