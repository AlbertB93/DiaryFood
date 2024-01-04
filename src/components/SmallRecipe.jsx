import styles from "../CSS/smallRecipe.module.css";

export function SmallRecipe({
  title,
  imgUrl,
  kcal,
  fats,
  carbons,
  proteins,
  addToDayMenu,
}) {
  return (
    <div className={styles.smallRecipe}>
      <h3>{title}</h3>
      <img src={imgUrl} alt="FOTKA" className={styles.imgContainer} />
      <h4>Wartości odżywcze:</h4>
      <p>
        {kcal} kcal. T: {fats}g. W: {carbons}g. B: {proteins} g.
      </p>
      <div className={styles.buttons}>
        <button className={styles.btn}>Pokaż przepis</button>
        <button className={styles.btn} onClick={addToDayMenu}>
          Dodaj{" "}
        </button>
      </div>
    </div>
  );
}
