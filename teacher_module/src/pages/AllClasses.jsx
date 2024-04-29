// AllClasses.jsx
import React, { useState } from "react";
import ClassDetails from "../components/ClassDetails";
import StudentProfile from "../components/StudentProfile";
import ClassGrid from "../components/ClassGrid";
import { useClassContext } from "../helper/ClassContext";
import { ArrowLeft } from "@phosphor-icons/react";

const AllClasses = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const { setClassDetails: setSelectedClassDet } = useClassContext();

  const handleCardClick = (cls) => {
    setSelectedClass(cls);
    setSelectedClassDet(cls);
  };

  const handleBackClick = () => {
    setSelectedClass(null);
    setSelectedStudent(null);
    setSelectedClassDet(null);
  };

  const handleStudentProfileBackClick = () => {
    setSelectedStudent(null);
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  // Define the component to render based on the current state
  let renderComponent;
  if (selectedClass) {
    if (selectedStudent) {
      renderComponent = (
        <StudentProfile
          student={selectedStudent}
          onBackClick={handleStudentProfileBackClick}
        />
      );
    } else {
      renderComponent = (
        <ClassDetails
          selectedClass={selectedClass}
          onBackClick={handleBackClick}
          onStudentClick={handleStudentClick}
        />
      );
    }
  } else {
    renderComponent = <ClassGrid handleCardClick={handleCardClick} />;
  }

  return (
    <div className="w-full p-6 my-4 rounded-2xl">
      <h2 className="font-bold text-4xl mb-4">
        {selectedClass ? (
          <div className="flex items-center justify-start gap-x-4">
            <button className="" onClick={handleBackClick}>
              <ArrowLeft size={38} />
            </button>
            <h3>Class Profile</h3>
          </div>
        ) : (
          "All Classes"
        )}
      </h2>
      {/* Render the component based on the variable */}
      {renderComponent}
    </div>
  );
};

export default AllClasses;
