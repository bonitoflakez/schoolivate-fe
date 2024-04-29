import { Clock } from "@phosphor-icons/react";
import PropTypes from "prop-types";

const QuizCard = ({ quiz, handleIsQuizSelected }) => {
  return (
    <div key={quiz.id} className="bg-[--accent-extra-light] p-2 rounded-lg">
      <div className="card-top">
        <h3 className="text-xl">{quiz.title}</h3>
      </div>
      <div
        className={`difficulty-pill bg-[--green-pill] w-fit px-2 mt-1 rounded-3xl text-[--primary-bg]`}
      >
        <p className="text-sm">Difficulty: {quiz.difficulty}</p>
      </div>
      <div className="card-bottom flex items-center justify-between mt-6">
        <div className="flex items-center gap-1">
          <Clock size={18} weight="bold" />{" "}
          <h3 className="text-sm font-light">Duration: {quiz.duration}</h3>
        </div>
        <div>
          <button
            className="text-[--primary-bg] bg-[--accent-normal] px-2 py-1 rounded-lg"
            onClick={() => handleIsQuizSelected(quiz)}
          >
            {quiz.completed ? "View Score" : "Start Quiz"}
          </button>
        </div>
      </div>
    </div>
  );
};

QuizCard.propTypes = {
  quiz: PropTypes.object,
  handleIsQuizSelected: PropTypes.func.isRequired,
};

export default QuizCard;
