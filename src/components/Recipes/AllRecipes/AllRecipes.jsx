import styles from "./allRecipes.module.css";
import { SmallRecipe } from "../../SmallRecipe";
import { SmallForm } from "../../Forms/SmallForm";
import { Select } from "../../Select/Select";
import { ButtonSmall } from "../../ButtonSmall/ButtonSmall";
import { useState, useEffect } from "react";
export function AllRecipes({ dishes, showHomePage }) {
  function handleHomePage() {
    showHomePage();
  }

  useEffect(() => {
    let isCancelled = false;

    fetch("/db/ingredients.json")
      .then((res) => {
        if (res.ok) {
          setError(null);
          return res.json();
        }

        throw new Error("Coś poszło nie tak...");
      })
      .then((res) => {
        if (isCancelled) {
          return;
        }
        setIngredients(res);
      })
      .catch((e) => {
        setError(e);
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState(null);

  const [filter, setFilter] = useState("Wszystkie");
  const filteredIngredients =
    filter === "Wszystkie"
      ? ingredients
      : ingredients.filter((ingredient) => ingredient.group === filter);

  /* coś nowego */

  const [choosenIngredients, setChoosenIngredients] = useState([]);

  function dodajDoListy(name) {
    setChoosenIngredients((prevState) => [...prevState, name]);
  }

  let filteredDishes = dishes;

  function zastosujFiltry() {
    console.log(filteredDishes);
    console.log("choosenIngredients[0]: " + choosenIngredients[0]);

    filteredDishes = dishes.filter((dish) =>
      dish.ingredients.includes("filet z kurczaka")
    );
    console.log("Nowa filtered: " + filteredDishes);

    console.log(filteredDishes);
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
        <div className={styles.ingredientsBox}>
          {error ? (
            <span>{error.message}</span>
          ) : (
            filteredIngredients.map(({ id, name }) => (
              <div key={id} className={styles.ingredient}>
                <input
                  type="checkbox"
                  id={name}
                  onChange={() => dodajDoListy(name)}
                />{" "}
                {name}
              </div>
            ))
          )}
        </div>

        <ButtonSmall onClick={zastosujFiltry}>Zastosuj filtr!</ButtonSmall>
        <div className={styles.listOfIngredients}>
          {choosenIngredients.map((ingredient) => (
            <p key={ingredient}>{ingredient}</p>
          ))}
        </div>
      </div>
      <div className={styles.recipesBox}>
        {filteredDishes.map((dish) => (
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
