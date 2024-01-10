import styles from "./../CSS/ingredientWeight.module.css";

export function IngredientWeight({
  numberOfPieces,
  setNumberOfPieces,
  activeIngredient,
  eventHandlerSetValuesOfMeal,
}) {
  return (
    <div className={styles.IngredientWeight}>
      <div className={styles.singleIngredient}>
        <div className={styles.imgContainerMeal}>
          <img
            src={activeIngredient.img}
            alt="Zdjęcie"
            className={styles.logoImgMeal}
          />
        </div>
        <p className={styles.titleMeal}>{activeIngredient.name}</p>
        <p>1szt. = {activeIngredient.weight}g.</p>
        <p>Wartości na 100g:</p>

        <div className={styles.values}>
          <p className={styles.value}>kcal:{activeIngredient.kcal}</p>
          <p className={styles.value}>T:{activeIngredient.fats}g.</p>
          <p className={styles.value}>W:{activeIngredient.carbons}g.</p>
          <p className={styles.value}>B:{activeIngredient.proteins} g.</p>
        </div>
      </div>
      <div className={styles.singleBtn}>
        <label htmlFor="pieces">Sztuk:</label>
        <input
          type="number"
          name="pieces"
          id="pieces"
          placeholder=""
          className={styles.input}
          value={numberOfPieces}
          onChange={(e) => {
            setNumberOfPieces(e.target.value);
          }}
        />
        <button
          className={styles.addBtn}
          onClick={() =>
            eventHandlerSetValuesOfMeal(
              activeIngredient.name,
              activeIngredient.img,
              activeIngredient.kcal,
              activeIngredient.fats,
              activeIngredient.carbons,
              activeIngredient.proteins,
              activeIngredient.weight,
              numberOfPieces
            )
          }
        >
          Dodaj
        </button>
      </div>
    </div>
  );
}
