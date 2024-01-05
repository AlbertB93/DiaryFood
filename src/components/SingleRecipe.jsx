import styles from "./../CSS/singleRecipe.module.css";

export function SingleRecipe({ currentMeal }) {
  return (
    <div className={styles.singleRecipe}>
      <div className={styles.imgAndIngredients}>
        <div className={styles.imgContainerMeal}>
          <img
            src={currentMeal.imgUrl}
            alt="Zdjęcie"
            className={styles.logoImgMeal}
          />
        </div>
        <ul className={styles.ingredients}>
          Składniki:
          <li>Makaron 60g.</li>
          <li>Jajka 40g.</li>
          <li>Ser 30g.</li>
          <li>Oliwa z oliwek 20g.</li>
          <li>Jajka 40g.</li>
          <li>Ser 30g.</li>
          <li>Oliwa z oliwek 20g.</li>
        </ul>
      </div>
      <div className={styles.content}>
        <p className={styles.titleMeal}>{currentMeal.name}</p>
        <div className={styles.values}>
          Wartości odżywcze:
          <p className={styles.value}> {currentMeal.kcal} kcal</p>
          <p className={styles.value}>T: {currentMeal.fats} g.</p>
          <p className={styles.value}>W: {currentMeal.carbons} g.</p>
          <p className={styles.value}>B: {currentMeal.proteins} g.</p>
        </div>
        <span className={styles.howToCook}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          tempore asperiores tempora minus recusandae fuga in eveniet porro
          pariatur ipsa dolores eum, a harum odio voluptate dolore, magni iure
          nulla? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
          delectus repudiandae sit nam, quam voluptatum laboriosam animi
          temporibus tempore expedita porro. Officia suscipit nesciunt cum vel,
          voluptas magni voluptates nostrum. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ipsa labore quos quas quibusdam est
          repudiandae iure reprehenderit dolorum laboriosam. Aliquam hic itaque
          ducimus possimus neque magni libero fuga quas repellat.
        </span>
      </div>
    </div>
  );
}

{
  /* <div className={styles.header}>
<div className={styles.imgContainerMeal}>
  <img src={meal.img} alt="Zdjęcie" className={styles.logoImgMeal} />
</div>
<p className={styles.titleMeal}>{meal.title}</p>
<div className={styles.values}>
  <p className={styles.value}>kcal:{meal.kcal}</p>
  <p className={styles.value}>T:{meal.fats}g.</p>
  <p className={styles.value}>W:{meal.carbons}g.</p>
  <p className={styles.value}>B:{meal.proteins} g.</p>
</div>
</div> */
}
