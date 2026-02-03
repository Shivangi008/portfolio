const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS"],
  },
  {
    title: "Styling & Layout",
    skills: ["Flexbox", "CSS Grid", "Responsive Design"],
  },
  {
    title: "State & API",
    skills: ["Redux", "Context API", "REST APIs", "Axios"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "GitHub", "Webpack", "Vite", "Performance Optimization", "Agile / Scrum"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-semibold text-stone-800 mb-4">
          Skills
        </h2>
        <div className="w-16 h-1 bg-amber-600 rounded mb-12" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-stone-800 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-amber-50 text-amber-800 rounded-lg border border-amber-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
