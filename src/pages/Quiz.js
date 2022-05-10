import Error from "components/Error";
import Loading from "components/Loading";
import QuestionCard from "components/QuestionCard";
import QuizContext from "context/QuizContext";
import useRequest from "hooks/useRequest";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "styles/Quiz.module.scss";

const Quiz = () => {
  const { endpoint, quizQuestions, setQuizQuestions } = useContext(QuizContext);
  const { data, isLoading, error } = useRequest(endpoint);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    endpoint === "" && navigate("/");

    setQuizQuestions(data.results);
  }, [endpoint, data, isLoading, error]);

  return !isLoading ? (
    <Loading />
  ) : error.message && error.name ? (
    <Error error={error} />
  ) : (
    quizQuestions &&
    quizQuestions.length > 0 && (
      <div className={styles.detail}>
        <div className={styles.question}>
          <QuestionCard
            category={quizQuestions[index].category}
            type={quizQuestions[index].type}
            question={quizQuestions[index].question}
            correctAnswer={quizQuestions[index].correct_answer}
            incorrectAnswers={quizQuestions[index].incorrect_answers}
            index={index}
            setIndex={setIndex}
          />
        </div>
      </div>
    )
  );
};

export default Quiz;
