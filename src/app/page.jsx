// import Image from "next/image";

import Landing from "@/components/sections/Landing"
import SlideshowModal from "@/components/SlideshowModal"
// import About from "@/components/About"
// import Projects from "@/components/Projects"
// import Skills from "@/components/Skills"
// import Contact from "@/components/Contact"
// import References from "@/components/References"

export default function Home() {
  return (
    //   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //     <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

    //         <Image
    //           aria-hidden
    //           src="/window.svg"
    //           alt="Window icon"
    //           width={16}
    //           height={16}
    //         />
    //       </main>

    //     </div>
    // );

    <>
      <SlideshowModal />

      <main>
        <Landing />

        {/* <About /> */}

        {/* <Projects /> */}

        {/* <Skills /> */}

        {/* <References /> */}

        {/* <Contact /> */}
      </main>
    </>
  )
}
