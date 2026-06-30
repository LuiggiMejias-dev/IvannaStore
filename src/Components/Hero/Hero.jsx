import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.title}>Arte tejido con amor</h1>
        <p className={styles.subtitle}>
          Descubre piezas únicas hechas a mano, especialmente para ti.
        </p>
        <button className={styles.ctaButton}>Ver Catálogo</button>
      </div>
    </section>
  );
};

export default Hero;