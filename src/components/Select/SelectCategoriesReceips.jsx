import styles from "./select.module.css";

export function SelectCategoriesReceips({ children, filter, setFilter }) {
  return (
    <div className={styles.selectContainer}>
      <label htmlFor="ingredients" className={styles.label}>
        {children}
      </label>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles.select}
      >
        <option value="Wszystkie"> Wszystkie</option>
        <option value="breakfast">Śniadania</option>
        <option value="dinner">Obiady</option>
        <option value="supper">Kolacje</option>
        <option value="dessert">Desery</option>
      </select>
    </div>
  );
}
