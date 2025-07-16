
import Footer from "./Footer"
import Hero from "./Hero"
import Nav from "./Nav"
import Testimonial from "./Testimonial"
import Project from "./project"


const main = () => {
  return (
    <div className="bg-indigo-600">
        <Nav/>
        <Hero/>
        <Project/>
        <Testimonial/>
        <Footer/>
    </div>
  )
}

export default main
