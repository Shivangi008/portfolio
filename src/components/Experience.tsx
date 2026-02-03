const experiences = [
  {
    role: "Software Engineer",
    company: "AgileApt Solutions",
    period: "Mar 2023 – Present",
    description: [
      "Built and maintained scalable React.js interfaces used by 5k+ users, improving overall user experience and application responsiveness.",
      "Designed and developed a centralized communication hub enabling real-time chat between users, improving collaboration and engagement within the platform.",
      "Implemented Excel file upload and download functionality, allowing users to seamlessly manage, import, and export large datasets.",
      "Developed interactive dashboards displaying live events and real-time data updates, enhancing visibility into system activities.",
      "Created reusable and modular UI components, reducing development time for new features by 30–40%.",
      "Translated complex Figma/UI-UX designs into clean, maintainable frontend code with high pixel accuracy.",
      "Integrated REST APIs and efficiently handled asynchronous data rendering using modern React patterns.",
      "Optimized frontend performance using lazy loading and code splitting, resulting in faster page load times.",
      "Ensured cross-browser and mobile compatibility, reducing UI-related production issues.",
      "Collaborated closely with backend developers, designers, and product managers in an Agile development environment."
    ]
  },
  {
    role: "Frontend Development Intern",
    company: "Pepcoding",
    period: "Jan 2022 – Jun 2022",
    description: [
      "Worked with HTML, CSS, JavaScript, and React.js fundamentals to build responsive user interfaces.",
      "Developed reusable UI components and mini-projects following modern frontend best practices.",
      "Implemented layouts using Flexbox and core CSS concepts to ensure cross-device compatibility.",
      "Strengthened understanding of component-based architecture and JavaScript fundamentals.",
      "Improved debugging, problem-solving, and clean coding skills through hands-on project work."
    ]
  }
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
              <div className="text-stone-600 space-y-2">
  {exp.description.map((line, idx) => (
    <p key={idx}>{line}</p>
  ))}
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
