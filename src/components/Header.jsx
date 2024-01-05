import { Form } from "./Form.jsx";
import styles from "../CSS/header.module.css";
export function Header() {
  return (
    <div className={styles.header}>
      <Form></Form>
      <p className={styles.shortDescription}>
        Nie masz pomysłu na śniadanie, obiad lub kolację? Chciałbyś ułożyć swój
        jadłospis pozanjąc od razu ilość zjedzonych kalorii podczas dnia?
        Szukasz inspiracji na zdrowe, odżywcze posiłki? Świetnie trafiłeś !
      </p>
    </div>
  );
}
