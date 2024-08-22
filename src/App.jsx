import Header from "./components/Header"
import Landing from "./components/Landing"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import References from "./components/References"
import ProjectCardModal from "./components/ProjectCardModal"
import { useSiteContext } from "./context/SiteContext"


function App() {
  const { modal } = useSiteContext()

  return (
    <div className="App">
      
      <main className="bg-gray-900 text-white">


        <Header />
        {modal && <ProjectCardModal />}

        <Landing />

        <About />

        <Projects />

        <Skills />

        <References />

        <Contact />

      </main>

    </div>
  )
}

export default App

/*
TODO:

Hook-up contact form
Fix button clicking while opacity is 0 in project card
Make nav menu
Get image preloading working
Get resume download working

*/