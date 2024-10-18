import styles from "../CSS/smallestRecipe.module.css";
import { ButtonSmall } from "./ButtonSmall/ButtonSmall";

export function SmallestRecipe({
  id,
  title,
  imgUrl,
  kcal,
  fats,
  carbons,
  proteins,
  servings,
  essentialIngredients,
  weightEssentialIngredients,
  description,
  addToDailyMenu,
  setActiveMeal,
  setShowAllRecipes,
  setShowRecipeSmall,
}) {
  function handleAddToDailyMenu(e) {
    e.preventDefault();
    addToDailyMenu(id, title, imgUrl, kcal, fats, carbons, proteins);
  }

  function handleShowRecipe(e) {
    e.preventDefault();
    setShowAllRecipes();
    setShowRecipeSmall();
    setActiveMeal((prevState) => {
      prevState.name = title;
      prevState.imgUrl = imgUrl;
      prevState.kcal = kcal;
      prevState.fats = fats;
      prevState.carbons = carbons;
      prevState.proteins = proteins;
      prevState.servings = servings;
      prevState.essentialIngredients = essentialIngredients;
      prevState.weightEssentialIngredients = weightEssentialIngredients;
      prevState.description = description;
      return { ...prevState };
    });
  }

  return (
    <div className={styles.smallestRecipe}>
      <h4>{title}</h4>
      <img src={imgUrl} alt="FOTKA" className={styles.imgContainer} />
      <div className={styles.values}>
        <p className={styles.singleValue}>{kcal} kcal. </p>
        <p className={styles.singleValue}>T: {fats}g.</p>
        <p className={styles.singleValue}>W: {carbons}g.</p>
        <p className={styles.singleValue}>B: {proteins} g.</p>
      </div>
      <div className={styles.buttons}>
        <ButtonSmall onClick={handleShowRecipe}>Pokaż przepis</ButtonSmall>
        <ButtonSmall onClick={handleAddToDailyMenu}>Dodaj</ButtonSmall>
      </div>
    </div>
  );
}
