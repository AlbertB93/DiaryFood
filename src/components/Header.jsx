import { Form } from "./Form.jsx";
import styles from "../CSS/header.module.css";
export function Header({ showNewMealComponent, showHomePage, showMeals }) {
  return (
    <div className={styles.header}>
      {showMeals ? (
        <p className={styles.shortDescription}>
          Nie masz pomysłu na śniadanie, obiad lub kolację? Chciałbyś ułożyć
          swój jadłospis pozanjąc od razu ilość zjedzonych kalorii podczas dnia?
          Szukasz inspiracji na zdrowe, odżywcze posiłki? Świetnie trafiłeś !
        </p>
      ) : null}
      <div className={styles.fields}>
        {showMeals ? (
          <>
            <Form></Form>
            <button onClick={showNewMealComponent} className={styles.btn}>
              Skoponuj swój posiłek!
            </button>
          </>
        ) : (
          <>
            {/*             <span className={styles.title}>
              Wybierz składniki do dania, które chcesz stworzyć, a następnie
              dodaj posiłek do jadłospisu!
            </span>
            <button onClick={showHomePage} className={styles.btn}>
              Strona główna
            </button> */}
          </>
        )}
      </div>
    </div>
  );
}
