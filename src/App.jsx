import Banner from "./components/Banner/index";
import Form from "./components/Form";
import Resultado from "./components/Resultado";
import styles from "./App.module.css"
import Historico from "./components/Historico";

function App() {
  return (
    <>
      <Banner />
      <Form />
      <div className={styles.container}>
        <Resultado title={'Dúzias'} />
        <Resultado title={'Coluna'} />
      </div>
      <Historico left={true} hist={'Dúzias'} />
      <Historico hist={'Colunas'} />
    </>
  );
}

export default App;
