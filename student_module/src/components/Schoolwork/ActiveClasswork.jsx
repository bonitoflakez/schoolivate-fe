import ClassworkCard from "./ClassworkCard";

import PropTypes from "prop-types";

const ActiveClasswork = ({ classworkData, openViewWork }) => {
  return (
    <div className="active-work mt-4">
      <h3 className="text-xl">Active</h3>
      <hr className="border border-[--border] opacity-60" />
      <div className="active-classwork-list mt-6 grid grid-cols-2 gap-x-14 gap-y-6">
        {classworkData
          .filter((classwork) => classwork.completed === false)
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

ActiveClasswork.propTypes = {
  classworkData: PropTypes.array.isRequired,
  openViewWork: PropTypes.func.isRequired,
};

export default ActiveClasswork;
