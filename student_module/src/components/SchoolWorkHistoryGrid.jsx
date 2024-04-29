import { useState } from "react";
import { Plus, Pen, ArrowLeft, File, Paperclip } from "@phosphor-icons/react";
import { schoolWorkHistory } from "../utils/schoolWorkData";

const SchoolWorkHistoryGrid = () => {
  const [selectedOption, setSelectedOption] = useState("allClasses");
  const [selectedGroupOption, setSelectedGroupOption] = useState("g1");
  const [selectedStudentOption, setSelectedStudentOption] = useState("s1");
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editAssignmentDetails, setEditAssignmentDetails] = useState(null);

  const onStudentClick = (student) => {
    setSelectedStudent(student);
  };

  const onEditAssignmentClick = (assignment) => {
    setEditAssignmentDetails(assignment);
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
    <>
      <div className="assignment-grid-list">
        {selectedAssignment ? (
          <>
            {editAssignmentDetails ? (
              <>
                <div className="top-container">
                  <div className="flex">
                    <div className="flex">
                      <button onClick={handleEditComponentBack}>
                        <ArrowLeft size={32} weight="bold" />
                      </button>
                      <h2 className="ml-4 font-semibold lg:text-2xl uw:text-3xl">
                        School Work
                      </h2>
                    </div>
                    <button className="ml-auto px-4 py-1 rounded-md bg-green-700">
                      Done
                    </button>
                  </div>
                </div>
                <div className="details my-4">
                  <div className="assignment-name mt-12">
                    <h3 className="text-2xl font-semibold mb-2">
                      Assignment Name
                    </h3>
                    <input
                      type="text"
                      className="p-2 w-full rounded-md outline-none bg-white text-black"
                      placeholder="Enter Title"
                    ></input>
                  </div>
                </div>
                <div className="description my-4">
                  <h3 className="text-2xl font-semibold mb-2">Description</h3>
                  <textarea
                    type="text"
                    className="p-2 w-full rounded-md outline-none bg-white text-black"
                    placeholder="Enter Title"
                  ></textarea>
                </div>
                <div className="group-selection my-4">
                  <h3 className="text-2xl font-semibold mb-2">Group</h3>
                  <select
                    id="groupSelect"
                    value={selectedGroupOption}
                    onChange={handleGroupSelectChange}
                    className="outline-none border rounded-md px-4 py-1 w-full bg-white text-black"
                  >
                    <option value="g1">Group 1</option>
                    <option value="g2">Group 2</option>
                    <option value="g3">Group 3</option>
                  </select>
                </div>
                <div className="group-selection my-4">
                  <h3 className="text-2xl font-semibold mb-2">Group</h3>
                  <select
                    id="studentSelect"
                    value={selectedStudentOption}
                    onChange={handleStudentSelectChange}
                    className="outline-none border rounded-md px-4 py-1 w-full bg-white text-black"
                  >
                    <option value="s1">Student 1</option>
                    <option value="s2">Student 2</option>
                    <option value="s3">Student 3</option>
                  </select>
                </div>
                <div className="add-attachment flex justify-center items-center">
                  <button
                    className="px-4 py-2 rounded-md flex items-center"
                    style={{
                      background: "var(--default-secondary-accent)",
                    }}
                  >
                    <Paperclip size={22} weight="bold" />
                    Attachment
                  </button>
                </div>
              </>
            ) : (
              <>
                {selectedStudent ? (
                  <>
                    <div className="top-container">
                      <div className="flex">
                        <div className="flex">
                          <button onClick={() => setSelectedStudent(null)}>
                            <ArrowLeft size={32} weight="bold" />
                          </button>
                          <h2 className="ml-4 font-semibold lg:text-2xl uw:text-3xl">
                            School Work
                          </h2>
                        </div>
                        <button className="ml-auto px-4 py-1 rounded-md bg-green-700">
                          Mark Done
                        </button>
                      </div>
                    </div>
                    <div className="header-container mt-12 mb-8">
                      <h3 className="lg:text-3xl font-semibold">School Work</h3>
                    </div>
                    <div className="student-profile flex items-center">
                      <div className="lg:h-24 uw:h-32 lg:w-24 uw:w-32 mb-4 bg-gray-500 rounded-full"></div>
                      <div className="student-name ml-8">
                        <h2 className="lg:text-2xl uw:text-3xl">
                          {selectedStudent.name}
                        </h2>
                        <h3 className="lg:text-lg uw:text-xl">
                          {selectedStudent.group_name}
                        </h3>
                      </div>
                    </div>
                    <div className="assignment-details my-6">
                      <h2 className="text-2xl font-semibold">
                        {selectedAssignment.id}.{" "}
                        {selectedAssignment.assignment_name}
                      </h2>
                      <h3 className="text-xl my-2">Description</h3>
                      <p
                        className="text-md lg:w-[60vw] uw:w-[50vw] mt-2 font-light overflow-hidden overflow-ellipsis"
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
                      <div className="submitted-file bg-white text-black rounded-lg">
                        <div className="w-full p-4 flex items-center">
                          <span className="flex items-center">
                            <File size={32} weight="bold" />
                            <h3 className="text-xl font-semibold">
                              {selectedStudent.file_name}
                            </h3>
                          </span>
                          <button className="ml-auto bg-black text-white font-semibold rounded-md px-6 py-2">
                            View
                          </button>
                        </div>
                      </div>
                      <div className="grades my-6">
                        <h2 className="text-2xl font-semibold">
                          Give Total Marks
                        </h2>
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
                  </>
                ) : (
                  <>
                    <div className="top-container">
                      <div className="flex">
                        <div className="flex">
                          <button onClick={() => setSelectedAssignment(null)}>
                            <ArrowLeft size={32} weight="bold" />
                          </button>
                          <h2 className="ml-4 font-semibold lg:text-2xl uw:text-3xl">
                            School Work
                          </h2>
                        </div>
                        <button
                          className="ml-auto border px-4 py-1 rounded-md"
                          style={{
                            background: "var(--default-secondary-accent)",
                          }}
                          onClick={onEditAssignmentClick}
                        >
                          <Pen
                            size={22}
                            className="inline-block mr-2"
                            weight="bold"
                          />{" "}
                          Edit
                        </button>
                      </div>
                    </div>
                    <div className="assignment-details">
                      <div className="flex my-12">
                        <div>
                          <span className="text-3xl font-semibold">
                            {selectedAssignment.id}.{" "}
                            {selectedAssignment.assignment_name}
                          </span>
                          <br />
                          <span className="text-lg font-normal">
                            {selectedAssignment.group_name}
                          </span>
                        </div>
                        <div className="text-sm text-center ml-auto">
                          <span className="mr-2 px-6 py-2 h-fit bg-blue-800 rounded-2xl text-white">
                            {selectedAssignment.submitted}/
                            {selectedAssignment.total_submissions}
                          </span>
                          <span className="pb-1 pt-2 block">
                            Total Submission(s)
                          </span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl">Description</h3>
                        <p
                          className="text-md lg:w-[60vw] uw:w-[50vw] mt-2 font-light overflow-hidden overflow-ellipsis"
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
                        <div className="text-sm w-full my-4 flex items-center">
                          <div
                            className="px-6 py-2 text-center rounded-md whitespace-nowrap"
                            style={{
                              background: "#eeeeee",
                              color: "#000000",
                            }}
                          >
                            <p className="text-sm">Date Created</p>
                            <div></div>
                            <p className="text-lg">
                              {selectedAssignment.created}
                            </p>
                          </div>
                          <hr className="w-full" />
                          <div
                            className="ml-auto px-6 py-2  text-center rounded-md whitespace-nowrap"
                            style={{
                              background: "#eeeeee",
                              color: "#000000",
                            }}
                          >
                            <p className="text-sm">Due Date</p>
                            <div></div>
                            <p className="text-lg">{selectedAssignment.due}</p>
                          </div>
                        </div>
                      </div>
                      <div className="student-submissions">
                        <div className="flex">
                          <div>
                            <h2 className="text-2xl font-semibold">
                              Students' Submissions
                            </h2>
                          </div>
                          <div className="ml-auto flex justify-between mt-2">
                            <div className="flex justify-start">
                              <div className="text-sm text-center text-white">
                                <span className="pb-1 block">Pending</span>
                                <span className="mr-2 px-4 py-1 h-fit bg-yellow-800 rounded-2xl">
                                  {selectedAssignment.total_submissions -
                                    selectedAssignment.submitted}
                                  /{selectedAssignment.total_submissions}
                                </span>
                              </div>
                              <div className="text-sm text-center text-white">
                                <span className="pb-1 block">Checked</span>
                                <span className="mr-2 px-4 py-1 h-fit bg-green-800 rounded-2xl">
                                  {selectedAssignment.checked}/
                                  {selectedAssignment.total_submissions}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <ul className="mt-6">
                          {selectedAssignment.student_submissions.map(
                            (student) => (
                              <li
                                key={student.id}
                                className="flex items-center mb-4 px-6 py-2 rounded-md"
                                style={{
                                  background: "#eeeeee",
                                  color: "#000000",
                                }}
                              >
                                <h3>{student.id}.</h3>
                                <div className="h-16 w-16 mx-4 bg-gray-500 rounded-full"></div>
                                <div className="flex w-full justify-between items-center">
                                  <h3>{student.name}</h3>
                                  <button
                                    className="ml-4 text-sm px-6 py-4 rounded-md"
                                    style={{
                                      background:
                                        "var(--default-primary-accent)",
                                      color: "#eeeeee",
                                    }}
                                    onClick={() => onStudentClick(student)}
                                  >
                                    View Work
                                  </button>
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
        ) : (
          <>
            <div className="top-container">
              <div className="flex">
                <h2 className="font-semibold lg:text-3xl uw:text-3xl">
                  School Work
                </h2>
                <button
                  className="ml-auto border px-4 py-1 rounded-md"
                  style={{
                    background: "var(--default-secondary-accent)",
                  }}
                >
                  <Plus size={22} className="inline-block mr-2" weight="bold" />{" "}
                  Create
                </button>
              </div>
            </div>
            <div className="option-selector">
              <div>
                <select
                  id="classSelect"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  style={{
                    background: "var(--default-primary-accent)",
                  }}
                  className="outline-none border rounded-md px-4 py-1 my-4"
                >
                  <option value="allClasses">All Classes</option>
                  <option value="class1">Class 1</option>
                  <option value="class2">Class 2</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {schoolWorkHistory.map((schoolwork) => (
                <div
                  key={schoolwork.id}
                  className="flex mb-4 overflow-hidden rounded-md cursor-pointer"
                  style={{
                    background: "var(--default-secondary-accent)",
                    color: "#000000",
                  }}
                  onClick={() => handleAssignmentClick(schoolwork)}
                >
                  <div className="block w-full p-4">
                    <div className="float-left">
                      <span className="text-xl font-semibold">
                        {schoolwork.assignment_name}
                      </span>
                      <br />
                      <span className="text-md font-normal">
                        {schoolwork.group_name}
                      </span>
                    </div>
                    <div className="text-sm float-right">
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
                    </div>

                    <div className="clear-both"></div>

                    <div className="flex justify-between mt-2">
                      <div className="flex justify-start">
                        <div className="text-sm text-center">
                          <span className="pb-1 block">
                            Total Submission(s)
                          </span>
                          <span className="mr-2 px-4 py-1 h-fit bg-blue-800 rounded-2xl text-white">
                            {schoolwork.submitted}/
                            {schoolwork.total_submissions}
                          </span>
                        </div>
                        <div className="text-sm text-center">
                          <span className="pb-1 block">Pending</span>
                          <span className="mr-2 px-4 py-1 h-fit bg-yellow-800 rounded-2xl  text-white">
                            {schoolwork.total_submissions -
                              schoolwork.submitted}
                            /{schoolwork.total_submissions}
                          </span>
                        </div>
                        <div className="text-sm text-center">
                          <span className="pb-1 block">Checked</span>
                          <span className="mr-2 px-4 py-1 h-fit bg-green-800 rounded-2xl text-white">
                            {schoolwork.checked}/{schoolwork.total_submissions}
                          </span>
                        </div>
                      </div>

                      <button
                        className="mt-auto text-sm px-4 py-0.5 h-fit rounded-md"
                        style={{
                          background: "#000000",
                          color: "var(--default-primary-fg)",
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SchoolWorkHistoryGrid;
