import { schoolWorkHistory } from "../utils/schoolWorkData";
import { Link } from "react-router-dom";

const RightCompAssignment = () => {
  // max number of notifications to display on main screen
  const maxDisplay = 5;

  return (
    <>
      <div id="schoolwork" className="p-4 mr-2 rounded-lg w-full h-fit">
        <p className="inline-block text-3xl font-bold mb-2">Assignment</p>

        {schoolWorkHistory.length > maxDisplay && (
          <Link to={"/schoolwork"}>
            {/* <button
              className="float-right border px-1 py-0.5 rounded-md"
              style={{
                fontSize: "var(--l-sm-txt)",
              }}
            > */}
            <button
              className="float-right border px-2 rounded-md ml-auto"
              style={{
                fontSize: "var(--sm-txt)",
                text: "var(--fg-secondary)",
                border: "2px solid var(--fg-secondary)",
              }}
            >
              View More
            </button>
          </Link>
        )}

        <div className="h-[45vh] overflow-y-auto">
          <p className="inline-block text-xl font-medium mb-2">
            Recent Submission
          </p>
          <ul>
            {schoolWorkHistory.slice(0, maxDisplay).map((schoolwork) => (
              <li
                key={schoolwork.id}
                className="flex mb-4 overflow-hidden rounded-md"
                style={{
                  background: "var(--ac-primary)",
                  color: "var(--default-primary-fg)",
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
                          className="mr-2 px-4 py-1 h-fit font-medium rounded-full ml-auto"
                          style={{
                            background: "var(--bg-primary)",
                            color: "var(--fg-primary)",
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
                      className="mt-auto text-sm font-medium px-4 rounded-md"
                      style={{
                        background: "var(--fg-secondary)",
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
    </>
  );
};

export default RightCompAssignment;
