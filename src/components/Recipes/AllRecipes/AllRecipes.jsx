import styles from "./allRecipes.module.css";
import { SmallestRecipe } from "../../SmallestRecipe";
import { SingleRecipeSmall } from "../../SingleRecipeSmall";
import { Select } from "../../Select/Select";
import { SelectCategoriesReceips } from "../../Select/SelectCategoriesReceips";
import { SelectCalories } from "../../Select/SelectCalories";
import { ButtonSmall } from "../../ButtonSmall/ButtonSmall";
import { useState } from "react";
import { useGetData } from "../../../hooks/useGetData";

let filteredDishes = [];
export function AllRecipes({
  showHomePage,
  addToDailyMenu,
  setActiveMeal,
  activeMeal,
}) {
  const [showAllRecipes, setShowAllRecipes] = useState(true);
  const [showRecipeSmall, setShowRecipeSmall] = useState(false);
  const [filterIngredients, setFilterIngredients] = useState("Wszystkie");
  const [filterRecipes, setFilterRecipes] = useState("Wszystkie");
  const [filterCalories, setFilterCalories] = useState("Wszystkie");
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
    filterIngredients === "Wszystkie"
      ? ingredients
      : ingredients.filter(
          (ingredient) => ingredient.group === filterIngredients
        );

  const filteredReceips =
    filterRecipes === "Wszystkie"
      ? dishes
      : dishes.filter((dish) => dish.group === filterRecipes);

  const filteredCalories =
    filterCalories === "Wszystkie"
      ? filteredReceips
      : filteredReceips.filter(
          (dish) => dish.groupOfCalories === filterCalories
        );

  function handleHomePage() {
    showHomePage();
  }

  function handleAddToChoosenIngredients(name) {
    console.log("Dodaje składnik do tablicy");
    setChoosenIngredients((prevState) => [...prevState, name]);
    /*  setChoosenIngredients((prevState) => [...prevState, ", "]); */
    console.log(choosenIngredients);
  }

  function setFiltersIngredients() {
    let isContainsAllIngredients = true;
    dishes.forEach((dish) => {
      isContainsAllIngredients = true;
      choosenIngredients.forEach((ingredient) => {
        if (!dish.essentialIngredients.includes(ingredient)) {
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
    setChoosenIngredients((prevState) => (prevState = []));
    console.log("Wyczyszczone?");
    console.log(choosenIngredients);
    setDishes((prevState) => (prevState = dishesCopy));
    filteredDishes = [];
    let ingredients = document
      .getElementById("ingredientsBox")
      .getElementsByTagName("input");
    Array.from(ingredients).forEach((ing) => (ing.checked = false));
  }

  return (
    <div className={styles.allRecipes}>
      <div className={styles.listOfIngredients}>
        <Select filter={filterIngredients} setFilter={setFilterIngredients}>
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

      <div className={styles.headerAllRecipes}>
        <div className={styles.headerAllRecipesText}>
          <p> Zostało Ci kilka produktów i nie wiesz co ugotować?</p>
          <p>
            Wybierz składniki, które masz, a poniżej zostaną wyświetlone
            przepisy zawierające te składniki !
          </p>
        </div>
        <div className={styles.headerAllRecipesFilters}>
          <ButtonSmall onClick={handleHomePage}>Strona główna </ButtonSmall>
          <div className={styles.select}>
            <SelectCategoriesReceips
              filter={filterRecipes}
              setFilter={setFilterRecipes}
            >
              Wybierz kategorie przepisu
            </SelectCategoriesReceips>
          </div>
          <div className={styles.select}>
            <SelectCalories
              filter={filterCalories}
              setFilter={setFilterCalories}
            >
              Wybierz kaloryczność
            </SelectCalories>
          </div>
        </div>
      </div>

      <div className={styles.recipesBox}>
        {showAllRecipes && (
          <div className={styles.recipes}>
            <div className={styles.choosenIngredients}>
              Wybrane składniki: {choosenIngredients}
            </div>
            {filteredCalories.map((dish) => (
              <SmallestRecipe
                key={dish.id}
                id={dish.id}
                title={dish.title}
                imgUrl={dish.imageState}
                kcal={dish.kcal}
                fats={dish.fats}
                carbons={dish.carbons}
                proteins={dish.proteins}
                servings={dish.servings}
                essentialIngredients={dish.essentialIngredients}
                weightEssentialIngredients={dish.weightEssentialIngredients}
                description={dish.description}
                addToDailyMenu={addToDailyMenu}
                setActiveMeal={setActiveMeal}
                setShowAllRecipes={() =>
                  setShowAllRecipes((prevState) => !prevState)
                }
                setShowRecipeSmall={() =>
                  setShowRecipeSmall((prevState) => !prevState)
                }
              />
            ))}
          </div>
        )}
        {showRecipeSmall && (
          <SingleRecipeSmall
            activeMeal={activeMeal}
            setShowRecipeSmall={setShowRecipeSmall}
            setShowAllRecipes={setShowAllRecipes}
          ></SingleRecipeSmall>
        )}
      </div>
    </div>
  );
}
