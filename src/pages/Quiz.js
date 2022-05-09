import QuestionCard from "components/QuestionCard";
import QuizContext from "context/QuizContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "styles/Quiz.module.scss";

const Quiz = () => {
  const { endpoint } = useContext(QuizContext);
  const navigate = useNavigate();

  useEffect(() => {
    endpoint === "" && navigate("/");
  }, []);

  return (
    <div className={styles.detail}>
      <div className={styles.question}>
        <QuestionCard
          category={"category"}
          type={"multiple"}
          question={"What is the capital city of New Zealand?"}
          correctAnswer={"correct_answer"}
          incorrectAnswers={["Auckland", "Christchurch", "Melbourne"]}
        />
      </div>
    </div>
  );
};

export default Quiz;
