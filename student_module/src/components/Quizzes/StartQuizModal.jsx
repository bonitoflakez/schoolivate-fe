import Modal from "react-modal";
import PropTypes from "prop-types";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "1rem",
    background: "var(--accent-extra-light)",
  },
  overlay: {
    backgroundColor: "none",
  },
};

const StartQuizModal = ({
  startQuiz,
  closeModal,
  selectedQuiz,
  setStartQuiz,
}) => {
  return (
    <Modal
      isOpen={!startQuiz}
      onRequestClose={closeModal}
      contentLabel="Start Quiz"
      style={modalStyles}
    >
      <div className="modal-content w-[25vw] h-fit">
        <div className="top-section flex flex-col items-center justify-center h-full m-4">
          {selectedQuiz.completed ? (
            <>
              <h3 className="text-center font-bold text-3xl">Result</h3>
              <h3 className="text-center font-light text-3xl">
                Marks: {selectedQuiz.secured_score}/{selectedQuiz.max_score}
              </h3>
              <button
                className="text-xl px-2 py-1 mt-12 text-[--primary-bg] bg-[--accent-normal] rounded-lg"
                onClick={() => setStartQuiz(true)}
              >
                View Quiz
              </button>
            </>
          ) : (
            <>
              <h3 className="text-center text-3xl">
                Do you want to start the quiz?
              </h3>
              <button
                className="text-xl px-2 py-1 mt-12 text-[--primary-bg] bg-[--accent-normal] rounded-lg"
                onClick={() => setStartQuiz(true)}
              >
                Start Quiz
              </button>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};

StartQuizModal.propTypes = {
  startQuiz: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
  selectedQuiz: PropTypes.object.isRequired,
  setStartQuiz: PropTypes.func.isRequired,
};

export default StartQuizModal;
