import React, { useState } from "react";
import { markAttendanceData } from "../utils/markAttendanceData";
import { Check, X, ArrowLeft } from "@phosphor-icons/react";

const MarkAttendance = () => {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleGridClick = (classDetails) => {
    setSelectedClass(classDetails);
  };

  return (
    <>
      {selectedClass ? (
        <div>
          <div className="flex">
            <button onClick={() => setSelectedClass(null)}>
              <ArrowLeft size={32} weight="bold" />
            </button>
            <h3 className="text-2xl ml-2 font-semibold">Attendance</h3>
          </div>
          <div
            className="mt-4 p-4 rounded-t-2xl flex items-center"
            style={{
              background: "var(--default-primary-accent)",
            }}
          >
            <div className="flex items-center">
              <div className="bg-gray-300 w-24 h-24 mb-4 rounded-full"></div>
              <div className="ml-4">
                <h4 className="text-xl font-semibold mb-2">
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
            className="py-6 px-4 rounded-b-2xl min-h-[70vh]"
            style={{
              background: "var(--default-secondary-bg)",
            }}
          >
            <div className="px-6 relative">
              <input
                type="text"
                placeholder="Search Student"
                className="p-2 w-full rounded-md outline-none text-white placeholder-white"
                style={{
                  background: "var(--default-primary-accent)",
                }}
              ></input>
              <button
                className="absolute right-8 top-1.5 px-3 py-1 text-sm rounded-md"
                style={{
                  background: "var(--default-secondary-accent)",
                }}
                // onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <ul className="my-6">
              {selectedClass.students.map((student) => (
                <li
                  key={student.id}
                  className="flex items-center mb-4 px-6 py-2 rounded-md"
                  style={{
                    background: "var(--default-primary-accent)",
                  }}
                >
                  <div className="h-16 w-16 bg-gray-500 rounded-full"></div>
                  <h3 className="ml-4">{student.name}</h3>
                  <div className="flex items-center ml-auto">
                    <div className="flex flex-col items-center">
                      <p>Present</p>
                      <div className="flex items-center gap-4">
                        <button className="p-2 bg-gray-700 rounded-full">
                          <Check size={24} weight="bold" />
                        </button>
                        <button className="p-2 bg-gray-700 rounded-full">
                          <X size={24} weight="bold" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-semibold">Attendance</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {markAttendanceData.map((attendanceEntry) => (
              <div
                key={attendanceEntry.id}
                className="p-4 rounded-md shadow-md cursor-pointer"
                style={{
                  background:
                    selectedClass === attendanceEntry
                      ? "var(--selected-primary-accent)"
                      : "var(--default-primary-accent)",
                }}
                onClick={() => handleGridClick(attendanceEntry)}
              >
                <div className="flex flex-col items-center">
                  <div className="bg-gray-300 w-32 h-32 mb-4 rounded-full"></div>

                  <p className="text-xl font-semibold">
                    Class {attendanceEntry.class}-{attendanceEntry.section}
                  </p>
                  <p className="text-xl font-semibold">
                    ({attendanceEntry.subject})
                  </p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default MarkAttendance;
