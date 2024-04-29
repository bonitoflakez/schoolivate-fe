import { useState } from "react";
import { Plus, Pen, ArrowLeft, File, Paperclip } from "@phosphor-icons/react";
import { schoolWorkHistory } from "../utils/schoolWorkData.js";
import EditIcon from "../assets/EditIcon.jsx";
import FileIcon from "../assets/FileIcon.jsx";

const SchoolWorkHistoryGrid = () => {
  const [selectedOption, setSelectedOption] = useState("allClasses");
  const [selectedGroupOption, setSelectedGroupOption] = useState("g1");
  const [selectedStudentOption, setSelectedStudentOption] = useState("s1");
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editAssignmentDetails, setEditAssignmentDetails] = useState(null);
  const [createAssignmentDetails, setCreateAssignmentDetails] = useState(null);

  const onStudentClick = (student) => {
    setSelectedStudent(student);
  };

  const onEditAssignmentClick = (assignment) => {
    setEditAssignmentDetails(assignment);
  };

  const onCreateAssignmentClick = () => {
    setCreateAssignmentDetails(true);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedAssignment(null);
  };

  const handleGroupSelectChange = (event) => {
    setSelectedGroupOption(event.target.value);
  };

  const handleStudentSelectChange = (event) => {
    setSelectedStudentOption(event.target.value);
  };

  const handleAssignmentClick = (assignment) => {
    setSelectedAssignment(assignment);
  };

  const handleEditComponentBack = () => {
    setEditAssignmentDetails(null);
    setSelectedGroupOption(null);
    setSelectedStudentOption(null);
  };

  return (
    <div className="assignment-grid-list">
      {selectedAssignment ? (
        <>
          {editAssignmentDetails ? (
            <>
              <div className="top-container">
                <div className="flex">
                  <div className="flex">
                    <button onClick={handleEditComponentBack}>
                      <ArrowLeft size={42} weight="bold" />
                    </button>
                    <h2 className="ml-4 font-bold text-5xl">School Work</h2>
                  </div>
                  <button
                    className="ml-auto px-6 py-2 rounded-md text-xl"
                    style={{
                      background: "var(--checked-pill)",
                    }}
                  >
                    Done
                  </button>
                </div>
              </div>
              <div className="details my-4 mx-12">
                <div className="assignment-name mt-12">
                  <h3 className="text-2xl font-bold mb-2">Assignment Name</h3>
                  <input
                    type="text"
                    className="p-4 w-full rounded-md text-xl outline-none bg-white text-black"
                    value={selectedAssignment.assignment_name}
                    placeholder="Enter Title"
                  ></input>
                </div>
              </div>
              <div className="description my-4 mx-12">
                <h3 className="text-2xl font-bold mb-2">Description</h3>
                <textarea
                  type="text"
                  className="p-3 text-xl w-full rounded-md outline-none bg-white text-black"
                  value={selectedAssignment.description}
                  placeholder="Enter Title"
                ></textarea>
              </div>
              <div className="group-selection my-4 mx-12">
                <h3 className="text-2xl font-bold mb-2">Group</h3>
                <select
                  id="groupSelect"
                  value={selectedGroupOption}
                  // display already selected group as selected here
                  onChange={handleGroupSelectChange}
                  className="outline-none border rounded-md text-lg p-4 w-full bg-white text-black"
                >
                  <option value="g1">Group 1</option>
                  <option value="g2">Group 2</option>
                  <option value="g3">Group 3</option>
                </select>
              </div>
              <div className="group-selection my-4 mx-12">
                <h3 className="text-2xl font-bold mb-2">Group</h3>
                <select
                  id="studentSelect"
                  value={selectedStudentOption}
                  // display already selected students as selected here
                  onChange={handleStudentSelectChange}
                  className="outline-none border rounded-md text-lg p-4 w-full bg-white text-black"
                >
                  <option value="s1">Student 1</option>
                  <option value="s2">Student 2</option>
                  <option value="s3">Student 3</option>
                </select>
              </div>
              <div className="add-attachment flex justify-center items-center">
                <button
                  className="px-6 py-3 rounded-md flex items-center"
                  style={{
                    background: "var(--ac-secondary)",
                  }}
                >
                  <Paperclip size={24} weight="bold" />
                  <span className="text-xl font-medium ml-2">Attachment</span>
                </button>
              </div>
            </>
          ) : (
            <>
              {selectedStudent ? (
                <div className="overflow-y-auto">
                  <div className="top-container">
                    <div className="flex">
                      <div className="flex">
                        <button onClick={() => setSelectedStudent(null)}>
                          <ArrowLeft size={32} weight="bold" />
                        </button>
                        <h2 className="ml-4 font-bold text-5xl">School Work</h2>
                      </div>
                      <button
                        className="ml-auto px-4 py-1 rounded-md text-lg font-bold"
                        style={{
                          background: "var(--green)",
                          color: "var(--bg-primary)",
                        }}
                      >
                        Mark Done
                      </button>
                    </div>
                  </div>
                  <div className="header-container mt-12 mb-8">
                    <h3 className="text-4xl font-bold">Students Work</h3>
                  </div>
                  <div className="student-profile flex items-center">
                    <div className="lg:h-24 uw:h-32 lg:w-24 uw:w-32 mb-4 bg-gray-500 rounded-full"></div>
                    <div className="student-name ml-8">
                      <h2 className="text-3xl">{selectedStudent.name}</h2>
                      <h3 className="text-2xl">{selectedStudent.group_name}</h3>
                    </div>
                  </div>
                  <div className="assignment-details my-6">
                    <h2 className="text-4xl font-bold">
                      {selectedAssignment.id}.{" "}
                      {selectedAssignment.assignment_name}
                    </h2>
                    <h3 className="text-xl font-medium my-2 opacity-60">
                      Description
                    </h3>
                    <p
                      className="text-md max-w-[50vw] mt-2 font-normal text-lg overflow-hidden text-ellipsis"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 10,
                      }}
                    >
                      {selectedAssignment.description}
                    </p>
                  </div>
                  <div className="submission">
                    <h3 className="text-4xl font-bold mb-4">Submission</h3>
                    <div
                      className="submitted-file text-black rounded-lg"
                      style={{
                        background: "var(--blue-temp)",
                      }}
                    >
                      <div className="w-full p-4 flex items-center">
                        <span className="flex items-center">
                          <FileIcon />
                          <h3 className="text-3xl font-normal ml-2">
                            {selectedStudent.file_name}
                          </h3>
                        </span>
                        <button
                          className="ml-auto text-white font-bold rounded-md px-6 py-2"
                          style={{
                            background: "var(--blue-normal)",
                          }}
                        >
                          View
                        </button>
                      </div>
                    </div>
                    <div className="grades my-6">
                      <h2 className="text-2xl font-bold">Give Total Marks</h2>
                      <span className="flex items-center">
                        <input
                          type="text"
                          className="outline-none rounded-md p-2 my-2 w-full"
                          placeholder="Input value"
                        ></input>
                        <button
                          className="px-4 py-2 rounded-md ml-4"
                          style={{
                            background: "var(--default-secondary-accent)",
                          }}
                        >
                          Submit
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className="top-container">
                    <div className="flex">
                      <div className="flex">
                        <button onClick={() => setSelectedAssignment(null)}>
                          <ArrowLeft size={32} weight="bold" />
                        </button>
                        <h2 className="ml-4 font-bold text-5xl">School Work</h2>
                      </div>
                      <button
                        className="ml-auto flex items-center text-2xl border px-4 py-1 rounded-md"
                        style={{
                          background: "var(--blue-dark)",
                        }}
                        onClick={onEditAssignmentClick}
                      >
                        <EditIcon />
                        <span className="ml-1 font-medium">Edit</span>
                      </button>
                    </div>
                  </div>
                  <div className="assignment-details overflow-y-auto">
                    <div className="flex my-12">
                      <div>
                        <span className="text-3xl font-bold">
                          {selectedAssignment.id}.{" "}
                          {selectedAssignment.assignment_name}
                        </span>
                        <br />
                        <span className="text-lg font-normal">
                          {selectedAssignment.group_name}
                        </span>
                      </div>
                      <div className="text-sm flex flex-col items-center ml-auto">
                        <div
                          className="mr-2 px-6 py-2 h-fit rounded-3xl text-lg text-white"
                          style={{
                            background: "var(--blue-dark)",
                          }}
                        >
                          {selectedAssignment.submitted}/
                          {selectedAssignment.total_submissions}
                        </div>
                        <h4 className="pb-1 pt-1 font-medium">
                          Total Submissions
                        </h4>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium opacity-60">
                        Description
                      </h3>
                      <p
                        className="text-md max-w-[50vw] mt-2 font-normal overflow-hidden text-ellipsis"
                        style={{
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 10,
                        }}
                      >
                        {selectedAssignment.description}
                      </p>
                    </div>
                    <div>
                      <div className="text-sm w-full my-4 px-12 flex items-center">
                        <div
                          className="px-6 py-2 text-center rounded-md whitespace-nowrap"
                          style={{
                            background: "var(--blue-light)",
                            color: "#000000",
                          }}
                        >
                          <p className="text-sm opacity-60">Date Created</p>
                          <div></div>
                          <p className="text-lg">
                            {selectedAssignment.created}
                          </p>
                        </div>
                        <div className="w-full flex items-center justify-center">
                          <hr
                            className="w-[20vw]"
                            style={{
                              border: "2px solid var(--blue-dark)",
                            }}
                          />
                        </div>
                        <div
                          className="ml-auto px-6 py-2  text-center rounded-md whitespace-nowrap"
                          style={{
                            background: "var(--blue-light)",
                            color: "#000000",
                          }}
                        >
                          <p className="text-sm opacity-60">Due Date</p>
                          <div></div>
                          <p className="text-lg">{selectedAssignment.due}</p>
                        </div>
                      </div>
                    </div>
                    <div className="student-submissions">
                      <div className="flex">
                        <div>
                          <h2 className="text-2xl font-bold">
                            Students' Submissions
                          </h2>
                        </div>
                        <div className="ml-auto flex justify-between mt-2">
                          <div className="flex justify-start">
                            <div className="text-sm text-center text-white">
                              <span className="pb-1 block">Pending</span>
                              <span
                                className="mr-2 px-4 py-1 h-fit rounded-2xl"
                                style={{
                                  background: "var(--pending-pill)",
                                  color: "#242424",
                                }}
                              >
                                {selectedAssignment.total_submissions -
                                  selectedAssignment.submitted}
                                /{selectedAssignment.total_submissions}
                              </span>
                            </div>
                            <div className="text-sm text-center text-white">
                              <span className="pb-1 block">Checked</span>
                              <span
                                className="mr-2 px-4 py-1 h-fit rounded-2xl"
                                style={{
                                  background: "var(--checked-pill)",
                                }}
                              >
                                {selectedAssignment.checked}/
                                {selectedAssignment.total_submissions}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="mt-6 h-[32.5vh] overflow-y-auto">
                        {selectedAssignment.student_submissions.map(
                          (student) => (
                            <li
                              key={student.id}
                              className="flex items-center mb-4  rounded-md"
                              style={{
                                background: "var(--blue-light)",
                                color: "#000000",
                              }}
                            >
                              <div className="px-6 py-2 flex items-center w-full">
                                <div className="flex items-center">
                                  <h3 className="text-2xl">{student.id}.</h3>
                                  <div className="h-12 w-12 mx-4 bg-gray-500 rounded-full"></div>
                                </div>
                                <div className="flex items-center w-full">
                                  <h3 className="text-2xl">{student.name}</h3>
                                  <button
                                    className="ml-auto text-lg font-bold px-6 py-4 rounded-md"
                                    style={{
                                      background: "var(--blue-dark-0)",
                                      color: "#eeeeee",
                                    }}
                                    onClick={() => onStudentClick(student)}
                                  >
                                    View Work
                                  </button>
                                </div>
                              </div>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </>
      ) : createAssignmentDetails ? (
        <div>
          <div className="top-container">
            <div className="flex">
              <div className="flex">
                <button onClick={() => setCreateAssignmentDetails(null)}>
                  <ArrowLeft size={42} weight="bold" />
                </button>
                <h2 className="ml-4 font-bold text-5xl">School Work</h2>
              </div>
              <button
                className="ml-auto px-6 py-2 rounded-md text-xl"
                style={{
                  background: "var(--green)",
                  color: "var(--bg-primary)",
                }}
              >
                Done
              </button>
            </div>
          </div>
          <div className="details my-4 mx-12">
            <div className="assignment-name mt-12">
              <h3 className="text-2xl font-bold mb-2">Assignment Name</h3>
              <input
                type="text"
                className="p-4 w-full rounded-md text-xl outline-none bg-white text-black"
                placeholder="Enter Title"
              ></input>
            </div>
          </div>
          <div className="description my-4 mx-12">
            <h3 className="text-2xl font-bold mb-2">Description</h3>
            <textarea
              type="text"
              className="p-3 text-xl w-full rounded-md outline-none bg-white text-black"
              placeholder="Enter Title"
            ></textarea>
          </div>
          <div className="group-selection my-4 mx-12">
            <h3 className="text-2xl font-bold mb-2">Group</h3>
            <select
              id="groupSelect"
              // create different value and onchange event for this
              // value={selectedGroupOption}
              // onChange={handleGroupSelectChange}
              className="outline-none border rounded-md text-lg p-4 w-full bg-white text-black"
            >
              <option value="g1">Group 1</option>
              <option value="g2">Group 2</option>
              <option value="g3">Group 3</option>
            </select>
          </div>
          <div className="group-selection my-4 mx-12">
            <h3 className="text-2xl font-bold mb-2">Group</h3>
            <select
              id="studentSelect"
              // create different value and onchange event for this
              // value={selectedStudentOption}
              // onChange={handleStudentSelectChange}
              className="outline-none border rounded-md text-lg p-4 w-full bg-white text-black"
            >
              <option value="s1">Student 1</option>
              <option value="s2">Student 2</option>
              <option value="s3">Student 3</option>
            </select>
          </div>
          <div className="add-attachment flex justify-center items-center">
            <button
              className="px-6 py-3 rounded-md flex items-center"
              style={{
                background: "var(--ac-secondary)",
                color: "var(--bg-primary)",
              }}
            >
              <Paperclip size={24} weight="bold" />
              <span className="text-xl font-medium ml-2">Attachment</span>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="top-container">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-4xl">School Work</h2>
              <button
                className="flex items-center px-4 py-2 rounded-md"
                style={{
                  background: "var(--blue-dark)",
                  border: "3px solid var(--fg-secondary)",
                }}
                onClick={() => onCreateAssignmentClick()}
              >
                <Plus size={24} weight="bold" />{" "}
                <span className="text-xl font-bold ml-2">Create</span>
              </button>
            </div>
          </div>
          <div className="option-selector">
            <div className="text-xl font-medium">
              <select
                id="classSelect"
                value={selectedOption}
                onChange={handleSelectChange}
                style={{
                  background: "var(--blue-dark)",
                  border: "2px solid var(--fg-secondary)",
                }}
                className="outline-none rounded-md px-4 py-1 my-4"
              >
                <option value="allClasses">All Classes</option>
                <option value="class1">Class 1</option>
                <option value="class2">Class 2</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 h-[80  vh] overflow-y-auto">
            {schoolWorkHistory.map((schoolwork) => (
              <button
                key={schoolwork.id}
                className="flex rounded-md cursor-pointer"
                style={{
                  background: "var(--bg-primary)",
                  color: "#000000",
                }}
                onClick={() => handleAssignmentClick(schoolwork)}
              >
                <div className="block w-full p-2">
                  <div className="flex items-center">
                    <div className="">
                      <span className="text-2xl font-bold">
                        {schoolwork.id}. {schoolwork.assignment_name}
                      </span>
                      <br />
                      <span className="text-md ml-6 font-normal opacity-60">
                        {schoolwork.group_name}
                      </span>
                    </div>
                    <div
                      className="ml-auto"
                      style={{
                        fontSize: "var(--sm-txt)",
                      }}
                    >
                      <div className="flex items-start">
                        <div className="text-center">
                          <h4 className="opacity-60">Created</h4>
                          <h4 className="font-medium">{schoolwork.created}</h4>
                        </div>
                        <hr className="border-1 border-black mt-2 w-8 mx-1"></hr>
                        <div className="text-center">
                          <span className="opacity-60">Due</span>
                          <br />
                          {schoolwork.due}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="clear-both my-6"></div>

                  <div className="flex justify-between mt-2">
                    <div className="flex justify-start">
                      <div className="text-sm text-center">
                        <span
                          className="pb-1 block"
                          style={{
                            fontSize: "var(--sm-txt)",
                          }}
                        >
                          Total Submission(s)
                        </span>
                        <span
                          className="mr-2 px-4 py-1 h-fit rounded-2xl text-white"
                          style={{
                            background: "var(--fg-secondary)",
                          }}
                        >
                          {schoolwork.submitted}/{schoolwork.total_submissions}
                        </span>
                      </div>
                      <div className="text-sm text-center">
                        <span
                          className="pb-1 block"
                          style={{
                            fontSize: "var(--sm-txt)",
                          }}
                        >
                          Pending
                        </span>
                        <span
                          className="mr-2 px-4 py-1 h-fit rounded-2xl  text-black"
                          style={{
                            background: "var(--yellow)",
                          }}
                        >
                          {schoolwork.total_submissions - schoolwork.submitted}/
                          {schoolwork.total_submissions}
                        </span>
                      </div>
                      <div className="text-sm text-center">
                        <span
                          className="pb-1 block"
                          style={{
                            fontSize: "var(--sm-txt)",
                          }}
                        >
                          Checked
                        </span>
                        <span
                          className="mr-2 px-4 py-1 h-fit rounded-2xl text-white"
                          style={{
                            background: "var(--green)",
                          }}
                        >
                          {schoolwork.checked}/{schoolwork.total_submissions}
                        </span>
                      </div>
                    </div>

                    <button
                      className="mt-auto text-sm px-4 py-0.5 h-fit rounded-md"
                      style={{
                        background: "#000000",
                        color: "var(--bg-primary)",
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SchoolWorkHistoryGrid;
