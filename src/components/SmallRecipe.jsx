import styles from "../CSS/smallRecipe.module.css";
import { ButtonSmall } from "./ButtonSmall/ButtonSmall";

export function SmallRecipe({
  id,
  title,
  imgUrl,
  kcal,
  fats,
  carbons,
  proteins,
  ingredients,
  description,
  addToDailyMenu,
  setShowMeals,
  setShowRecipe,
  setActiveMeal,
}) {
  function handleAddToDailyMenu(e) {
    e.preventDefault();
    addToDailyMenu(id, title, imgUrl, kcal, fats, carbons, proteins);
  }

  function handleShowRecipe(e) {
    e.preventDefault();
    setShowMeals();
    setShowRecipe();
    setActiveMeal((prevState) => {
      prevState.name = title;
      prevState.imgUrl = imgUrl;
      prevState.kcal = kcal;
      prevState.fats = fats;
      prevState.carbons = carbons;
      prevState.proteins = proteins;
      prevState.ingredients = ingredients;
      prevState.description = description;
      return { ...prevState };
    });
  }

  return (
    <div className={styles.smallRecipe}>
      <h4>{title}</h4>
      <img src={imgUrl} alt="FOTKA" className={styles.imgContainer} />
      <h5>Wartości odżywcze:</h5>
      <p className={styles.values}>
        {kcal} kcal. T: {fats}g. W: {carbons}g. B: {proteins} g.
      </p>
      <div className={styles.buttons}>
        <ButtonSmall onClick={handleShowRecipe}>Pokaż przepis</ButtonSmall>
        <ButtonSmall onClick={handleAddToDailyMenu}>Dodaj</ButtonSmall>
      </div>
    </div>
  );
}
