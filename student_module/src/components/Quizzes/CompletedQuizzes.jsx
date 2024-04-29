import PropTypes from "prop-types";
import QuizCard from "./QuizCard";

const CompletedQuizzes = ({ quizData, handleIsQuizSelected }) => {
  return (
    <div className="completed-quizzes mt-4">
      <h3 className="text-xl">Pending</h3>
      <hr className="border border-[--border] my-1" />
      <div className="completed-quiz-list grid grid-cols-2 gap-x-14 gap-y-6 mt-4">
        {quizData
          .filter((quiz) => quiz.completed)
          .map((quiz) => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              handleIsQuizSelected={handleIsQuizSelected}
            />
          ))}
      </div>
    </div>
  );
};

CompletedQuizzes.propTypes = {
  quizData: PropTypes.array.isRequired,
  handleIsQuizSelected: PropTypes.func.isRequired,
};

export default CompletedQuizzes;
