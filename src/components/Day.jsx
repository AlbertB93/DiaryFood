import styles from "../CSS/day.module.css";

export function Day({ summaryOfDay, nameOfMeal }) {
  return (
    <div className={styles.day}>
      <div className={styles.imgContainer}>
        <img src="/felek.png" alt="Zdjęcie" className={styles.logoImg} />
      </div>
      <h2 className={styles.title}>Aktualny jadłospis</h2>
      <p> {nameOfMeal}</p>

      <h2 className={styles.title}>Podsumowanie:</h2>
      {/*       <h3>Wartość energetyncza: {summaryOfDay.kcal} kcal</h3>
      <h3>Tłuszcze: {summaryOfDay.fats}g.</h3>
      <h3>Węglowodany: {summaryOfDay.carbons}g.</h3>
      <h3>Białka: {summaryOfDay.proteins}g.</h3> */}
    </div>
  );
}
