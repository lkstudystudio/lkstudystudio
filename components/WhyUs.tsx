const reasons = [
  {
    number: "01",
    title: "Modern Technology",
    text: "We use modern tools and frameworks to create fast, scalable and reliable digital products.",
  },
  {
    number: "02",
    title: "Clean Design",
    text: "Every interface is carefully designed to feel clear, premium and easy to use.",
  },
  {
    number: "03",
    title: "Built for Every Screen",
    text: "Every project is designed to work beautifully across mobile, tablet and desktop.",
  },
  {
    number: "04",
    title: "Custom Solutions",
    text: "Your project is built around your requirements instead of a generic template.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="about"
      className="bg-[#050505] px-6 py-28 text-white lg:px-12"
    >
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            Why Us
          </p>

          <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Built with purpose.
            <br />
            Designed to stand out.
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
            We combine technology, design and creativity to turn ideas
            into useful digital experiences.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="grid gap-5 py-8 sm:grid-cols-[70px_1fr] sm:items-start"
            >
              <span className="text-sm text-white/30">
                {reason.number}
              </span>

              <div>
                <h3 className="text-2xl font-medium">
                  {reason.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-white/40">
                  {reason.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
