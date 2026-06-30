import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo.png'; // Tu importación actual

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      {/* Usamos el contenedor para el logo */}
      <div className={styles.logoContainer}>
        <img src={logo} alt="Ivanna Store Logo" className={styles.logoImg} />
      </div>
      
      <nav>
        {/* Aseguramos que la lista tenga la clase 'menu' */}
        <ul className={styles.menu}>
        <li><a href="#inicio" className={styles.link}>Inicio</a></li>
        <li><a href="#sobre-mi" className={styles.link}>Sobre mí</a></li> {/* Asegúrate que diga #sobre-mi */}
        <li><a href="#tienda" className={styles.link}>Tienda</a></li>
        <li><a href="#contacto" className={styles.link}>Contacto</a></li> {/* Asegúrate que diga #contacto */}
      </ul>
      </nav>
    </header>
  );
};

export default Navbar;