import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'; 
import About from './components/About/About';
import Tienda from './components/Tienda/Tienda'; // 1. Importa el componente
import Contact from './components/Contact/Contact'; 
import Footer from './components/Footer/Footer';
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