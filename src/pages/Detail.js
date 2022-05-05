import QuestionCard from "components/QuestionCard";
import styles from "styles/Detail.module.scss";

const Detail = () => {
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

export default Detail;
