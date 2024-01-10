import { useState } from "react";
import styles from "./../CSS/newMeal.module.css";
import { ingredients } from "./../data/ingredients.js";
import { IngredientWeight } from "./IngredientWeight.jsx";

export function NewMeal({ valuesOfMeal, setValuesOfMeal, showHomePage }) {
  const [showTest, setShowTest] = useState(false);
  const [showIngredientsBox, setShowIngredientsBox] = useState(true);

  function eventHandlerSetValuesOfMeal(
    id,
    name,
    img,
    kcal,
    fats,
    carbons,
    proteins,
    numberOfPieces
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
          /*           id: Math.random(),
          title: newTitle,
          img: newImgUrl, */
          id: id,
          title: name,
          img: img,
          kcal: kcal,
          fats: fats,
          carbons: carbons,
          proteins: proteins,
          weight: numberOfPieces,
        },
      ];
    });

    setNumberOfPieces(0);
  }

  function handleShowTest(ingredientName) {
    setShowTest((prevState) => !prevState);
    setShowIngredientsBox((prevState) => !prevState);
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
            <div className={styles.ingredientValues}>
              <p>{ingredient.kcal} kcal. </p>
              <p>T: {ingredient.fats}g. </p>
              <p>W: {ingredient.carbons}g.</p>
              <p>B: {ingredient.proteins} g.</p>
            </div>
            <p className={styles.ingredientName}>1 szt. = 80g.</p>
            <div className={styles.buttons}>
              <button
                className={styles.btn}
                onClick={() => handleShowTest(ingredient.name)}
              >
                Dodaj!
              </button>
              {/*               {showTest && (
                <IngredientWeight
                  numberOfGrams={numberOfGrams}
                  setNumberOfGrams={setNumberOfGrams}
                  numberOfPieces={numberOfPieces}
                  setNumberOfPieces={setNumberOfPieces}
                  ingredientName={ingredient.name}
                ></IngredientWeight>
              )} */}
              {/*             <div className={styles.singleBtn}>
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
                      ingredient.id,
                      ingredient.name,
                      ingredient.image,
                      ingredient.kcal,
                      ingredient.fats,
                      ingredient.carbons,
                      ingredient.proteins,
                      numberOfPieces
                    )
                  }
                >
                  Dodaj
                </button>
              </div> */}
              {/*               <div className={styles.singleBtn}>
                <label htmlFor="pieces">Gram: </label>
                <input
                  type="text"
                  name="pieces"
                  id="grams"
                  className={styles.input}
                  value={numberOfGrams}
                  onChange={(e) => {
                    setNumberOfGrams(e.target.value);
                  }}
                />
                <button
                  className={styles.addBtn}
                  onClick={() =>
                    eventHandlerSetValuesOfMeal(
                      ingredient.id,
                      ingredient.name,
                      ingredient.image,
                      ingredient.kcal,
                      ingredient.fats,
                      ingredient.carbons,
                      ingredient.proteins,
                      numberOfGrams
                    )
                  }
                >
                  Dodaj
                </button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
