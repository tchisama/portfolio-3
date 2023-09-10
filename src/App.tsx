import Home from "../sections/home"
import Work from "../sections/Work"
import Navbar from "../components/Navbar"
import About from "../sections/About"
import {useRef,useState} from "react"
import Links from "../components/Links"

import Project from "../pages/Project"
    
  function App() {
    const divRef = useRef<HTMLDivElement>(null)
    const [scrollPosition, setScrollPosition] = useState({ top: 0, left: 0 });
    const [currentSection,setCurrentSection] = useState(0)

    const handleScroll = () => {
      // Get the scroll position of the div
      if(divRef.current){
        setScrollPosition({ top: divRef.current.scrollTop, left: divRef.current.scrollLeft });
      }
      console.log(Math.round(scrollPosition.top/window.innerHeight))
      setCurrentSection(Math.round(scrollPosition.top/window.innerHeight))
    };
    
    return (
        //{/* <div className="fixed -z-30 bg-red-200 w-screen left-0 top-0 h-screen "> */}
          0?
          <div>
            <Project/>
          </div>
          :
          <div onScroll={handleScroll} ref={divRef} className="app h-screen bg-custom overflow-y-scroll">
            <Navbar isAbsolute={true}/>
            <Links section={currentSection}/>
            <Home/>
            <About/>
            <Work/>
          </div>
    )
  }

  export default App
