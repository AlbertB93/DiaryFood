import styles from "./../CSS/singleRecipe.module.css";

export function SingleRecipe({ activeMeal, setShowMeals, setShowRecipe }) {
  function eventHandleCloseRecipe(e) {
    e.preventDefault();
    setShowMeals();
    setShowRecipe();
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
        <ul className={styles.ingredients}>
          Składniki:
          {activeMeal.ingredients.map((ingredient) => (
            <li key={Math.random()}> {ingredient}</li>
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
