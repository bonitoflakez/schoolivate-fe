import { useState } from "react";
import Modal from "react-modal";
import { schoolWorkHistory } from "../utils/schoolWorkData";
import { Link } from "react-router-dom";

const SchoolWorkHistory = () => {
  const [showSchoolWorkModal, setShowSchoolWorkModal] = useState(false);

  // max number of notifications to display on main screen
  const maxDisplay = 5;

  const showAllSchoolWork = () => {
    setShowSchoolWorkModal(true);
  };

  const closeSchoolWorkModal = () => {
    setShowSchoolWorkModal(false);
  };

  const SchoolWorkHistoryModal = ({ isOpen, onClose, schoolWorkHistory }) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="School Work History Modal"
      >
        <div>
          <button
            className="inline-block float-right right-0"
            onClick={onClose}
          >
            Close
          </button>
          <h2 className="text-2xl font-bold text-center">
            School Work History
          </h2>
          <ul className="max-w-3xl">
            {schoolWorkHistory.map((schoolwork) => (
              <li key={schoolwork.id} className="py-1 my-1">
                {schoolwork.id}. {schoolwork.message}
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    );
  };

  return (
    <div
      id="schoolwork"
      className="p-4 rounded-lg w-1/2 h-fit bg-[--bg-secondary]"
    >
      <div className="flex items-center justify-between mb-2">
        <p className="text-2xl font-normal">School Work History</p>
        <Link to={"/schoolwork"}>
          <button
            className="border text-xs font-semibold px-2 pt-0.5 rounded-md border-[--ac-secondary] text-[--ac-secondary]"
            // onClick={showAllSchoolWork}
          >
            View More
          </button>
        </Link>
      </div>

      <div className="h-72 overflow-y-auto">
        <ul>
          {schoolWorkHistory.slice(0, maxDisplay).map((schoolwork) => (
            <li
              key={schoolwork.id}
              className="flex items-start justify-start mb-4 border border-[--ac-primary] rounded-md relative"
              style={{
                background: "var(--ac-primary)",
                color: "var(--fg-primary)",
              }}
            >
              <div className="block w-full px-4 py-2">
                <div className="flex">
                  <div>
                    <h3 className="text-xl font-bold">
                      {schoolwork.id}. {schoolwork.assignment_name}
                    </h3>
                    <h4
                      className="font-normal ml-4 opacity-60"
                      style={{
                        fontSize: "var(--md-txt)",
                      }}
                    >
                      {schoolwork.group_name}
                    </h4>
                  </div>
                  <div className="flex items-center text-center ml-auto">
                    <div className="mr-1">
                      <p
                        className="opacity-60"
                        style={{ fontSize: "var(--l-sm-txt)" }}
                      >
                        Created
                      </p>
                      <p style={{ fontSize: "var(--sm-txt)" }}>
                        {schoolwork.created}
                      </p>
                    </div>
                    <hr className="mx-1" style={{ width: "1em" }} />
                    <div className="ml-1">
                      <p
                        className="opacity-60"
                        style={{ fontSize: "var(--l-sm-txt)" }}
                      >
                        Due
                      </p>
                      <p style={{ fontSize: "var(--sm-txt)" }}>
                        {schoolwork.due}
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="text-sm float-right">
                    <span className="inline-block text-center">
                      Created
                      <br />
                      {schoolwork.created}
                    </span>
                    <div className="inline-block mx-1">-</div>
                    <span className="inline-block text-center">
                      Due
                      <br />
                      {schoolwork.due}
                    </span>
                  </div> */}

                <div className="clear-both"></div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center justify-start">
                    <div className="text-center">
                      <span
                        className="pb-1 block"
                        style={{
                          fontSize: "var(--l-sm-txt)",
                        }}
                      >
                        Total Submission(s)
                      </span>
                      <span
                        className="mr-2 px-4 py-1 h-fit font-medium rounded-full bg-[--ac-secondary] text-[--bg-primary] ml-auto"
                        style={{
                          fontSize: "var(--sm-txt)",
                        }}
                      >
                        {schoolwork.submitted}/{schoolwork.total_submissions}
                      </span>
                    </div>
                    <div className="text-center">
                      <span
                        className="pb-1 block"
                        style={{
                          fontSize: "var(--l-sm-txt)",
                        }}
                      >
                        Pending
                      </span>
                      <span
                        className="mr-2 px-4 py-1 h-fit font-medium rounded-full bg-[--ac-secondary] text-[--bg-primary] ml-auto"
                        style={{
                          fontSize: "var(--sm-txt)",
                          background: "var(--yellow)",
                          color: "var(--blue-darker)",
                        }}
                      >
                        {schoolwork.total_submissions - schoolwork.submitted}/
                        {schoolwork.total_submissions}
                      </span>
                    </div>
                    <div className="text-center">
                      <span
                        className="pb-1 block"
                        style={{
                          fontSize: "var(--l-sm-txt)",
                        }}
                      >
                        Checked
                      </span>
                      <span
                        className="mr-2 px-4 py-1 h-fit font-medium rounded-full bg-[--ac-secondary] text-[--bg-primary] ml-auto"
                        style={{
                          fontSize: "var(--sm-txt)",
                          background: "var(--green)",
                        }}
                      >
                        {schoolwork.checked}/{schoolwork.total_submissions}
                      </span>
                    </div>
                  </div>

                  <button
                    className="text-sm font-semibold px-4 rounded-md py-0.5 ml-auto"
                    style={{
                      background: "var(--ac-secondary)",
                      color: "var(--bg-primary)",
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SchoolWorkHistory;
