mport Typewriter from "./Typewriter";
import heroImage from "@/assets/hero-abstract.jpg";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToProjects = () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-4 pt-20 pb-12 md:pt-28">
      <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
        <div className="space-y-5">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Hi, I'm Sharad Karmacharya</h1>
          <p className="text-muted-foreground text-lg">
            <Typewriter words={["CS student in Germany", "Aspiring developer", "Turning ideas into code"]} />
          </p>
          <p className="max-w-prose text-base text-muted-foreground">
            I enjoy building modern, accessible web experiences and learning new technologies. Explore my selected work and feel free to reach out.
          </p>
          <div className="flex gap-3 pt-2">
            <Button variant="hero" size="lg" onClick={scrollToProjects}>View Projects</Button>
            <a href="#contact" className="rounded-md border border-border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground">Contact Me</a>
          </div>
        </div>
        <div className="justify-self-center">
          <img
            src={heroImage}
            alt="Sharad Karmacharya portfolio abstract hero image"
            width={240}
            height={240}
            loading="eager"
            decoding="async"
            className="h-40 w-40 md:h-56 md:w-56 rounded-full border border-border shadow-[0_0_30px_hsl(var(--ring)/0.25)] animate-scale-in"
          />
        </div>
      </div>
    </section>
  );
}