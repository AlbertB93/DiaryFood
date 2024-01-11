import { useState } from "react";
import styles from "./../CSS/newMeal.module.css";
import { ingredients } from "./../data/ingredients.js";
import { IngredientWeight } from "./IngredientWeight.jsx";
import { Select } from "./Select.jsx";

export function NewMeal({
  valuesOfMeal,
  setValuesOfMeal,
  showHomePage,
  addToDayMenu,
}) {
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
      (prevState.kcal += Math.round(kcal * ((numberOfPieces * weight) / 100))),
        (prevState.fats += Math.round(
          fats * ((numberOfPieces * weight) / 100)
        )),
        (prevState.carbons += Math.round(
          carbons * ((numberOfPieces * weight) / 100)
        )),
        (prevState.proteins += Math.round(
          proteins * ((numberOfPieces * weight) / 100)
        ));
      return { ...prevState };
    });
    setListOfIngredient((prevState) => {
      return [
        ...prevState,
        {
          title: name,
          img: img,
          kcal: Math.round(kcal * ((numberOfPieces * weight) / 100)),
          fats: Math.round(fats * ((numberOfPieces * weight) / 100)),
          carbons: Math.round(carbons * ((numberOfPieces * weight) / 100)),
          proteins: Math.round(proteins * ((numberOfPieces * weight) / 100)),
          weight: Math.round(numberOfPieces * weight),
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

  function handleHomePage() {
    showHomePage();
  }

  function handleAddToDay(kcal, fats, carbons, proteins) {
    const imgUrl = "./felek.png";
    addToDayMenu("Moja kompozycja", imgUrl, kcal, fats, carbons, proteins);
  }

  const [listOfIngredient, setListOfIngredient] = useState([]);
  const [numberOfGrams, setNumberOfGrams] = useState();
  const [numberOfPieces, setNumberOfPieces] = useState();

  /* Filtry*/

  const [filter, setFilter] = useState("Wszystkie");
  const filteredIngredients =
    filter === "Wszystkie"
      ? ingredients
      : ingredients.filter((ingredient) => ingredient.group === filter);

  return (
    <div className={styles.newMeal}>
      {!showIngredientsBox && (
        <IngredientWeight
          activeIngredient={activeIngredient}
          eventHandlerSetValuesOfMeal={eventHandlerSetValuesOfMeal}
          setNumberOfPieces={setNumberOfPieces}
        />
      )}
      {/*       <span className={styles.title}>
        Wybierz składniki do dania, które chcesz stworzyć, a następnie dodaj
        posiłek do jadłospisu!
      </span> */}
      <div className={styles.selectBox}>
        <Select filter={filter} setFilter={setFilter}></Select>
        <Select filter={filter} setFilter={setFilter}></Select>
        <button onClick={handleHomePage} className={styles.btn}>
          Strona główna
        </button>
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
        <button
          className={styles.btn}
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
        </button>
      </div>
      <div
        className={
          showIngredientsBox
            ? `${styles.ingredientsBox}`
            : `${styles.ingredientsBox} ${styles.onBlur}`
        }
      >
        {filteredIngredients.map((ingredient) => (
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
    </div>
  );
}
