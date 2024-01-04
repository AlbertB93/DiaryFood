import styles from "../CSS/menu.module.css";

/* import "../CSS/menu.css"; */

export function Menu() {
  return (
    <div className={styles.menu}>
      <h2 className={styles.title}>Menu</h2>
      <ul className={styles.list}>
        <li>Strona główna</li>
        <li>Śniadania</li>
        <li>Obiady</li>
        <li>Kolacje</li>
        <li>Przekąski</li>
        <li>Domowe fastoody</li>
        <li>Kalorie - nieistotne</li>
      </ul>
    </div>
  );
}
