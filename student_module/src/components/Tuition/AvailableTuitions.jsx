import { CaretDown } from "@phosphor-icons/react";

import PropTypes from "prop-types";

const AvailableTuitions = ({ handleTeacherChange, TuitionData }) => {
  return (
    <div className="before-tuition-listing flex flex-col items-center justify-center">
      <h3 className="text-3xl font-medium">Available Tuitions</h3>
      <div className="input-field mt-4 w-[60%]">
        <div className="relative">
          <select
            className="p-2 outline-none text-xl font-light bg-[var(--secondary-bg)] border border-[var(--border)] rounded-lg w-full appearance-none"
            onChange={handleTeacherChange}
          >
            <option value={""}>All Teachers</option>
            {TuitionData.map((tuition) => (
              <option key={tuition.id} value={tuition.teacher}>
                {tuition.teacher}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <CaretDown size={32} weight="light" />
          </div>
        </div>
      </div>
    </div>
  );
};

AvailableTuitions.propTypes = {
  handleTeacherChange: PropTypes.func.isRequired,
  TuitionData: PropTypes.array.isRequired,
};

export default AvailableTuitions;
