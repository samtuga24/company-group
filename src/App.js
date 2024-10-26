import logo from './logo.svg';
import './App.css';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import { AboutUs } from './components/AboutUs';
import { Group } from './components/Group';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Nav />
      <Home />
      <AboutUs />
      <Group />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
