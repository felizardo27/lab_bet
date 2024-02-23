import styles from "./Banner.module.css";
import Logo from "../../assets/Banner.png";

export default function Banner() {
  return (
    <div className={styles.container}>
      <img src={Logo} className={styles.Banner} />
    </div>
  );
}
