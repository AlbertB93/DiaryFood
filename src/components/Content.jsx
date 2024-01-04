import styles from "../CSS/content.module.css";
import { SmallRecipe } from "./SmallRecipe";
import { dishes } from "../data/dishes.js";

export function Content({
  id,
  nameOfMeal,
  imgUrl,
  kcalOfMeal,
  fats,
  carbons,
  proteins,
  addToDayMenu,
}) {
  return (
    <div className={styles.content}>
      <p className={styles.shortDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        porro dolorem omnis perferendis aliquid placeat repudiandae consequatur
        aliquam cumque neque numquam dolore nihil, dicta distinctio sed
        veritatis debitis totam dolor.
      </p>

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
        />
      ))}

      <SmallRecipe
        id={id}
        title={nameOfMeal}
        imgUrl={imgUrl}
        kcal={kcalOfMeal}
        fats={fats}
        carbons={carbons}
        proteins={proteins}
        addToDayMenu={addToDayMenu}
      />
    </div>
  );
}
