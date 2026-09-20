const steps = [
  {
    number: "01",
    title: "Tell Us",
    text: "Share your idea, requirements and what you want to build.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We understand the project and create a clear development plan.",
  },
  {
    number: "03",
    title: "Design",
    text: "We create the visual direction and user experience for your product.",
  },
  {
    number: "04",
    title: "Develop",
    text: "The approved idea is transformed into a functional digital product.",
  },
  {
    number: "05",
    title: "Test",
    text: "We check responsiveness, performance and important functionality.",
  },
  {
    number: "06",
    title: "Launch",
    text: "Your finished product is deployed and ready for the world.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#050505] px-6 py-28 text-white lg:px-12">
      <div className="mb-16 max-w-2xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
          Our Process
        </p>

        <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          From idea
          <br />
          to reality.
        </h2>
      </div>

      <div className="grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.number}
            className="border-b border-white/10 p-7 md:border-r"
          >
            <span className="text-sm text-white/25">
              {step.number}
            </span>

            <h3 className="mt-14 text-2xl font-medium">
              {step.title}
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
