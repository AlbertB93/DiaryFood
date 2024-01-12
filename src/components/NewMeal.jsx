import { useState } from "react";
import styles from "./../CSS/newMeal.module.css";
import { ingredients } from "./../data/ingredients.js";
import { IngredientWeight } from "./IngredientWeight.jsx";
import { Select } from "./Select/Select.jsx";
import { Button } from "./Button/Button.jsx";
import { Form } from "./Form/Form.jsx";
import { ButtonSmall } from "./ButtonSmall/ButtonSmall.jsx";

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

  const [inputValue, setInputValue] = useState("");
  return (
    <div className={styles.newMeal}>
      {!showIngredientsBox && (
        <IngredientWeight
          activeIngredient={activeIngredient}
          eventHandlerSetValuesOfMeal={eventHandlerSetValuesOfMeal}
          setNumberOfPieces={setNumberOfPieces}
        />
      )}

      <div className={styles.newMealComposition}>
        <p className={styles.titleNewMeal}>Twój stworzony posiłek:</p>
        {listOfIngredient.map(
          ({ id, img, title, weight, kcal, fats, carbons, proteins }) => (
            <div key={Math.random()} className={styles.singleIngredient}>
              <div className={styles.imgContainerMeal}>
                <img src={img} alt="Zdjęcie" className={styles.logoImgMeal} />
              </div>
              <p className={styles.titleMeal}>{title}</p>
              <p className={styles.value}>{weight} g.</p>
              <div className={styles.values}>
                <p className={styles.value}>kcal:{kcal}</p>
                <p className={styles.value}>T:{fats}g.</p>
                <p className={styles.value}>W:{carbons}g.</p>
                <p className={styles.value}>B:{proteins} g.</p>
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
      <div
        className={
          showIngredientsBox
            ? `${styles.ingredientsContent}`
            : `${styles.ingredientsContent} ${styles.onBlur}`
        }
      >
        <div className={styles.selectBox}>
          <Select filter={filter} setFilter={setFilter}></Select>
          <Form inputValue={inputValue} setInputValue={setInputValue}>
            Wyszukaj składnik:{" "}
          </Form>
          <Button onClick={handleHomePage}>Strona główna </Button>
        </div>
        <div className={styles.ingredientsBox}>
          {filteredIngredients
            .filter((ingredient) => ingredient.name.includes(inputValue))
            .map(
              ({ id, name, image, kcal, fats, carbons, proteins, weight }) => (
                <div key={id} className={styles.ingredient}>
                  <div className={styles.ingredientHeader}>
                    <p className={styles.ingredientName}>{name}</p>
                    <ButtonSmall
                      onClick={() =>
                        handleActiveIngredient(
                          name,
                          image,
                          kcal,
                          fats,
                          carbons,
                          proteins,
                          weight
                        )
                      }
                    >
                      +
                    </ButtonSmall>
                  </div>
                  <img
                    src={image}
                    alt="FOTKA"
                    className={styles.imgContainer}
                  />
                  <div className={styles.ingredientValues}>
                    <p>{kcal} kcal. </p>
                    <p>T: {fats}g. </p>
                    <p>W: {carbons}g.</p>
                    <p>B: {proteins} g.</p>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
}
