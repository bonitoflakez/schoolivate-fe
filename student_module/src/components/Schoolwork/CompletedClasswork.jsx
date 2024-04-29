import ClassworkCard from "./ClassworkCard";

import PropTypes from "prop-types";

const CompletedClasswork = ({ classworkData, openViewWork }) => {
  return (
    <div className="completed-work mt-4">
      <h3 className="text-xl">Completed</h3>
      <hr className="border border-[--border] opacity-60" />
      <div className="completed-classwork-list mt-6 grid grid-cols-2 gap-x-14 gap-y-6">
        {classworkData
          .filter((classwork) => classwork.completed === true)
          .map((classwork) => (
            <ClassworkCard
              key={classwork.id}
              classwork={classwork}
              openViewWork={openViewWork}
            />
          ))}
      </div>
    </div>
  );
};

CompletedClasswork.propTypes = {
  classworkData: PropTypes.array.isRequired,
  openViewWork: PropTypes.func.isRequired,
};

export default CompletedClasswork;
