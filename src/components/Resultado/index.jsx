import styles from "./Resultado.module.css";

export default function Resultado(props) {
  return (
    <div className={styles.container}>
      <div className={styles.container__title}>
        <p>Resultado | </p>
        <p className={styles.title}>{props.title}</p>
      </div>
      <div className={styles.container__resultado}></div>
    </div>
  );
}
