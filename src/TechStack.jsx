const techs = [
  "React",
  "Next.js",
  "Tailwind",
  "TypeScript",
  "Laravel",
  "MongoDB",
];

export default function TechStack() {
  return (
    <section className="pb-20 px-6">

      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">

        {techs.map((tech) => (
          <div
            key={tech}
            className="px-5 py-3 rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-300"
          >
            {tech}
          </div>
        ))}

      </div>

    </section>
  );
}