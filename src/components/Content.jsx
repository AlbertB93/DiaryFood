import styles from "../CSS/content.module.css";
import { SmallRecipe } from "./SmallRecipe";
import { dishes } from "../data/dishes.js";
import { Header } from "./Header.jsx";
import { SingleRecipe } from "./SingleRecipe.jsx";
import { useState } from "react";
import { NewMeal } from "./NewMeal/NewMeal.jsx";

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
}) {
  const [activeMeal, setActiveMeal] = useState(initialCurrentMeal);

  return (
    <div className={styles.content}>
      {showMeals && (
        <Header
          showNewMealComponent={showNewMealComponent}
          showHomePage={showHomePage}
          showMeals={showMeals}
        ></Header>
      )}
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
    </div>
  );
}
