import { SmallRecipe } from "../../SmallRecipe";
import styles from "./allRecipes.module.css";

export function AllRecipes({ dishes }) {
  return (
    <div className={styles.allRecipes}>
      <div className={styles.headerAllRecipes}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
        molestias unde atque consectetur reiciendis assumenda eius beatae quo.
        Delectus veniam iure accusamus nihil, ipsa dolores sapiente omnis ex
        libero sunt?
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
