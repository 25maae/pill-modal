import styles from "./Pill.module.css";

export default function Pill({ children = "Primary", onClick }) {
  return (
    <button type="button" className={styles.pill} onClick={onClick}>
      {children}
    </button>
  );
}
