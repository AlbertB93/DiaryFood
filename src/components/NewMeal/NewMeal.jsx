import { useState } from "react";
import styles from "./newMeal.module.css";
import { ingredients } from "../../data/ingredients.js";
import { IngredientWeight } from "./IngredientWeight.jsx";
import { Select } from "../Select/Select.jsx";
import { Button } from "../Button/Button.jsx";
import { Form } from "../Form/Form.jsx";
import { ButtonSmall } from "../ButtonSmall/ButtonSmall.jsx";
import { NewMealComposition } from "./NewMealComposition.jsx";
import { NewIngredient } from "./NewIngredient.jsx";

export function NewMeal({
  valuesOfMeal,
  setValuesOfMeal,
  showHomePage,
  addToDayMenu,
}) {
  const [showIngredientsBox, setShowIngredientsBox] = useState(true);
  const [showIngredientWeight, setShowIngredientWeight] = useState(false);
  const [showNewIngredint, setshowNewIngredint] = useState(false);

  /* */
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
    if (numberOfPieces !== null) {
      setValuesOfMeal((prevState) => {
        (prevState.kcal += Math.round(
          kcal * ((numberOfPieces * weight) / 100)
        )),
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
      setListOfIngredients((prevState) => {
        return [
          ...prevState,
          {
            id: Math.random(),
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
      setNumberOfPieces(null);
    } else {
      setValuesOfMeal((prevState) => {
        (prevState.kcal += Math.round(kcal * (numberOfGrams / 100))),
          (prevState.fats += Math.round(fats * (numberOfGrams / 100))),
          (prevState.carbons += Math.round(carbons * (numberOfGrams / 100))),
          (prevState.proteins += Math.round(proteins * (numberOfGrams / 100)));

        return { ...prevState };
      });
      setListOfIngredients((prevState) => {
        return [
          ...prevState,
          {
            title: name,
            img: img,
            kcal: Math.round(kcal * (numberOfGrams / 100)),
            fats: Math.round(fats * (numberOfGrams / 100)),
            carbons: Math.round(carbons * (numberOfGrams / 100)),
            proteins: Math.round(proteins * (numberOfGrams / 100)),
            weight: numberOfGrams,
          },
        ];
      });
    }

    setShowIngredientsBox((prevState) => !prevState);
    setShowIngredientWeight((prevState) => !prevState);
  }

  function eventHandlerDeleteIngredient(id, kcal, fats, carbons, proteins) {
    setListOfIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient.id !== id)
    );

    setValuesOfMeal((prevState) => {
      prevState.kcal -= kcal;
      prevState.fats -= fats;
      prevState.carbons -= carbons;
      prevState.proteins -= proteins;
      return { ...prevState };
    });
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
    setShowIngredientWeight((prevState) => !prevState);
    setShowIngredientsBox((prevState) => !prevState);
    setActiveIngredient({ name, img, kcal, fats, carbons, proteins, weight });
  }

  function handleHomePage() {
    showHomePage();
  }

  function handleAddToDay(kcal, fats, carbons, proteins) {
    const imgUrl = "./felek.png";
    addToDayMenu("Moja kompozycja", imgUrl, kcal, fats, carbons, proteins);
    setListOfIngredients([]);
  }

  const [listOfIngredients, setListOfIngredients] = useState([]);
  const [numberOfGrams, setNumberOfGrams] = useState();
  const [numberOfPieces, setNumberOfPieces] = useState(null);

  /* Filtry*/

  const [filter, setFilter] = useState("Wszystkie");
  const filteredIngredients =
    filter === "Wszystkie"
      ? ingredients
      : ingredients.filter((ingredient) => ingredient.group === filter);

  const [inputValue, setInputValue] = useState("");

  /* Testujemy */

  /*   function addIngredient() {
    setShowIngredientsBox((prevState) => !prevState);
    setshowNewIngredint((prevState) => !prevState);
  } */

  return (
    <div className={styles.newMeal}>
      {showIngredientWeight && (
        <IngredientWeight
          activeIngredient={activeIngredient}
          eventHandlerSetValuesOfMeal={eventHandlerSetValuesOfMeal}
          setNumberOfPieces={setNumberOfPieces}
          setNumberOfGrams={setNumberOfGrams}
          setShowIngredientsBox={setShowIngredientsBox}
          setShowIngredientWeight={setShowIngredientWeight}
        />
      )}

      {showNewIngredint && (
        <NewIngredient
          setShowIngredientsBox={setShowIngredientsBox}
          setshowNewIngredint={setshowNewIngredint}
          ingredients={ingredients}
        />
      )}

      <NewMealComposition
        listOfIngredients={listOfIngredients}
        valuesOfMeal={valuesOfMeal}
        handleAddToDay={handleAddToDay}
        eventHandlerDeleteIngredient={eventHandlerDeleteIngredient}
      ></NewMealComposition>
      <div
        className={
          showIngredientsBox
            ? `${styles.ingredientsContent}`
            : `${styles.ingredientsContent} ${styles.onBlur}`
        }
      >
        {/* TESTUJEMY */}
        {/*      <Button onClick={addIngredient}>Dodaj składnik!</Button> */}
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
