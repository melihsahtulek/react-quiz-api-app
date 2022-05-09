import { createContext, useState } from "react";

const QuizContext = createContext();

export const QuizContextProvider = ({ children }) => {
  const [endpoint, setEndpoint] = useState("");
  const [quizQuestions, setQuizQuestions] = useState([]);

  const values = {
    endpoint,
    setEndpoint,
    quizQuestions,
    setQuizQuestions,
  };

  return <QuizContext.Provider value={values}>{children}</QuizContext.Provider>;
};

export default QuizContext;
