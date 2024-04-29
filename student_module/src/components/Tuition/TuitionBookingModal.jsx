import Modal from "react-modal";
import { X } from "@phosphor-icons/react";

import PropTypes from "prop-types";

const TuitionBookingModal = ({
  modalIsOpen,
  closeModal,
  selectedTuition,
  calculateSessionDuration,
}) => {
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
      border: "2px solid var(--accent-light)",
    },
    overlay: {
      backgroundColor: "none",
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Book Tuition"
      style={modalStyles}
    >
      {selectedTuition && (
        <div className="modal-content w-[40vw] ">
          <div className="top-section flex items-start">
            <div className="flex flex-col">
              <h2 className="text-3xl font-semibold">
                {selectedTuition.teacher}'s Session
              </h2>
              <div className="px-4 py-2 bg-[var(--accent-normal)] w-fit rounded-xl mt-2">
                <h3 className="text-xl font-medium text-[var(--primary-bg)]">
                  {selectedTuition.session_type}
                </h3>
              </div>
            </div>
            <button onClick={closeModal} className="ml-auto">
              <X size={32} weight="bold" />
            </button>
          </div>
          <div className="description mt-2">
            <p className="text-xl font-light opacity-60">
              {selectedTuition.description}
            </p>
            <div className="date-time flex items-center gap-2 mt-2">
              <div className="date px-2 py-1 border-2 border-[var(--border)] rounded-lg">
                <h3 className="text-lg opacity-60">
                  Date - {selectedTuition.date}
                </h3>
              </div>
              <div className="time px-2 py-1 border-2 border-[var(--border)] rounded-lg">
                <h3 className="text-lg opacity-60">
                  Timing - {selectedTuition.time_start} -{" "}
                  {selectedTuition.time_start}
                </h3>
              </div>
            </div>
          </div>
          <div className="note mt-2 opacity-60">
            <p className="text-sm">*Note</p>
            <p className="text-sm ml-2">- {selectedTuition.note}</p>
          </div>
          <div className="pricing-section mt-12">
            <div className="flex items-center">
              <h3 className="text-lg opacity-60 font-light">
                {calculateSessionDuration(
                  selectedTuition.time_start,
                  selectedTuition.time_end
                )}{" "}
                Teaching Session
              </h3>
              <h3 className="text-lg opacity-60 font-light ml-auto">
                Rs {selectedTuition.price}/-
              </h3>
            </div>
            <hr className="w-full my-1 border-[var(--border)]" />
            <div className="flex items-center">
              <h3 className="text-2xl font-bold">Total Price</h3>
              <h3 className="text-2xl font-bold ml-auto">
                Rs {selectedTuition.price}/-
              </h3>
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <button className="text-3xl font-semibold text-[var(--primary-bg)] bg-[var(--accent-normal)] px-12 py-2 rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
};

TuitionBookingModal.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func,
  selectedTuition: PropTypes.object,
  calculateSessionDuration: PropTypes.func,
};

export default TuitionBookingModal;
