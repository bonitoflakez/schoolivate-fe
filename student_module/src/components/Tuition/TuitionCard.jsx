import TextTruncate from "react-text-truncate";

import PropTypes from "prop-types";

const TuitionCard = ({ tuition, openModal }) => {
  return (
    <li
      key={tuition.id}
      className="mb-4 rounded-md p-2 ml-4 bg-[var(--accent-extra-light)]"
    >
      <div className="flex flex-grow items-start">
        <div>
          <h2 className="text-lg font-semibold">{tuition.teacher}</h2>
          <h4 className="text-sm ribbon">{tuition.session_type}</h4>
        </div>
        <div
          className="flex items-center gap-2 ml-auto"
          style={{
            fontSize: "var(--font-xx-sm)",
          }}
        >
          <div className="flex flex-col items-center">
            <p>Date</p>
            <p>{tuition.date}</p>
          </div>
          <div className="flex flex-col items-center">
            <p>Timing</p>
            <div>
              <p>
                {tuition.time_start} {tuition.time_end}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-end mt-2">
        <div>
          <p
            className="w-[15vw] opacity-60 font-normal"
            style={{
              fontSize: "var(--font-x-sm)",
            }}
          >
            <TextTruncate
              line={3}
              element="span"
              truncateText="…"
              text={tuition.description}
            />
          </p>
        </div>
        <div className="ml-auto">
          <button
            className="text-sm font-semibold text-[var(--primary-bg)] bg-[var(--accent-normal)] p-2 rounded-md"
            onClick={() => openModal(tuition)}
          >
            Book Now
          </button>
        </div>
      </div>
    </li>
  );
};

TuitionCard.propTypes = {
  tuition: PropTypes.object,
  openModal: PropTypes.func,
};

export default TuitionCard;
