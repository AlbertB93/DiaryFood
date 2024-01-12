import styles from "./form.module.css";

export function Form({ children, inputValue, setInputValue }) {
  return (
    <form
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className={styles.form}
    >
      <label htmlFor="searchMeal" className={styles.label}>
        {children}
      </label>
      <input
        type="text"
        name="searchMeal"
        id="searchMeal"
        className={styles.input}
      />
    </form>
  );
}
