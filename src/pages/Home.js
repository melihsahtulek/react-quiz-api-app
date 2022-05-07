import Select from "components/Select";
import { useState } from "react";
import styles from "styles/Home.module.scss";
import useRequest from "hooks/useRequest";
import Loading from "components/Loading";
import Error from "components/Error";
import Button from "components/Button";

const Home = () => {
  const [selectsValues, setSelectsValues] = useState([]);
  const { data, isLoading, error } = useRequest("https://opentdb.com/api_category.php");
  const numberOfQuestions = [
    { id: 1, name: 5 },
    { id: 2, name: 10 },
    { id: 3, name: 15 },
    { id: 4, name: 20 },
    { id: 5, name: 25 },
    { id: 6, name: 30 },
    { id: 7, name: 35 },
    { id: 8, name: 40 },
    { id: 9, name: 45 },
    { id: 10, name: 50 },
  ];
  const difficulty = [
    { id: 1, name: "any difficulty" },
    { id: 2, name: "easy" },
    { id: 3, name: "medium" },
    { id: 4, name: "hard" },
  ];

  return !isLoading ? (
    <Loading />
  ) : error.message && error.name ? (
    <Error error={error} />
  ) : (
    <section className={styles.home}>
      <div className={styles.select}>
        <Select id="numberOfQuestions" title="Number of Questions" options={numberOfQuestions} selectsValues={selectsValues} setSelectsValues={setSelectsValues} />
      </div>

      <div className={styles.select}>
        <Select
          id="categories"
          title="select category"
          options={[{ id: data.trivia_categories.length, name: "any categorgy" }, ...data.trivia_categories]}
          selectsValues={selectsValues}
          setSelectsValues={setSelectsValues}
        />
      </div>

      <div className={styles.select}>
        <Select id="difficulty" title="select difficulty" options={difficulty} selectsValues={selectsValues} setSelectsValues={setSelectsValues} />
      </div>

      <div className={styles.startBtn}>
        <Button bgColor="#36ae7c" title="start quiz" />
      </div>
    </section>
  );
};

export default Home;
