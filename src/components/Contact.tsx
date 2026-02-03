const links = [
  { label: "Email", href: "mailto:shivangi.sinha813@gmail.com", icon: "✉" },
  { label: "Phone", href: "tel:+918010110567", icon: "📞" },
  { label: "LinkedIn", href: "https://linkedin.com/in/shivangi-kumari-4868591b2", icon: "in" },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-semibold text-stone-800 mb-4">
          Get In Touch
        </h2>
        <div className="w-16 h-1 bg-amber-600 rounded mb-8 mx-auto" />
        <p className="text-stone-600 text-lg mb-12 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-stone-200 text-stone-700 font-medium hover:border-amber-600 hover:text-amber-700 transition-colors"
            >
              <span>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
