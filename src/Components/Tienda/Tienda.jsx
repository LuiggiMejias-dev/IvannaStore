import styles from './Tienda.module.css';
import imgBufanda from '../../assets/bufanda.jpg';
import imgGorro from '../../assets/gorro.jpg';
import imgManta from '../../assets/manta.jpg';



export default function Tienda() {
  const productos = [
    { id: 1, nombre: 'Bufanda Artesanal', precio: '$25', img: imgBufanda },
    { id: 2, nombre: 'Gorro de Lana', precio: '$15', img: imgGorro },
    { id: 3, nombre: 'Manta Cálida', precio: '$45', img: imgManta },
  ];

  return (
    <section className={styles.tiendaSection} id="tienda">
      <h2>Nuestra Colección</h2>
      <div className={styles.gridContainer}>
        {productos.map((prod) => (
          <div key={prod.id} className={styles.productCard}>
            <img src={prod.img} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p className={styles.precio}>{prod.precio}</p>
            <button className={styles.buyButton}>Ver más</button>
          </div>
        ))}
      </div>
    </section>
  );
}