import styles from "../CSS/dailyMenu.module.css";
import { ButtonSmall } from "./ButtonSmall/ButtonSmall";

export function DailyMenu({ summaryOfDay, listOfMeals, deleteFromMenu }) {
  function handleDeleteFromDailyMenu(id, kcal, fats, carbons, proteins) {
    deleteFromMenu(id, kcal, fats, carbons, proteins);
  }

  return (
    <div className={styles.day}>
      <div className={styles.imgContainer}>
        <img src="/felek.png" alt="Zdjęcie" className={styles.logoImg} />
      </div>
      <h3 className={styles.title}>Aktualny jadłospis</h3>

      {listOfMeals.map(({ id, img, title, kcal, fats, carbons, proteins }) => (
        <div key={id} className={styles.singleMeal}>
          <div className={styles.imgContainerMeal}>
            <img src={img} alt="Zdjęcie" className={styles.logoImgMeal} />
          </div>
          <p className={styles.titleMeal}>
            {title}{" "}
            <ButtonSmall
              onClick={() =>
                handleDeleteFromDailyMenu(id, kcal, fats, carbons, proteins)
              }
            >
              X{" "}
            </ButtonSmall>
          </p>

          <div className={styles.values}>
            <p className={styles.value}>kcal:{kcal}</p>
            <p className={styles.value}>T:{fats}g.</p>
            <p className={styles.value}>W:{carbons}g.</p>
            <p className={styles.value}>B:{proteins} g.</p>
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
