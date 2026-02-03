export function AboutMe() {
  return (
    <section id="about" className="py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-semibold text-stone-800 mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-amber-600 rounded mb-12" />
        <div className="prose prose-lg text-stone-600 space-y-4">
          <p>
            Frontend Engineer with 2.9+ years of experience building scalable and high-performance web applications using React.js.
            I bring strong expertise in JavaScript (ES6+), Redux, REST API integration, and responsive UI development.
          </p>
          <p>
            Familiar with Next.js and modern frontend workflows. I'm experienced in collaborating with product, design, and backend teams
            in fast-paced Agile environments to deliver quality user experiences.
          </p>
          <p>
            <span className="font-medium text-stone-800">Education:</span> Master of Computer Applications (MCA) from Maharshi Dayanand University (2019–2022) — 80%
          </p>
        </div>
      </div>
    </section>
  );
}
