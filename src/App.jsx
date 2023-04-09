import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { calling, whtsapp2 } from "./assets";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <div style={{ position: 'fixed', bottom: '18px', right: '20px' }}>
          <a href="https://wa.me/+918088563651">
            <img src={whtsapp2} alt="whtsapp" className="w-16 h-16 stic object-contains" />
          </a>
        </div>
        <div style={{ position: 'fixed',bottom:"18px",left:"20px"}}>
          <a href="tel:+918088563651">
            <img src={calling} alt="calling" className="w-16 h-16 stic object-contains" />
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
