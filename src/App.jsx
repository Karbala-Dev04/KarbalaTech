import CTA from "./components/CTA"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import Stats from "./components/Stats"

export default function App(){
  return (
          <>
          <Navbar/>
          <Hero/>
          <Features/>
          <Stats/>
          <Services/>
          <CTA/>
          <Footer/>
          </>
  ) 
}