import Header from "./components/Header"
import Landing from "./components/Landing"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import References from "./components/References"
import SlideshowModal from "./components/SlideshowModal"
import { useSiteContext } from "./context/SiteContext"
import { useEffect } from "react"


function App() {
  const { modal } = useSiteContext()

  useEffect(() => {
    if (modal) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
  }, [modal])

  return (
    <div className="App">
      
      <main className={`bg-gray-900 text-white`}>


        <Header />
        {modal && <SlideshowModal />}

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
TODO ---

Hook-up contact form
Fix button clicking while opacity is 0 in project card
Get resume download working
Project info text fuzzy/jump on hover transition
Contact error not printing? (At least on empty form)
Change transition opacity logic (References + Skills) to use useEffect

IDEAS ---

Make landing background swap between images (background 4) via timer


*/