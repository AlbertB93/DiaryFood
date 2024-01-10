import { useState } from "react";
import styles from "./../CSS/newMeal.module.css";
import { ingredients } from "./../data/ingredients.js";
import { IngredientWeight } from "./IngredientWeight.jsx";

export function NewMeal({ valuesOfMeal, setValuesOfMeal, showHomePage }) {
  const [showIngredientsBox, setShowIngredientsBox] = useState(true);
  const [activeIngredient, setActiveIngredient] = useState({
    name: "",
    img: "",
    kcal: 0,
    fats: 0,
    carbons: 0,
    proteins: 0,
    weight: 100,
  });

  function eventHandlerSetValuesOfMeal(
    name,
    img,
    kcal,
    fats,
    carbons,
    proteins,
    weight
  ) {
    setValuesOfMeal((prevState) => {
      prevState.kcal += kcal;
      prevState.fats += fats;
      prevState.carbons += carbons;
      prevState.proteins += proteins;
      return { ...prevState };
    });
    setListOfIngredient((prevState) => {
      return [
        ...prevState,
        {
          title: name,
          img: img,
          kcal: kcal * ((numberOfPieces * weight) / 100),
          fats: fats * ((numberOfPieces * weight) / 100),
          carbons: carbons * ((numberOfPieces * weight) / 100),
          proteins: proteins * ((numberOfPieces * weight) / 100),
          weight: numberOfPieces * weight,
        },
      ];
    });
    setShowIngredientsBox((prevState) => !prevState);
  }

  function handleActiveIngredient(
    name,
    img,
    kcal,
    fats,
    carbons,
    proteins,
    weight
  ) {
    setShowIngredientsBox((prevState) => !prevState);
    setActiveIngredient({ name, img, kcal, fats, carbons, proteins, weight });
  }

  const [listOfIngredient, setListOfIngredient] = useState([]);
  const [numberOfGrams, setNumberOfGrams] = useState();
  const [numberOfPieces, setNumberOfPieces] = useState();

  return (
    <div className={styles.newMeal}>
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
      <div className={styles.newMealComposition}>
        <p className={styles.titleNewMeal}>Twój stworzony posiłek:</p>
        {listOfIngredient.map((meal) => (
          <div key={meal.id} className={styles.singleIngredient}>
            <div className={styles.imgContainerMeal}>
              <img
                src={meal.img}
                alt="Zdjęcie"
                className={styles.logoImgMeal}
              />
            </div>
            <p className={styles.titleMeal}>{meal.title}</p>
            <p className={styles.value}>{meal.weight} g.</p>
            <div className={styles.values}>
              <p className={styles.value}>kcal:{meal.kcal}</p>
              <p className={styles.value}>T:{meal.fats}g.</p>
              <p className={styles.value}>W:{meal.carbons}g.</p>
              <p className={styles.value}>B:{meal.proteins} g.</p>
            </div>
          </div>
        ))}
        <h4 className={styles.titleNewMeal}>Podsumowanie:</h4>
        <h5>Wartość energetyncza: {valuesOfMeal.kcal} kcal</h5>
        <h5>Tłuszcze: {valuesOfMeal.fats} g.</h5>
        <h5>Węglowodany: {valuesOfMeal.carbons} g.</h5>
        <h5>Białka: {valuesOfMeal.proteins} g.</h5>
      </div>

      {showIngredientsBox ? (
        <div className={`${styles.ingredientsBox} ${styles.onBlur}`}>
          {ingredients.map((ingredient) => (
            <div key={ingredient.id} className={styles.ingredient}>
              <p className={styles.ingredientName}>{ingredient.name}</p>
              <img
                src={ingredient.image}
                alt="FOTKA"
                className={styles.imgContainer}
              />
              <div className={styles.ingredientValues}>
                <p>{ingredient.kcal} kcal. </p>
                <p>T: {ingredient.fats}g. </p>
                <p>W: {ingredient.carbons}g.</p>
                <p>B: {ingredient.proteins} g.</p>
              </div>
              <p className={styles.ingredientName}>
                1 szt. = {ingredient.weight}g.
              </p>
              <div className={styles.buttons}>
                <button
                  className={styles.btn}
                  onClick={() =>
                    handleActiveIngredient(
                      ingredient.name,
                      ingredient.image,
                      ingredient.kcal,
                      ingredient.fats,
                      ingredient.carbons,
                      ingredient.proteins,
                      ingredient.weight
                    )
                  }
                >
                  Dodaj!
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.ingredientsBox}>
          <IngredientWeight
            activeIngredient={activeIngredient}
            eventHandlerSetValuesOfMeal={eventHandlerSetValuesOfMeal}
            setNumberOfPieces={setNumberOfPieces}
          />
        </div>
      )}
    </div>
  );
}
