import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import VisionMission from './sections/VisionMission';
import Programs from './sections/Programs';
import Events from './sections/Events';
import Partners from './sections/Partners';
import Join from './sections/Join';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <VisionMission />
      <Programs />
      <Events />
      <Partners />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
