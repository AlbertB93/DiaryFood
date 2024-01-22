import styles from "../CSS/content.module.css";
import { SmallRecipe } from "./SmallRecipe";
import { dishes } from "../data/dishes.js";
import { Header } from "./Header.jsx";
import { SingleRecipe } from "./SingleRecipe.jsx";
import { useState } from "react";
import { NewMeal } from "./NewMeal/NewMeal.jsx";
import { AllRecipes } from "./Recipes/AllRecipes/AllRecipes.jsx";

const initialCurrentMeal = {
  id: 0,
  name: "",
  imgUrl: "",
  kcal: 0,
  fats: 0,
  carbons: 0,
  proteins: 0,
  ingredients: [],
  description: "",
};

export function Content({
  addToDailyMenu,
  showMeals,
  setShowMeals,
  showRecipe,
  setShowRecipe,
  showNewMeal,
  showNewMealComponent,
  showHomePage,
  valuesOfMeal,
  setValuesOfMeal,
  showAllRecipes,
  showAllRecipesComponent,
}) {
  const [activeMeal, setActiveMeal] = useState(initialCurrentMeal);
  const [recipesOnHomePage, setRecipesOnHomePage] = useState([1, 2, 3]);
  const [isBlur, setIsBlur] = useState(true);

  let activeDishes = dishes.filter(
    (meal) =>
      meal.id === recipesOnHomePage[0] ||
      meal.id === recipesOnHomePage[1] ||
      meal.id === recipesOnHomePage[2]
  );

  let a,
    b,
    c = 0;

  function changeIsBlur() {
    console.log("changeIsBlur");
    setIsBlur((prevState) => !prevState);
  }

  function setRandomRecipes() {
    console.log("setRandomRecipes");

    a = Math.floor(Math.random() * 14 + 1);
    b = Math.floor(Math.random() * 14 + 1);
    c = Math.floor(Math.random() * 14 + 1);
    while (a === b) {
      b = Math.floor(Math.random() * 14 + 1);
    }
    while (c === a || c === b) {
      c = Math.floor(Math.random() * 14 + 1);
    }
    console.log("A [" + a + "] B [" + b + "] C [" + c + "]");
    setRecipesOnHomePage([a, b, c]);
  }

  /*   setTimeout(changeIsBlur, 2000);
  setTimeout(setRandomRecipes, 4000); */
  /*   setTimeout(changeIsBlur, 6000); */
  /*  setInterval(setRandomRecipes, 5000); */

  return (
    <div className={styles.content}>
      {showMeals && (
        <Header
          showAllRecipesComponent={showAllRecipesComponent}
          showMeals={showMeals}
          showNewMealComponent={showNewMealComponent}
        ></Header>
      )}
      {showMeals && (
        <div
          className={
            isBlur ? `${styles.dishes}` : `${styles.dishes} ${styles.onBlur}`
          }
        >
          {activeDishes.map((dish) => (
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
              addToDailyMenu={addToDailyMenu}
              showMeals={showMeals}
              setShowMeals={setShowMeals}
              setShowRecipe={setShowRecipe}
              setActiveMeal={setActiveMeal}
            />
          ))}
        </div>
      )}
      {showRecipe && (
        <SingleRecipe
          activeMeal={activeMeal}
          setShowMeals={setShowMeals}
          setShowRecipe={setShowRecipe}
        ></SingleRecipe>
      )}
      {showNewMeal && (
        <NewMeal
          valuesOfMeal={valuesOfMeal}
          setValuesOfMeal={setValuesOfMeal}
          showHomePage={showHomePage}
          addToDailyMenu={addToDailyMenu}
        ></NewMeal>
      )}
      {showAllRecipes && (
        <AllRecipes dishes={dishes} showHomePage={showHomePage}></AllRecipes>
      )}
    </div>
  );
}
