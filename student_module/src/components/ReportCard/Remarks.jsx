import PropTypes from "prop-types";

const Remarks = ({ teacherRemarks }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="rounded-2xl p-2 bg-[--accent-extra-light]">
          <p className="text-sm font-light text-center w-[35vw]">
            {teacherRemarks.remarks}
          </p>
        </div>
      </div>
      <h3 className="text-right text-xl mr-6">
        ~ {teacherRemarks.teacher_name}
      </h3>
    </>
  );
};

Remarks.propTypes = {
  teacherRemarks: PropTypes.object.isRequired,
};

export default Remarks;
