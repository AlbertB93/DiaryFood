import styles from "../CSS/content.module.css";
import { SmallRecipe } from "./SmallRecipe";
import { dishes } from "../data/dishes.js";
import { Header } from "./Header.jsx";
import { SingleRecipe } from "./SingleRecipe.jsx";
import { useState } from "react";
import { NewMeal } from "./NewMeal.jsx";

const initialCurrentMeal = {
  name: "",
  imgUrl: "",
  kcal: 0,
  fats: 0,
  carbons: 0,
  proteins: 0,
  ingredients: [],
};

export function Content({
  addToDayMenu,
  showMeals,
  setShowMeals,
  showRecipe,
  setShowRecipe,
  showNewMeal,
  showNewMealComponent,
  showHomePage,
  valuesOfMeal,
  setValuesOfMeal,
  /*   listOfIngredients,
  setListOfIngredient */
}) {
  const [currentMeal, setCurrentMeal] = useState(initialCurrentMeal);

  return (
    <div className={styles.content}>
      <Header
        showNewMealComponent={showNewMealComponent}
        showHomePage={showHomePage}
        showMeals={showMeals}
      ></Header>
      {showMeals && (
        <div className={styles.dishes}>
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
              addToDayMenu={addToDayMenu}
              showMeals={showMeals}
              setShowMeals={setShowMeals}
              setShowRecipe={setShowRecipe}
              setCurrentMeal={setCurrentMeal}
            />
          ))}
        </div>
      )}
      {showRecipe && (
        <SingleRecipe
          currentMeal={currentMeal}
          setShowMeals={setShowMeals}
          setShowRecipe={setShowRecipe}
        ></SingleRecipe>
      )}
      {showNewMeal && (
        <NewMeal
          valuesOfMeal={valuesOfMeal}
          setValuesOfMeal={setValuesOfMeal}
          showHomePage={showHomePage}
          addToDayMenu={addToDayMenu}
        ></NewMeal>
      )}
    </div>
  );
}
