import { BrowserRouter } from "react-router-dom";
import { About, Contact, Hero, Navbar, Tech, StarsCanvas, Footer } from './components';
// import Earth from "./components/canvas/Earth";
// import { StarsCanvas } from "./components/canvas";

const App = () => {
  return (
   <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      {/* <Team/> */}
      {/* <Experience /> */}
      <Tech/>
      {/* <Works/> */}
      {/* <Feedbacks/>  */}
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas />
      {/* <EarthCanvas/> */}
      <Footer />
      </div>
    </div>
   </BrowserRouter>
  )
}

export default App