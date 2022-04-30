import Header from "components/Header";
import styles from "styles/App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <header>
        <Header />
      </header>
      <main>
        <h3>main</h3>
      </main>
    </div>
  );
};

export default App;
