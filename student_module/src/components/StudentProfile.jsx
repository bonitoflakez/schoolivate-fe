import { useState } from "react";
import GiveStudentRemarks from "./GiveStudentRemarks";

const StudentProfile = ({ student, onBackClick }) => {
  const [showRemarks, setShowRemarks] = useState(false);

  const switchToRemarksView = () => {
    setShowRemarks(true);
  };

  const switchToProfileView = () => {
    setShowRemarks(false);
  };

  return (
    <div className="w-full h-full pb-4 rounded-2xl">
      {showRemarks ? (
        <GiveStudentRemarks
          onBackClick={switchToProfileView}
          selectedStudentName={student.name}
        />
      ) : (
        <div>
          <div
            className="flex items-center rounded-t-2xl lg:p-6 uw:p-8"
            style={{
              background: "var(--default-primary-accent)",
            }}
          >
            <button
              onClick={onBackClick}
              className="text-sm px-4 py-1 rounded-md"
              style={{ background: "var(--default-secondary-accent)" }}
            >
              Back
            </button>

            <h2 className="text-2xl ml-6 font-semibold">Student Profile</h2>

            <button
              className="ml-auto lg:text-md uw:text-lg px-4 py-1 rounded-md border"
              onClick={switchToRemarksView}
            >
              Remarks
            </button>
          </div>
          <div
            className="h-fit rounded-b-2xl"
            style={{
              background: "var(--default-secondary-accent)",
              color: "#000000",
            }}
          >
            <div className="lg:mx-32 uw:mx-48">
              <div className="flex items-center w-full lg:px-24 lg:py-8 uw:py-12">
                <span className="w-1/6">
                  <div className="lg:h-36 uw:h-42 lg:w-36 uw:w-42 mb-4 bg-gray-500 rounded-full"></div>
                </span>
                <div className="w-5/6 lg:ml-16 uw:ml-20">
                  <h2 className="lg:text-2xl uw:text-3xl font-semibold">
                    {student.name}
                  </h2>
                  <p className="lg:text-md uw:text-lg">{`Roll No: ${student.roll_no}`}</p>
                  <p className="lg:text-md uw:text-lg">{`Class/Section: ${student.class}-${student.section}`}</p>
                  <p className="lg:text-md uw:text-lg">{`DOB: ${student.dob}`}</p>
                  <p className="lg:text-md uw:text-lg">{`Blood Group: ${student.blood_group}`}</p>
                </div>
              </div>

              <div className="mb-4 p-2 outline-none w-full rounded-md">
                <div className="w-full flex justify-between mb-2">
                  <p className="lg:text-xl uw:text-2xl font-semibold">
                    Attendance
                  </p>
                  <p className="lg:text-xl uw:text-2xl font-semibold">
                    {student.attendance}%
                  </p>
                </div>
                <div className="w-full flex justify-between mb-2">
                  <p className="lg:text-xl uw:text-2xl font-semibold">
                    Current Grades
                  </p>
                  <p className="lg:text-xl uw:text-2xl font-semibold">
                    {student.grades}%
                  </p>
                </div>

                <ul>
                  {student.assignments.map((assignment) => (
                    <li
                      id="class-card"
                      key={assignment.id}
                      className="px-6 pt-2 mb-2 rounded-md text-center"
                      style={{
                        background: "var(--default-primary-fg)",
                      }}
                    >
                      <div className="w-full flex items-center justify-between">
                        <h3 className="lg:text-md uw:text-lg mb-2">{`${assignment.name}`}</h3>
                        <p className="lg:text-md uw:text-lg mb-2">{`${assignment.secured_grade}/${assignment.max_grade}`}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="lg:mb-4 uw:mb-6 ">
                  <h2 className="lg:text-xl uw:text-2xl lg:mb-2 uw:mb-4 font-semibold">
                    Parents Info
                  </h2>

                  <div className="flex gap-8">
                    <div className="flex flex-col items-start">
                      <span>
                        <p className="font-normal">Father Name</p>
                        <div className="clear-bottom"></div>
                        <p className="font-semibold">
                          {student.parent_info.father_name}
                        </p>
                      </span>
                      <span>
                        <p className="font-normal">Mother Name</p>
                        <div className="clear-bottom"></div>
                        <p className="font-semibold">
                          {student.parent_info.mother_name}
                        </p>
                      </span>
                    </div>
                    <div className="flex flex-col items-start">
                      <span>
                        <p className="font-normal">Phone No</p>{" "}
                        <div className="clear-bottom"></div>
                        <p className="font-semibold">
                          {student.parent_info.father_mob_no}
                        </p>
                      </span>
                      <span>
                        <p className="font-normal">Phone No</p>{" "}
                        <div className="clear-bottom"></div>
                        <p className="font-semibold">
                          {student.parent_info.mother_mob_no}
                        </p>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-2">
                  <h2 className="lg:text-xl uw:text-2xl font-semibold">
                    Remarks
                  </h2>

                  <ul>
                    {student.remarks.map((remark) => (
                      <li
                        id="class-card"
                        key={remark.id}
                        className="px-6 pt-2 mb-2 rounded-md text-center"
                        style={{
                          background: "var(--default-primary-fg)",
                        }}
                      >
                        <div className="w-full flex items-center justify-between">
                          <h3 className="lg:text-md uw:text-lg mb-2">{`${remark.category}`}</h3>
                          <p className="lg:text-md uw:text-lg mb-2">{`${remark.description}`}</p>
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
