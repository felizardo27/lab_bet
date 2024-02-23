import styles from "./Form.module.css";
import Coin from "../../assets/coin.png";

export default function Form() {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <img className={styles.coin} src={Coin} />
        <div className={styles.container__description}>
          <p className={styles.description__p1}>Insira</p>
          <p className={styles.description__p2}>SEU NÚMERO</p>
        </div>
      </div>

      <div className={styles.form}>
        <input type="number" name="number" id="number" className={styles.input}/>
        <a href="#" className={styles.button}>Enviar</a>
        <a href="#" className={styles.button}>Limpar</a>
      </div>
    </div>
  );
}
