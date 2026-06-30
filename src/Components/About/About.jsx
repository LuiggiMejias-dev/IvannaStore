import styles from './About.module.css';
import fotoArtesana from '../../assets/perfil.jpg'; // Asegúrate de tener una foto tuya aquí

export default function About() {
  return (
    <section className={styles.aboutSection} id="sobre-mi">
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImage}>
          <img src={fotoArtesana} alt="Ivanna tejiendo" />
        </div>
        <div className={styles.aboutContent}>
          <h2>Detrás de cada tejido</h2>
          <p className={styles.paragraph}>
            ¡Hola! Soy Ivanna. Todo comenzó con una aguja, un poco de lana y el deseo de crear algo que no solo abrigue, 
            sino que cuente una historia. En <strong>IvannaStore</strong>, cada pieza es tejida a mano con paciencia, 
            dedicación y mucho amor.
          </p>
          <p className={styles.paragraph}>
            Más que accesorios o prendas, busco crear compañeros para tus momentos más especiales. 
            Gracias por valorar el trabajo artesanal y permitirme ser parte de tu día a día.
          </p>
        </div>
      </div>
    </section>
  );
}