import styles from "./allRecipes.module.css";
import { SmallRecipe } from "../../SmallRecipe";
import { SmallForm } from "../../Forms/SmallForm";
import { Select } from "../../Select/Select";
import { ButtonSmall } from "../../ButtonSmall/ButtonSmall";
import { useState, useEffect } from "react";

let filteredDishes = [];
export function AllRecipes({ showHomePage }) {
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
  const [choosenIngredients, setChoosenIngredients] = useState([]);
  const [dishes, setDishes] = useState([]);

  const filteredIngredients =
    filter === "Wszystkie"
      ? ingredients
      : ingredients.filter((ingredient) => ingredient.group === filter);

  /* pobranie dishes */

  useEffect(() => {
    let isCancelled = false;

    fetch("/db/dishes.json")
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
        setDishes(res);
      })
      .catch((e) => {
        setError(e);
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  /* coś nowego */

  function handleAddToChoosenIngredients(name) {
    setChoosenIngredients((prevState) => [...prevState, name]);
  }

  function setFiltersIngredients() {
    /*     console.log(arrDishes); */
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
                  onChange={() => handleAddToChoosenIngredients(name)}
                  className={styles.testowy}
                />{" "}
                <label htmlFor="name">{name}</label>
              </div>
            ))
          )}
        </div>

        <ButtonSmall onClick={setFiltersIngredients}>
          Zastosuj filtr!
        </ButtonSmall>

        <ButtonSmall onClick={setFiltersIngredients}>Wyczyść filtr</ButtonSmall>
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
