import styles from "../CSS/smallRecipe.module.css";
import { ButtonSmall } from "./ButtonSmall/ButtonSmall";

export function SmallRecipe({
  title,
  imgUrl,
  kcal,
  fats,
  carbons,
  proteins,
  ingredients,
  addToDayMenu,
  setShowMeals,
  setShowRecipe,
  setCurrentMeal,
}) {
  function addToDailyMenu(e) {
    e.preventDefault();
    addToDayMenu(title, imgUrl, kcal, fats, carbons, proteins);
  }

  function eventHandleShowRecipe(e) {
    e.preventDefault();
    setShowMeals();
    setShowRecipe();
    setCurrentMeal((prevState) => {
      prevState.name = title;
      prevState.imgUrl = imgUrl;
      prevState.kcal = kcal;
      prevState.fats = fats;
      prevState.carbons = carbons;
      prevState.proteins = proteins;
      prevState.ingredinets = ingredients;
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
        {/*         <button className={styles.btn} onClick={eventHandleShowRecipe}>
          Pokaż przepis
        </button> */}
        <ButtonSmall onClick={eventHandleShowRecipe}>Pokaż przepis</ButtonSmall>
        <ButtonSmall onClick={addToDailyMenu}>Dodaj</ButtonSmall>
        {/*         <button className={styles.btn} onClick={addToDailyMenu}>
          Dodaj{" "}
        </button> */}
      </div>
    </div>
  );
}
