const projects = [
  {
    title: "Task Management Dashboard",
    description: "React-based dashboard with REST API integration and performance-focused UI. Implemented responsive layouts ensuring cross-device compatibility.",
    tags: ["React.js", "REST API", "Responsive UI"],
    href: "#",
  },
  {
    title: "Video Calling Application (Let's Meet)",
    description: "Built responsive React UI for a video calling app, focused on smooth and consistent user experience across devices.",
    tags: ["React.js", "Responsive Design", "Real-time"],
    href: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 px-4 sm:px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-semibold text-stone-800 mb-4">
          Projects
        </h2>
        <div className="w-16 h-1 bg-amber-600 rounded mb-12" />
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.href}
              className="group block p-6 rounded-xl bg-white border border-stone-200 shadow-sm hover:shadow-lg hover:border-amber-200 transition-all"
            >
              <h3 className="font-semibold text-stone-800 text-lg mb-2 group-hover:text-amber-700 transition-colors">
                {project.title}
              </h3>
              <p className="text-stone-600 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs bg-stone-100 text-stone-600 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
