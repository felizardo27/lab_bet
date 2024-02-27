import Banner from "./components/Banner/index";
import Form from "./components/Form";
import Resultado from "./components/Resultado";
import styles from "./App.module.css"
import Historico from "./components/Historico";

function App() {
  return (
    <>
      <Banner />
      <div className={styles.container}>
        <div className={styles.container_form_result}>
          <Form />
          <div className={styles.container_resultado}>
            <Resultado title={'Dúzias'} />
            <Resultado title={'Coluna'} />
          </div>
        </div>
        <div className={styles.container_historico}>
          <Historico left={true} hist={'Dúzias'} />
          <Historico hist={'Colunas'} />
        </div>
      </div>
    </>
  );
}

export default App;
