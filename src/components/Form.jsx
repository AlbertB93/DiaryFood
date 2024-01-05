import styles from "./../CSS/form.module.css";

export function Form() {
  return (
    <form action="" className={styles.form}>
      <label htmlFor="searchMeal" className={styles.label}>
        Wyszukaj potrawę
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
