// import Image from "next/image";

import SlideshowModal from "@/components/SlideshowModal"

import Landing from "@/components/sections/Landing"
import About from "@/components/sections/About"
import Projects from "@/components/sections/Projects"
import Skills from "@/components/sections/Skills"
import Experience from "@/components/sections/Experience"
import References from "@/components/sections/References"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <SlideshowModal />

      <Landing />

      <About />

      <Projects />

      <Skills />

      <Experience />

      <References />

      <Contact />
    </>
  )
}
