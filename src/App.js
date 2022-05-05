import Header from "components/Header";
import styles from "styles/App.module.scss";
import { Routes, Route, Link } from "react-router-dom";
// PAGES
import Home from "pages/Home";
import Detail from "pages/Detail";
import Scoreboard from "pages/Scoreboard";
// CONTEXT
import { SelectProvider } from "context/SelectContext";

const App = () => {
  return (
    <SelectProvider>
      <div className={styles.app}>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/scoreboard" element={<Scoreboard />} />
          </Routes>
        </main>
      </div>
    </SelectProvider>
  );
};

export default App;
