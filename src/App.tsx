import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutMe } from './components/AboutMe'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="min-h-screen antialiased">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
