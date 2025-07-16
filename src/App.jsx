import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Project from "./Components/Project";

import './index.css';
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <>
      <Nav/>
      <Hero />
      <Project/>
      <Testimonial/>
      {/* Add other components here */}
      <Footer />
     

    </>
  );
}

export default App;
