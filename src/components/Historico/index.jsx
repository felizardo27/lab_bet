import styles from './Historico.module.css';

export default function Historico(props) {

    function direction(left) {
        if (left) {
            return <p className={styles.container__p_left}>Histórico de {props.hist}</p>
        } else {
            return <p className={styles.container__p_right}>Histórico de {props.hist}</p>
        }
    }

    return (
        <div className={styles.container}>
            {direction(props.left)}
            <input type="text" className={styles.input} />
        </div>
    );
}