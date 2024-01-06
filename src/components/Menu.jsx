import styles from "../CSS/menu.module.css";

export function Menu({ setShowHeader, setShowMeals, setShowNewMeal }) {
  function showNewMealComponent(e) {
    e.preventDefault();
    setShowHeader();
    setShowMeals();
    setShowNewMeal();
  }

  function showHomePage(e) {
    e.preventDefault();
    setShowHeader();
    setShowMeals();
    setShowNewMeal();
  }

  return (
    <div className={styles.menu}>
      <h2 className={styles.title}>Menu</h2>
      <ul className={styles.list}>
        <button onClick={showHomePage}>Strona główna</button>
        <li>Śniadania</li>
        <li>Obiady</li>
        <li>Kolacje</li>
        <li>Przekąski</li>
        <li>Domowe fastoody</li>
        <li>Kalorie - nieistotne</li>
        <li>
          <button onClick={showNewMealComponent}>Skoponuj swój posiłek!</button>
        </li>
      </ul>
    </div>
  );
}
