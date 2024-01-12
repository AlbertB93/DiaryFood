import styles from "./buttonSmall.module.css";

export function ButtonSmall({ children, onClick }) {
  return (
    <button className={styles.btnSmall} onClick={onClick}>
      {children}
    </button>
  );
}
