import styles from "./select.module.css";

export function Select({ filter, setFilter }) {
  return (
    <div className={styles.selectContainer}>
      <label htmlFor="ingredients" className={styles.label}>
        Wybierz grupę składników:
      </label>
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles.select}
      >
        <option value="Wszystkie"> Wszystkie</option>
        <option value="pieczywo">Pieczywo</option>
        <option value="mieso">Mięso</option>
        <option value="owoce">Owoce</option>
        <option value="warzywa">Warzywa</option>
      </select>
    </div>
  );
}
