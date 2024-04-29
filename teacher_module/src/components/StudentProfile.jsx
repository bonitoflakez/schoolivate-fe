import { useState } from "react";
import GiveStudentRemarks from "./GiveStudentRemarks";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

const StudentProfile = ({ student, onBackClick }) => {
  const [showRemarks, setShowRemarks] = useState(false);

  const switchToRemarksView = () => {
    setShowRemarks(true);
  };

  const switchToProfileView = () => {
    setShowRemarks(false);
  };

  return (
    <div className="w-full h-full pb-4 rounded-2xl bg-[--bg-secondary]">
      {showRemarks ? (
        <GiveStudentRemarks
          onBackClick={switchToProfileView}
          selectedStudentName={student.name}
        />
      ) : (
        <div>
          <div
            className="flex items-center rounded-t-2xl p-6"
            style={{
              background: "var(--ac-secondary)",
              color: "var(--bg-primary)",
            }}
          >
            <button onClick={onBackClick} className="rounded-md">
              <ArrowLeft size={32} />
            </button>

            <h2 className="text-2xl ml-6 font-bold">Student Profile</h2>

            <button
              className="ml-auto text-lg px-4 py-1 rounded-md border-2 bg-[--ac-primary]"
              onClick={switchToRemarksView}
            >
              Remarks
            </button>
          </div>
          <div
            className="h-fit rounded-b-2xl"
            style={{
              background: "var(--blue-light-0)",
              color: "#000000",
            }}
          >
            <div className="lg:mx-32 uw:mx-48">
              <div className="flex items-center w-full py-12">
                <div className="">
                  <div className="h-44 w-44 mb-4 bg-gray-500 rounded-full"></div>
                </div>
                <div className="ml-20">
                  <h2 className="text-5xl font-bold">{student.name}</h2>
                  <p className="mt-2 text-xl">{`Roll No: ${student.roll_no}`}</p>
                  <p className="text-xl">{`Class/Section: ${student.class}-${student.section}`}</p>
                  <p className="text-xl">{`DOB: ${student.dob}`}</p>
                  <p className="text-xl">{`Blood Group: ${student.blood_group}`}</p>
                </div>
              </div>

              <div className="mb-4 p-2 outline-none w-full rounded-md">
                <div className="w-full flex justify-between mb-2">
                  <p className="text-xl font-bold">Attendance</p>
                  <p className="text-xl font-bold">{student.attendance}%</p>
                </div>
                <div className="w-full flex justify-between mb-2">
                  <p className="text-xl font-bold">Current Grades</p>
                  <p className="text-xl font-bold">{student.grades}%</p>
                </div>

                <ul>
                  <li className="px-6 pt-2 mb-2 rounded-md text-center">
                    <div className="w-full flex items-center justify-between">
                      <div className="flex items-center">
                        <h3 className="text-sm opacity-60">Sr. No.</h3>
                        <h3 className="text-sm ml-4 opacity-60">Name</h3>
                      </div>
                      <p className="text-sm mb-2 opacity-60">Grade</p>
                    </div>
                  </li>
                  {student.assignments.map((assignment) => (
                    <li
                      id="class-card"
                      key={assignment.id}
                      className="px-6 pt-2 mb-2 rounded-md text-center"
                      style={{
                        background: "var(--bg-primary)",
                      }}
                    >
                      <div className="w-full flex items-center justify-between">
                        <div className="flex items-center">
                          <h3 className="text-xl mb-2">{assignment.id}.</h3>
                          <h3 className="text-xl ml-4 mb-2">
                            {assignment.name}
                          </h3>
                        </div>
                        <p className="text-xl mb-2">{`${assignment.secured_grade}/${assignment.max_grade}`}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mb-4 ">
                  <h2 className="text-xl mt-8 mb-2 font-bold pb-3">
                    Parents Info
                  </h2>

                  <div className="flex gap-8">
                    <div className="flex flex-col items-start">
                      <span>
                        <p className="font-normal">Father Name</p>
                        <div className="clear-bottom"></div>
                        <p className="font-bold text-xl pt-2">
                          {student.parent_info.father_name}
                        </p>
                      </span>
                      <span>
                        <p className="font-normal">Mother Name</p>
                        <div className="clear-bottom"></div>
                        <p className="font-bold text-xl pt-2">
                          {student.parent_info.mother_name}
                        </p>
                      </span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span>
                        <p className="font-normal">Phone No</p>{" "}
                        <div className="clear-bottom"></div>
                        <p className="font-bold text-xl pt-2">
                          {student.parent_info.father_mob_no}
                        </p>
                      </span>
                      <span>
                        <p className="font-normal">Phone No</p>{" "}
                        <div className="clear-bottom"></div>
                        <p className="font-bold text-xl pt-2">
                          {student.parent_info.mother_mob_no}
                        </p>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-2">
                  <h2 className="lg:text-xl uw:text-2xl font-bold mt-4 mb-4">
                    Remarks
                  </h2>

                  <ul>
                    {student.remarks.map((remark) => (
                      <li
                        id="class-card"
                        key={remark.id}
                        className="px-6 pt-2 mb-2 rounded-md text-center"
                        style={{
                          background: "var(--bg-primary)",
                        }}
                      >
                        <div className="w-full flex items-center justify-between">
                          <h3 className="text-xl mb-2">{`${remark.id}. ${remark.category}`}</h3>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentProfile;
