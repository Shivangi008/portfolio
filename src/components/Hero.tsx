export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 bg-gradient-to-b from-stone-50 to-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-amber-600 font-medium tracking-widest uppercase text-sm mb-4">
          Frontend Engineer | React.Js Developer
        </p>
        <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl md:text-7xl font-semibold text-stone-800 leading-tight mb-6">
          Hi, I'm <span className="text-amber-600">Shivangi Kumari</span>
        </h1>
        <p className="text-xl sm:text-2xl text-stone-600 max-w-2xl mx-auto mb-10">
          Building scalable, high-performance web applications with React.js. Strong expertise in JavaScript, Redux, REST APIs, and responsive UI development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-stone-300 text-stone-700 font-medium hover:border-amber-600 hover:text-amber-700 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
