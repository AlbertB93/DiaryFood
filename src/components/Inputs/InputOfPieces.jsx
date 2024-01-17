import { ButtonSmall } from "../ButtonSmall/ButtonSmall";
import styles from "./inputs.module.css";
export function InputOfPieces({
  children,
  numberOfPieces,
  setNumberOfPieces,
  eventHandlerSetValuesOfMeal,
  activeIngredient,
}) {
  return (
    <div className={styles.inputBox}>
      <label htmlFor="pieces">{children}:</label>
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
      <ButtonSmall
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
      </ButtonSmall>
    </div>
  );
}
