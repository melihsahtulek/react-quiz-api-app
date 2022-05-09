import Select from "components/Select";
import { useContext, useState } from "react";
import styles from "styles/Home.module.scss";
import useRequest from "hooks/useRequest";
import Loading from "components/Loading";
import Error from "components/Error";
import Button from "components/Button";
import { useNavigate } from "react-router-dom";
import QuizContext from "context/QuizContext";

const Home = () => {
  const { data, isLoading, error } = useRequest("https://opentdb.com/api_category.php");
  const navigate = useNavigate();
  const { setEndpoint } = useContext(QuizContext);
  const [selectsValues, setSelectsValues] = useState([
    // init values
    {
      name: "amount",
      value: 10,
      value_id: null,
    },
    {
      name: "categories",
      value: null,
      value_id: null,
    },
    {
      name: "difficulty",
      value: null,
      value_id: null,
    },
    {
      name: "type",
      value: "any",
      value_id: null,
    },
  ]);

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
    { id: 1, name: "easy" },
    { id: 2, name: "medium" },
    { id: 3, name: "hard" },
  ];
  const type = [
    { id: 1, name: "multiple" },
    { id: 2, name: "boolean" },
  ];

  const startTheQuiz = (event) => {
    event.preventDefault();
    let url = `https://opentdb.com/api.php?`;
    for (const obj of selectsValues) {
      if (obj.value !== null) {
        if (obj.name === "categories") {
          url += `category=${obj.value_id}&`;
        } else {
          if (obj.value !== "any") {
            url += `${obj.name}=${obj.value}&`;
          }
        }
      }
    }

    setEndpoint(url);
    navigate("/quiz");
  };

  return !isLoading ? (
    <Loading />
  ) : error.message && error.name ? (
    <Error error={error} />
  ) : (
    <section className={styles.home}>
      <div className={styles.select}>
        <Select id="amount" title="Number of Questions" options={numberOfQuestions} selectsValues={selectsValues} setSelectsValues={setSelectsValues} />
      </div>

      <div className={styles.select}>
        <Select id="categories" title="category" options={data.trivia_categories} selectsValues={selectsValues} setSelectsValues={setSelectsValues} />
      </div>

      <div className={styles.select}>
        <Select id="difficulty" title="difficulty" options={difficulty} selectsValues={selectsValues} setSelectsValues={setSelectsValues} />
      </div>

      <div className={styles.select}>
        <Select id="type" title="type" options={type} selectsValues={selectsValues} setSelectsValues={setSelectsValues} />
      </div>

      <div className={styles.startBtn}>
        <Button bgColor="#36ae7c" title="start quiz" event={startTheQuiz} />
      </div>
    </section>
  );
};

export default Home;
