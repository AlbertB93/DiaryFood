import styles from "./../CSS/singleRecipeSmall.module.css";

export function SingleRecipeSmall({
  activeMeal,
  setShowAllRecipes,
  setShowRecipeSmall,
}) {
  function eventHandleCloseRecipe(e) {
    e.preventDefault();
    setShowAllRecipes(true);
    setShowRecipeSmall(false);
  }

  return (
    <div className={styles.singleRecipe}>
      <div className={styles.imgAndIngredients}>
        <div className={styles.imgContainerMeal}>
          <img
            src={activeMeal.imgUrl}
            alt="Zdjęcie"
            className={styles.logoImgMeal}
          />
        </div>
        <span className={styles.noOfServings}>
          Liczba porcji: {activeMeal.servings}{" "}
        </span>
        <ul className={styles.ingredients}>
          {activeMeal.essentialIngredients.map((ingredient) => (
            <li key={Math.random()}> {ingredient}</li>
          ))}
        </ul>
        <ul className={styles.ingredientsWeight}>
          {activeMeal.weightEssentialIngredients.map((weight) => (
            <li key={Math.random()}> {weight}</li>
          ))}
        </ul>
      </div>
      <div className={styles.content}>
        <div className={styles.titleMeal}>
          <p className={styles.title}> {activeMeal.name}</p>
          <button className={styles.btn} onClick={eventHandleCloseRecipe}>
            X
          </button>
        </div>
        <div className={styles.values}>
          Wartości odżywcze:
          <p className={styles.value}> {activeMeal.kcal} kcal</p>
          <p className={styles.value}>T: {activeMeal.fats} g.</p>
          <p className={styles.value}>W: {activeMeal.carbons} g.</p>
          <p className={styles.value}>B: {activeMeal.proteins} g.</p>
        </div>
        <span className={styles.howToCook}>{activeMeal.description}</span>
      </div>
    </div>
  );
}
