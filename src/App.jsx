import Header from "./components/Header"
import Landing from "./components/Landing"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"


function App() {
  return (
    <div className="App">
      
      <main className="bg-gray-900 text-white">

        <Header />

        <Landing />

        <About />

        <Projects />

        <Skills />

        <Contact />

      </main>

    </div>
  )
}

export default App
