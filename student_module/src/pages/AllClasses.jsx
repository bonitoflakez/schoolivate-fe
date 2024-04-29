// AllClasses.jsx
import React, { useState } from "react";
import ClassDetails from "../components/ClassDetails";
import StudentProfile from "../components/StudentProfile";
import ClassGrid from "../components/ClassGrid";

const AllClasses = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleCardClick = (cls) => {
    setSelectedClass(cls);
  };

  const handleBackClick = () => {
    setSelectedClass(null);
    setSelectedStudent(null);
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  return (
    <div className="w-full p-6 my-4 rounded-2xl">
      <h2 className="font-semibold text-2xl mb-4">All Classes</h2>
      {selectedClass ? (
        selectedStudent ? (
          <StudentProfile
            student={selectedStudent}
            onBackClick={handleBackClick}
          />
        ) : (
          <ClassDetails
            selectedClass={selectedClass}
            onBackClick={handleBackClick}
            onStudentClick={handleStudentClick}
          />
        )
      ) : (
        <ClassGrid handleCardClick={handleCardClick} />
      )}
    </div>
  );
};

export default AllClasses;
