import styles from "./select.module.css";

export function SelectCalories({ children, filter, setFilter }) {
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
        <option value="small">Mniej niż 300kcal</option>
        <option value="medium"> 300-500 kcal.</option>
        <option value="big">500-800 kcal.</option>
        <option value="very big">Więcej niż 800kcal</option>
      </select>
    </div>
  );
}
