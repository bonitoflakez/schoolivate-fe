import QuizCard from "./QuizCard";

import PropTypes from "prop-types";

const PendingQuizzes = ({ quizData, handleIsQuizSelected }) => {
  return (
    <div className="pending-quizzes mt-4">
      <h3 className="text-xl">Pending</h3>
      <hr className="border border-[--border] my-1" />
      <div className="pending-quiz-list grid grid-cols-2 gap-x-14 gap-y-6 mt-4">
        {quizData
          .filter((quiz) => !quiz.completed)
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

PendingQuizzes.propTypes = {
  quizData: PropTypes.array.isRequired,
  handleIsQuizSelected: PropTypes.func.isRequired,
};

export default PendingQuizzes;
