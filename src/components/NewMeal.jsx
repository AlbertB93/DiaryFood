import styles from "./../CSS/newMeal.module.css";
import { ingredients } from "./../data/ingredients.js";

export function NewMeal({ valuesOfMeal, setValuesOfMeal }) {
  function eventHandlerSetValuesOfMeal(kcal, fats, carbons, proteins) {
    /*     e.preventDefault(); */
    setValuesOfMeal((prevState) => {
      prevState.kcal += kcal;
      prevState.fats += fats;
      prevState.carbons += carbons;
      prevState.proteins += proteins;
      return { ...prevState };
    });
  }

  return (
    <div className={styles.newMeal}>
      <span className={styles.title}>
        Wybierz składniki do dania, które chcesz stworzyć, a następnie dodaj
        posiłek do jadłospisu!
      </span>
      <div className={styles.selectBox}>
        <label htmlFor="ingredients">Wybierz grupę składników </label>
        <select name="ingredients" id="ingredients" className={styles.select}>
          <option value="default"> Pieczywo</option>
          <option>Mięso</option>
          <option>Wędliny</option>
          <option>Smarowidła</option>
          <option>Warzywa</option>
        </select>
      </div>
      <div className={styles.ingredientsBox}>
        {ingredients.map((ingredient) => (
          <div key={ingredient.id} className={styles.ingredient}>
            <p className={styles.ingredientName}>{ingredient.name}</p>
            <img
              src={ingredient.image}
              alt="FOTKA"
              className={styles.imgContainer}
            />

            {/*       <p className={styles.ingredientValues}>{ingredient.kcal} kcal. </p> */}
            <p className={styles.ingredientValues}>
              <p>{ingredient.kcal} kcal. </p>
              <p>T: {ingredient.fats}g. </p>
              <p>W: {ingredient.carbons}g.</p>
              <p>B: {ingredient.proteins} g.</p>
            </p>
            <p className={styles.ingredientName}>1 szt. = 80g.</p>
            <div className={styles.buttons}>
              <div className={styles.singleBtn}>
                <label htmlFor="pieces">Sztuk:</label>
                <input
                  type="text"
                  name="pieces"
                  id="pieces"
                  className={styles.input}
                />
                <button
                  className={styles.addBtn}
                  onClick={() =>
                    eventHandlerSetValuesOfMeal(
                      ingredient.kcal,
                      ingredient.fats,
                      ingredient.carbons,
                      ingredient.proteins
                    )
                  }
                >
                  Dodaj
                </button>
              </div>
              <div className={styles.singleBtn}>
                <label htmlFor="pieces">Gram: </label>
                <input
                  type="text"
                  name="pieces"
                  id="grams"
                  className={styles.input}
                />
                <button className={styles.addBtn}>Dodaj</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.newMealComposition}>
        <p className={styles.titleNewMeal}>Twój stworzony posiłek:</p>
        <h4 className={styles.titleNewMeal}>Podsumowanie:</h4>
        <h5>Wartość energetyncza: {valuesOfMeal.kcal} kcal</h5>
        <h5>Tłuszcze: {valuesOfMeal.fats} g.</h5>
        <h5>Węglowodany: {valuesOfMeal.carbons} g.</h5>
        <h5>Białka: {valuesOfMeal.proteins} g.</h5>
      </div>
    </div>
  );
}
