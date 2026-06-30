import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero'; 
import About from './Components/About/About';
import Tienda from './Components/Tienda/Tienda'; 
import Contact from './Components/Contact/Contact'; 
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        
        <section id="tienda">
          <Tienda />
        </section>

        <div className="artisan-divider"></div>

        <section id="sobre-mi">
          <About />
        </section>

        <div className="artisan-divider"></div>

        <section id="contacto">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;