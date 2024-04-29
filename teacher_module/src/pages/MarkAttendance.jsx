import React, { useState } from "react";
import { markAttendanceData } from "../utils/markAttendanceData";
import { Check, X, ArrowLeft } from "@phosphor-icons/react";
import PresentIcon from "../assets/Present";
import AbsentIcon from "../assets/Absent";
import { useClassContext } from "../helper/ClassContext";

const MarkAttendance = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const {
    selectedClass: selectedClassEX,
    setClassDetails: setSelectedClassEX,
  } = useClassContext();

  const handleGridClick = (classDetails) => {
    setSelectedClass(classDetails);
    setSelectedClassEX(classDetails);
  };

  return (
    <div className="mt-8">
      {selectedClass ? (
        <div>
          <div className="flex">
            <button
              onClick={() => {
                setSelectedClass(null);
                setSelectedClassEX(null);
              }}
            >
              <ArrowLeft size={32} weight="bold" />
            </button>
            <h3 className="text-2xl ml-2 font-bold">Attendance</h3>
          </div>
          <div
            className="mt-4 p-4 rounded-t-2xl flex items-center"
            style={{
              background: "var(--default-primary-accent)",
            }}
          >
            <div className="flex items-center h-24">
              <div className="bg-gray-300 w-32 h-32 rounded-full relative top-8"></div>
              <div className="ml-4">
                <h4 className="text-3xl font-bold mb-2">
                  Class {selectedClass.class}-{selectedClass.section} (
                  {selectedClass.subject})
                </h4>
                <p>No of Students</p>
              </div>
            </div>
            <div className="ml-auto">
              {selectedClass.marked ? (
                <button className="px-2 py-1 bg-green-700 rounded-md">
                  Marked Done
                </button>
              ) : (
                <button className="px-2 py-1 bg-yellow-600 rounded-md">
                  Pending
                </button>
              )}
            </div>
          </div>
          <div
            className="py-6 px-4 rounded-b-2xl pt-12 min-h-[70vh]"
            style={{
              background: "var(--default-secondary-bg)",
            }}
          >
            <div className="px-4 relative">
              <input
                type="text"
                placeholder="Search Student"
                className="px-4 py-3 w-full rounded-lg outline-none "
                style={{
                  background: "var(--default-primary-accent)",
                  border: "2px solid var(--blue-normal)",
                  color: "var(--blue-light)",
                }}
              ></input>
              <button
                className="absolute right-10 top-3 px-4 py-1 text-sm rounded-md"
                style={{
                  background: "var(--blue-normal)",
                  color: "var(--blue-light)",
                }}
                // onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <ul className="my-6 px-4">
              <li className="flex items-center mb-4 px-4 py-2 rounded-md">
                <h3 className="text-md">Roll no</h3>
                <h3 className="ml-16 text-md">Full name</h3>
                <div className="flex items-center ml-auto">
                  <h3 className="text-md">Present</h3>
                  <h3 className="ml-4 text-md">Absent</h3>
                </div>
              </li>
              {selectedClass.students.map((student) => (
                <li
                  key={student.id}
                  className="flex items-center mb-4 px-4 py-2 rounded-md"
                  style={{
                    background: "var(--default-primary-accent)",
                  }}
                >
                  <h3 className="text-2xl font-medium">{student.id}.</h3>
                  <div className="ml-4 h-20 w-20 bg-gray-500 rounded-full"></div>
                  <h3 className="ml-4 text-2xl font-medium">{student.name}</h3>
                  <div className="flex items-center ml-auto">
                    <div className="flex items-center gap-8 mr-2">
                      <button className="bg-gray-200 px-2 h-12 w-12 flex items-center rounded-full">
                        <PresentIcon />
                      </button>
                      <button className="bg-gray-200 px-2 h-12 w-12 flex items-center rounded-full">
                        <AbsentIcon />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <>
          <h3 className="text-3xl font-bold">Attendance</h3>
          <div className="flex items-center justify-center">
            <div className="flex flex-wrap justify-center gap-12 mt-4 w-[50vw]">
              {markAttendanceData.map((attendanceEntry) => (
                <div
                  key={attendanceEntry.id}
                  className="p-4 rounded-2xl shadow-md cursor-pointer w-64"
                  style={{
                    background: "var(--default-primary-accent)",
                    border:
                      attendanceEntry.marked === true
                        ? "4px solid var(--marked-attendance)"
                        : "4px solid var(--pending-attendance)",
                  }}
                  onClick={() => handleGridClick(attendanceEntry)}
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-300 w-32 h-32 mb-4 rounded-full"></div>

                    <p className="text-xl font-bold">
                      Class {attendanceEntry.class}-{attendanceEntry.section}
                    </p>
                    <p className="text-xl font-bold">
                      ({attendanceEntry.subject})
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MarkAttendance;
