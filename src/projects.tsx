import { useMemo, useState } from "react";
interface Project {
  title: string;
  description: string;
  tags: string[];
  links?: { live?: string; code?: string };
}

const allProjects: Project[] = [
  {
    title: "MyFirstProject",
    description: "A simple portfolio website built with HTML, CSS, and JavaScript.",
    tags: ["frontend", "html", "css"],
    links: { code: "https://github.com/sharadkarma" },
  },
  {
    title: "Second Project",
    description: "More projects coming soon! Stay tuned.",
    tags: ["coming-soon"],
  },
  {
    title: "React UI",
    description: "Reusable UI components with accessibility and motion.",
    tags: ["react", "frontend"],
    links: { code: "https://github.com/sharadkarma" },
  },
];

const categories = ["all", "frontend", "react", "coming-soon"] as const;

type Category = typeof categories[number];

export default function Projects() {
  const [active, setActive] = useState<Category>("all");

  const items = useMemo(() => {
    if (active === "all") return allProjects;
    return allProjects.filter((p) => p.tags.includes(active));
  }, [active]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-24">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={
                active === c
                  ? "rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary"
                  : "rounded-full border border-border px-3 py-1 text-sm text-muted-foreground hover:bg-accent"
              }
              aria-pressed={active === c}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_12px_30px_hsl(var(--ring)/0.18)] focus-within:ring-2 focus-within:ring-ring outline-none"
          >
            <h3 className="mb-1 text-lg font-semibold">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            {p.links && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 backdrop-blur-sm transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="flex gap-3">
                  {p.links.live && (
                    <a className="rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground" href={p.links.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  )}
                  {p.links.code && (
                    <a className="rounded-md border border-input bg-background px-3 py-1 text-sm hover:bg-accent" href={p.links.code} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  )}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
