import Banner from "./components/Banner/index";
import Form from "./components/Form";
import Resultado from "./components/Resultado";
import styles from "./App.module.css"

function App() {
  return (
    <>
      <Banner />
      <Form />
      <div className={styles.container}>
        <Resultado title={'Dúzias'} />
        <Resultado title={'Coluna'} />
      </div>
    </>
  );
}

export default App;
