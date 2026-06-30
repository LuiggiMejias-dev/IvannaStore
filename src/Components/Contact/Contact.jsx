import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.contactSection}>
      <h2>Hablemos de tu pedido</h2>
      <p>¿Tienes alguna idea especial en mente? ¿Quieres personalizar un tejido?</p>
      <p>Cuéntame, estaré encantada de crear algo único para ti.</p>

      <div className={styles.contactOptions}>
        <a href="https://wa.me/TUNUMERO" className={styles.btnWhatsApp}>WhatsApp</a>
        <a href="mailto:tuemail@ejemplo.com" className={styles.btnEmail}>Enviar Email</a>
      </div>
    </section>
  );
}