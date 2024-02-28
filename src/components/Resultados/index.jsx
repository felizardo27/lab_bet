import Resultado from "../Resultado";
import styles from "./Resultados.module.css";

export default function Resultados() {
    return (
        <div className={styles.container_resultado}>
            <Resultado title={'Dúzias'} />
            <Resultado title={'Coluna'} />
        </div>
    )
}