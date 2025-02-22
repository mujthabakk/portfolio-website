import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="bg-gray-900">
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;