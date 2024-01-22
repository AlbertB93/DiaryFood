import styles from "./allRecipes.module.css";
import { SmallRecipe } from "../../SmallRecipe";
import { SmallForm } from "../../Forms/SmallForm";
import { Button } from "../../Button/Button";
import { Select } from "../../Select/Select";
export function AllRecipes({ dishes, showHomePage }) {
  function handleHomePage() {
    showHomePage();
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

        <Select> Wybierz grupę składników:</Select>
        <Button onClick={handleHomePage}>Strona główna </Button>
      </div>
      <div className={styles.categories}>
        <SmallForm>Do ilu kalorii?</SmallForm>
        <Select>Wybierz kategorie przepisu</Select>
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
