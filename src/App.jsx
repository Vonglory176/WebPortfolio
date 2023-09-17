import Navbar from './component/Navbar'
import Welcome from './component/Welcome'
import Projects from './component/Projects'
import Skills from './component/Skills'
import Contact from './component/Contact'

export default function App() {

  return (
    <>
      <Navbar />
      <Welcome />
      {/* <div className='angle1'></div> */}
      <Projects />
      <Skills />
      <Contact />

      {/* <div style={{
        width: '100%',
        height: '250px',
        background: 'linear-gradient(135deg, red 50%, blue 50%)',
        
        //0,0 is top left, 1,1 is bottom right
        clipPath: 'polygon(0 0, 100% 0%, 100% 0%, 0% 100%)'
        //clipPath: 'polygon(0 0, 100% 0%, 100% 100%, 0% 100%)'//'polygon(50% 50% at 50% 50%)'
      }}></div> */}


      {/* <div style={{height: '500px', width: '100%', background: 'linear-gradient(135deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)', clipPath: 'polygon(0 0, 100% 50%, 100% 85%, 0% 100%)'}}></div> */}
      
      
      {/* <section id="mainFooter-section" className='d-flex align-items-center gap-1'>
        <h6>Skyler 2023</h6> 
        <a href="https://github.com/Vonglory176/ImageGenerator" className="navbar-imageLink" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">
            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/>
          </svg>
        </a>
      </section> */}
    </>
  )
}

































// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
