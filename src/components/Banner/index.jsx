import styles from "./Banner.module.css";
import BannerMobile from "../../assets/BANNER-MOBILE-ALE-CRUZ.png";
import BannerTable from "../../assets/BANNER-TABLET-ALE-CRUZ.png";
import BannerDesktop from "../../assets/BANNER-DESKTOP-ALE-CRUZ.png";


export default function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.mobile}>
        <img src={BannerMobile} className={styles.Banner} />
      </div>
      <div className={styles.tablet}>
        <img src={BannerTable} className={styles.Banner} />
      </div>
      <div className={styles.desktop}>
        <img src={BannerDesktop} className={styles.Banner} />
      </div>
      {/* <div className={styles.Banner}></div> */}
    </div>
  );
}
