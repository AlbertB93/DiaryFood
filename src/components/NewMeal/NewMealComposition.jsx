import styles from "./newMealComposition.module.css";
import { ButtonSmall } from "../ButtonSmall/ButtonSmall";

export function NewMealComposition({
  listOfIngredients,
  valuesOfMeal,
  handleAddToDay,
  eventHandlerDeleteIngredient,
}) {
  function deleteIngredient(id, kcal, fats, carbons, proteins) {
    eventHandlerDeleteIngredient(id, kcal, fats, carbons, proteins);
  }

  return (
    <div className={styles.newMealComposition}>
      <p className={styles.titleNewMeal}>Twój stworzony posiłek:</p>
      {listOfIngredients.map(
        ({ id, img, title, weight, kcal, fats, carbons, proteins }) => (
          <div key={id} className={styles.singleIngredient}>
            <div className={styles.imgContainerMeal}>
              <img src={img} alt="Zdjęcie" className={styles.logoImgMeal} />
            </div>
            <p className={styles.titleMeal}>{title}</p>
            <ButtonSmall
              onClick={() =>
                deleteIngredient(id, kcal, fats, carbons, proteins)
              }
            >
              X{" "}
            </ButtonSmall>
            <div className={styles.values}>
              <p className={styles.value}> Waga: {weight}g. </p>
              <p className={styles.value}>kcal:{kcal}</p>
              <p className={styles.value}>T:{fats}g.</p>
              <p className={styles.value}>W:{carbons}g.</p>
              <p className={styles.value}>B:{proteins}g.</p>
            </div>
          </div>
        )
      )}
      <h4 className={styles.titleNewMeal}>Podsumowanie:</h4>
      <h5>Wartość energetyncza: {valuesOfMeal.kcal} kcal</h5>
      <h5>Tłuszcze: {valuesOfMeal.fats} g.</h5>
      <h5>Węglowodany: {valuesOfMeal.carbons} g.</h5>
      <h5>Białka: {valuesOfMeal.proteins} g.</h5>
      <ButtonSmall
        onClick={() =>
          handleAddToDay(
            valuesOfMeal.kcal,
            valuesOfMeal.fats,
            valuesOfMeal.carbons,
            valuesOfMeal.proteins
          )
        }
      >
        Dodaj posiłek do jadłospisu!
      </ButtonSmall>
    </div>
  );
}
