import styles from "./allRecipes.module.css";
import { SmallRecipe } from "../../SmallRecipe";
import { SmallForm } from "../../Forms/SmallForm";
import { Select } from "../../Select/Select";
import { ButtonSmall } from "../../ButtonSmall/ButtonSmall";
import { useState, useEffect } from "react";
import { useGetData } from "../../../hooks/useGetData";

let filteredDishes = [];
export function AllRecipes({ showHomePage }) {
  const [filter, setFilter] = useState("Wszystkie");
  const [choosenIngredients, setChoosenIngredients] = useState([]);
  const { data: ingredients, error } = useGetData("/db/ingredients.json");
  const {
    data: dishes,
    setData: setDishes,
    setError,
  } = useGetData("/db/dishes.json");

  const { data: dishesCopy, setData: setDishesCopy } =
    useGetData("/db/dishes.json");

  const filteredIngredients =
    filter === "Wszystkie"
      ? ingredients
      : ingredients.filter((ingredient) => ingredient.group === filter);

  /* coś nowego */

  function handleHomePage() {
    showHomePage();
  }

  /*   setChoosenIngredients((prevState) =>
    prevState.filter((name) => name.id !== id)
  ); */

  function handleAddToChoosenIngredients(name) {
    setChoosenIngredients((prevState) => [...prevState, name]);
    console.log(choosenIngredients);
  }

  function setFiltersIngredients() {
    let isContainsAllIngredients = true;
    dishes.forEach((dish) => {
      isContainsAllIngredients = true;
      choosenIngredients.forEach((ingredient) => {
        if (!dish.ingredients.includes(ingredient)) {
          isContainsAllIngredients = false;
        }
      });
      if (isContainsAllIngredients) {
        filteredDishes.push(dish);
      }
    });
    setDishes((prevState) => (prevState = filteredDishes));
  }

  function clearFiltersIngredients(e) {
    setChoosenIngredients(() => []);
    setDishes((prevState) => (prevState = dishesCopy));
    filteredDishes = [];
    let ingredients = document
      .getElementById("ingredientsBox")
      .getElementsByTagName("input");
    Array.from(ingredients).forEach((ing) => (ing.checked = false));
  }

  return (
    <div className={styles.allRecipes}>
      <div className={styles.headerAllRecipes}>
        <div className={styles.headerAllRecipesText}>
          <p> Zostało Ci kilka produktów i nie wiesz co ugotować?</p>
          <p>
            Wybierz składniki, które masz, a poniżej zostaną wyświetlone
            przepisy zawierające te składniki !
          </p>
        </div>
        <div className={styles.headerAllRecipesFilters}>
          <div className={styles.select}>
            <Select>Wybierz kategorie przepisu</Select>
          </div>
          <div className={styles.form}>
            <SmallForm>Do ilu kalorii?</SmallForm>
          </div>

          <div className={styles.button}></div>
          <ButtonSmall onClick={handleHomePage}>Strona główna </ButtonSmall>
        </div>
      </div>
      <div className={styles.listOfIngredients}>
        <Select filter={filter} setFilter={setFilter}>
          {" "}
          Wybierz grupę składników:
        </Select>
        <div className={styles.ingredientsBox} id="ingredientsBox">
          {error ? (
            <span>{error.message}</span>
          ) : (
            filteredIngredients.map(({ id, name }) => (
              <div key={id} className={styles.ingredient}>
                <input
                  type="checkbox"
                  id={name}
                  onChange={() => handleAddToChoosenIngredients(name)}
                  className={styles.testowy}
                />{" "}
                <label htmlFor="name">{name}</label>
              </div>
            ))
          )}
        </div>
        <ButtonSmall onClick={clearFiltersIngredients}>
          Wyczyść filtr
        </ButtonSmall>
        <ButtonSmall onClick={setFiltersIngredients}>
          Zastosuj filtr!
        </ButtonSmall>
      </div>
      <div className={styles.recipesBox}>
        {dishes.map((dish) => (
          <SmallRecipe
            key={dish.id}
            id={dish.id}
            title={dish.title}
            imgUrl={dish.imageState}
            kcal={dish.kcal}
            fats={dish.fats}
            carbons={dish.carbons}
            proteins={dish.proteins}
            ingredients={dish.ingredients}
            description={dish.description}
            /*               addToDailyMenu={addToDailyMenu}
              showMeals={showMeals}
              setShowMeals={setShowMeals}
              setShowRecipe={setShowRecipe}
              setActiveMeal={setActiveMeal} */
          />
        ))}
      </div>
    </div>
  );
}
