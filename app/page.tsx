import WhyUs from "@/components/WhyUs";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-5 lg:px-12">
        <h1 className="text-lg font-semibold tracking-tight">
          LK STUDY STUDIO
        </h1>

        <div className="hidden gap-8 text-sm text-white/60 md:flex">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-white/20 px-4 py-2 text-sm transition hover:bg-white hover:text-black"
        >
          Start a Project
        </a>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden px-6 py-20 lg:px-12">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_70%_40%,rgba(90,60,255,.18),transparent_35%)]" />

        <div className="relative z-10 max-w-5xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-white/40">
            Digital Studio
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
            We Build
            <br />
            Digital Experiences.
          </h2>

          <p className="mt-8 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
            Websites, applications, interfaces and digital solutions
            crafted for modern businesses and ambitious ideas.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105"
            >
              Start a Project
            </a>

            <a
              href="#work"
              className="rounded-full border border-white/20 px-6 py-3 text-sm text-white transition hover:bg-white/10"
            >
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <Services />
      <Projects />
      <WhyUs />

    </main>
  );
}
