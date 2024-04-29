import { ArrowLeft, Plus, File } from "@phosphor-icons/react";

import PropTypes from "prop-types";

const ViewClasswork = ({ closeViewWork, displayWork }) => {
  return (
    <div className="view-work p-4">
      <div className="float-left back-to-classwork">
        <button onClick={closeViewWork}>
          <ArrowLeft size={36} weight="bold" />
        </button>
      </div>
      <div className="work-display-container mx-8">
        <div className="top-section flex">
          <div className="date-created ml-auto">
            <h3 className="text-lg opacity-60">
              Created - {displayWork.created}
            </h3>
          </div>
        </div>
        <div className="top-section-2 flex items-center mt-8">
          <div className="classwork-type">
            <h3 className="text-3xl font-medium">{displayWork.type}</h3>
          </div>
          <div className="date-created ml-auto">
            <h3 className="text-lg opacity-60">Due - {displayWork.due}</h3>
          </div>
        </div>
        <div className="classwork-details max-w-[50vw] mt-4">
          <p className="text-lg font-light">{displayWork.assignment_details}</p>
        </div>
        <div className="work-status mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-xl">Your Work</h3>
            <h3
              className={`text-xl ${
                displayWork.completed
                  ? "text-[--accent-normal]"
                  : "text-[--green-pill]"
              }`}
            >
              {displayWork.completed ? "Your Score" : "Assigned"}
            </h3>
          </div>
          <hr className="border my-2 border-[--border]" />
          <div className="buttons flex items-center gap-12 mx-6 mt-6">
            <button
              className={`px-2 py-1 gap-1 ${
                !displayWork.completed ? "w-1/2" : "w-10/12"
              } border-2 border-[--accent-normal] rounded-lg`}
            >
              {!displayWork.attachment && !displayWork.completed ? (
                <span className="flex items-center justify-center text-xl text-[--accent-normal]">
                  <Plus size={24} weight="bold" /> Attach File
                </span>
              ) : (
                <span className="flex items-center justify-start gap-4 text-xl text-[--accent-normal]">
                  <File size={24} weight="fill" fill={"var(--accent-normal)"} />{" "}
                  {displayWork.attachment}
                  <div className="text-base bg-[--accent-normal] text-[--primary-bg] px-4 rounded-md ml-auto">
                    View
                  </div>
                </span>
              )}
            </button>
            <button
              className={`px-2 py-2 ${
                !displayWork.completed ? "w-1/2 border-transparent" : "w-2/12"
              } text-xl font-medium bg-[--accent-normal] text-[--primary-bg] rounded-lg`}
            >
              {!displayWork.completed
                ? "Mark as Done"
                : `${displayWork.secured_grade}/${displayWork.total_grade}`}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ViewClasswork.propTypes = {
  closeViewWork: PropTypes.func,
  displayWork: PropTypes.object.isRequired,
};

export default ViewClasswork;
