import styles from "./Pill.module.css";

export default function Pill({
  children = "Primary",
  onClick,
  type = "primary"
}) {
  const className =
    type === "secondary"
      ? `${styles.pill} ${styles.secondary}`
      : styles.pill;

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}
