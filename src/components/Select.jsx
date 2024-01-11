import styles from "./../CSS/select.module.css";

export function Select({ filter, setFilter }) {
  return (
    <>
      <label htmlFor="ingredients">Wybierz grupę składników </label>
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
    </>
  );
}
