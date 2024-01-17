import styles from "../CSS/dailyMenu.module.css";

export function DailyMenu({ summaryOfDay, listOfMeals }) {
  return (
    <div className={styles.day}>
      <div className={styles.imgContainer}>
        <img src="/felek.png" alt="Zdjęcie" className={styles.logoImg} />
      </div>
      <h3 className={styles.title}>Aktualny jadłospis</h3>

      {listOfMeals.map((meal) => (
        <div key={meal.id} className={styles.singleMeal}>
          <div className={styles.imgContainerMeal}>
            <img src={meal.img} alt="Zdjęcie" className={styles.logoImgMeal} />
          </div>
          <p className={styles.titleMeal}>{meal.title}</p>
          <div className={styles.values}>
            <p className={styles.value}>kcal:{meal.kcal}</p>
            <p className={styles.value}>T:{meal.fats}g.</p>
            <p className={styles.value}>W:{meal.carbons}g.</p>
            <p className={styles.value}>B:{meal.proteins} g.</p>
          </div>
        </div>
      ))}

      <h4 className={styles.title}>Podsumowanie:</h4>
      <h5>Wartość energetyncza: {summaryOfDay.kcal} kcal.</h5>
      <h5>Tłuszcze: {summaryOfDay.fats}g.</h5>
      <h5>Węglowodany: {summaryOfDay.carbons}g.</h5>
      <h5>Białka: {summaryOfDay.proteins}g.</h5>
    </div>
  );
}
