import styles from "./ingredientWeight.module.css";
import { ButtonSmall } from "../ButtonSmall/ButtonSmall";
import { InputOfPieces } from "../Inputs/InputOfPieces";
import { InputOfGrams } from "../Inputs/InputOfGrams";

export function IngredientWeight({
  numberOfPieces,
  setNumberOfPieces,
  numberOfGrams,
  setNumberOfGrams,
  activeIngredient,
  eventHandlerSetValuesOfMeal,
  setShowIngredientsBox,
  setShowIngredientWeight,
}) {
  function closeWindow() {
    setShowIngredientsBox((prevState) => !prevState);
    setShowIngredientWeight((prevState) => !prevState);
  }

  return (
    <div className={styles.IngredientWeight}>
      <div className={styles.singleIngredient}>
        <p className={styles.titleMeal}>{activeIngredient.name}</p>
        <ButtonSmall onClick={() => closeWindow()}>X</ButtonSmall>
        <div className={styles.imgContainerMeal}>
          <img
            src={activeIngredient.img}
            alt="Zdjęcie"
            className={styles.logoImgMeal}
          />
        </div>

        <p>1szt. = {activeIngredient.weight}g.</p>
        <p>Wartości na 100g:</p>
        <div className={styles.values}>
          <p className={styles.value}>kcal:{activeIngredient.kcal}</p>
          <p className={styles.value}>T:{activeIngredient.fats}g.</p>
          <p className={styles.value}>W:{activeIngredient.carbons}g.</p>
          <p className={styles.value}>B:{activeIngredient.proteins} g.</p>
        </div>
      </div>
      <InputOfPieces
        numberOfPieces={numberOfPieces}
        setNumberOfPieces={setNumberOfPieces}
        eventHandlerSetValuesOfMeal={eventHandlerSetValuesOfMeal}
        activeIngredient={activeIngredient}
      >
        Sztuk
      </InputOfPieces>
      <InputOfGrams
        numberOfGrams={numberOfGrams}
        setNumberOfGrams={setNumberOfGrams}
        eventHandlerSetValuesOfMeal={eventHandlerSetValuesOfMeal}
        activeIngredient={activeIngredient}
      >
        Gram
      </InputOfGrams>
    </div>
  );
}
