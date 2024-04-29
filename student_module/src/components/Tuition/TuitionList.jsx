import TuitionCard from "./TuitionCard";

import PropTypes from "prop-types";

const TuitionList = ({ TuitionData, selectedTeacher, openModal }) => {
  return (
    <div className="tuition-listing px-12 py-8">
      <ul className="grid grid-cols-2 gap-4">
        {TuitionData.filter(
          (tuition) =>
            selectedTeacher === "" || tuition.teacher === selectedTeacher
        ).map((tuition) => (
          <TuitionCard
            key={tuition.id}
            tuition={tuition}
            openModal={openModal}
          />
        ))}
      </ul>
    </div>
  );
};

TuitionList.propTypes = {
  TuitionData: PropTypes.array,
  selectedTeacher: PropTypes.string,
  openModal: PropTypes.func,
};

export default TuitionList;
