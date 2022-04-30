import Header from "components/Header";
import styles from "styles/App.module.scss";
import { Routes, Route, Link } from "react-router-dom";
// PAGES
import Home from "pages/Home";
import Question from "pages/Question";
import Scoreboard from "pages/Scoreboard";

const App = () => {
  return (
    <div className={styles.app}>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question" element={<Question />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
