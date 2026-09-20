const projects = [
  {
    title: "Digital Business Website",
    category: "Web Development",
    image: "/images/project-business.png",
  },
  {
    title: "Modern E-Commerce",
    category: "E-Commerce",
    image: "/images/project-ecommerce.png",
  },
  {
    title: "Creative Portfolio",
    category: "UI / UX Design",
    image: "/images/project-portfolio.png",
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="bg-[#050505] px-6 py-24 text-white lg:px-12"
    >
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            Selected Work
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Ideas we've
            <br />
            brought to life.
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-6 text-white/40">
          A selection of digital experiences designed and developed
          with a focus on performance, usability and visual quality.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] ${
              index === 0 ? "md:col-span-2" : ""
            }`}
          >
            <div
              className={`overflow-hidden ${
                index === 0 ? "aspect-[16/7]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex items-end justify-between gap-4 p-6">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-white/35">
                  {project.category}
                </p>

                <h3 className="text-xl font-medium">
                  {project.title}
                </h3>
              </div>

              <a
                href="#contact"
                className="shrink-0 text-sm underline underline-offset-4"
              >
                View Project
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
