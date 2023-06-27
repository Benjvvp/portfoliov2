import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact/Contact'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WelcomeSection from './components/WelcomeSection'

function App() {
  return (
    <>
      <NavBar />
      <WelcomeSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
