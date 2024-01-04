import styles from "../CSS/day.module.css";

export function Day() {
  return (
    <div className={styles.day}>
      <div className={styles.imgContainer}>
        <img src="/felek.png" alt="Zdjęcie" className={styles.logoImg} />
      </div>
      <h2 className={styles.title}>Aktualny jadłospis</h2>
      <h2 className={styles.title}>Podsumowanie:</h2>
      <h3>Wartość energetyncza: 2000kcal</h3>
      <h3>Tłuszcze: 80g.</h3>
      <h3>Węglowodany: 280g.</h3>
      <h3>Białka: 160g.</h3>
    </div>
  );
}
