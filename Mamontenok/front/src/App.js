import './App.css';
import Navigation from "./components/Navigation";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Masthead from "./components/Masthead";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";

function App() {

  return (
    <>
      <BrowserRouter>
          <Navigation></Navigation>

          <Routes>
              <Route path="/" element={<Masthead></Masthead>} />
              <Route path="/about" element={<About></About>} />
              <Route path="/services" element={<Services></Services>} />
              <Route path="/portfolio" element={<Portfolio></Portfolio>} />
              <Route path="/contact" element={<Contact></Contact>} />
              <Route path="*" element={<Error404></Error404>} />
          </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
