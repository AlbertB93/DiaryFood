import { Form } from "./Form/Form.jsx";
import styles from "../CSS/header.module.css";
import { Button } from "./Button/Button.jsx";
export function Header({
  showNewMealComponent,
  showMeals,
  showAllRecipesComponent,
}) {
  return (
    <div className={styles.header}>
      {showMeals ? (
        <div className={styles.shortDescription}>
          <p>Nie masz pomysłu na śniadanie, obiad lub kolację?</p>
          <p>
            Chciałbyś ułożyć swój jadłospis pozanjąc od razu ilość zjedzonych
            kalorii podczas dnia?
          </p>
          <p>Szukasz inspiracji na zdrowe, odżywcze posiłki?</p>
          <p>Świetnie trafiłeś !</p>
        </div>
      ) : null}
      <div className={styles.fields}>
        <>
          <Button onClick={showAllRecipesComponent}>Kategorie posiłków</Button>
          <Form> Wyszukaj potrawę: </Form>
          <Button onClick={showNewMealComponent}>Skoponuj swój posiłek!</Button>
        </>
      </div>
    </div>
  );
}
