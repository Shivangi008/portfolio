const experiences = [
  {
    role: "Software Engineer",
    company: "AgileApt Solutions",
    period: "Mar 2023 – Present",
    description:
      "Developed scalable and responsive user-facing features using React.js. Built reusable UI components to improve consistency and development efficiency. Translated UI/UX designs into clean, maintainable frontend code. Integrated REST APIs and handled asynchronous data rendering. Optimized frontend performance and ensured cross-browser and mobile compatibility.",
  },
  {
    role: "Frontend Development Intern",
    company: "Pepcoding",
    period: "Jan 2022 – Jun 2022",
    description:
      "Worked with HTML, CSS, JavaScript, and React fundamentals. Built UI components and mini projects following modern frontend practices.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-semibold text-stone-800 mb-4">
          Experience
        </h2>
        <div className="w-16 h-1 bg-amber-600 rounded mb-12" />
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="pl-6 border-l-2 border-amber-200 hover:border-amber-500 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="font-semibold text-stone-800 text-lg">{exp.role}</h3>
                <span className="text-sm text-amber-600 font-medium">{exp.period}</span>
              </div>
              <p className="text-amber-700 font-medium mb-2">{exp.company}</p>
              <p className="text-stone-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
