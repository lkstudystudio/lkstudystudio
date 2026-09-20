const services = [
  {
    title: "Web Development",
    text: "Fast, responsive and modern websites built for real-world businesses.",
    image: "/images/web-development.jpg",
  },
  {
    title: "App Development",
    text: "Powerful digital applications designed around your ideas.",
    image: "/images/app-development.jpg",
  },
  {
    title: "UI / UX Design",
    text: "Clean and thoughtful interfaces that make digital products easier to use.",
    image: "/images/ui-ux.jpg",
  },
  {
    title: "AI Solutions",
    text: "Smart AI-powered experiences for modern digital products.",
    image: "/images/ai-solutions.jpg",
  },
  {
    title: "E-Commerce",
    text: "Professional online stores designed to turn visitors into customers.",
    image: "/images/ecommerce.jpg",
  },
  {
    title: "Custom Projects",
    text: "Have a unique idea? We turn your concept into a working product.",
    image: "/images/custom-project.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#050505] px-6 py-24 text-white lg:px-12"
    >
      <div className="mb-14 max-w-2xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
          What We Do
        </p>

        <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Digital solutions
          <br />
          for ambitious ideas.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition duration-500 hover:-translate-y-2 hover:border-white/20"
          >
            <div className="aspect-[4/3] overflow-hidden bg-white/5">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            <div className="p-7">
              <h3 className="text-2xl font-medium">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/45">
                {service.text}
              </p>

              <a
                href="#contact"
                className="mt-6 inline-block text-sm text-white underline underline-offset-4"
              >
                Discuss Project
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
