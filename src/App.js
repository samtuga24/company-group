import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { AboutUs } from './components/AboutUs';
import { Group } from './components/Group';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SideNav } from './components/SideNav';
import { NavProvider } from './context/NavContext';
import { useEffect } from 'react';
gsap.registerPlugin(useGSAP, ScrollTrigger);
function App() {
  useGSAP(() => {
    gsap.to(".about-container", {
      scrollTrigger: {
        trigger: ".about-container",
        pin: true
        // toggleActions: "restart none none none",
      }
    })
  })
  return (
    <NavProvider>
      <Nav />
      <Home />
      <AboutUs />
      <Group />
      <Contact />
      <Footer />
      <SideNav/>
    </NavProvider>
  );
}

export default App;
