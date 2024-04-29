const ClassDetails = ({ selectedClass, onBackClick, onStudentClick }) => {
  return (
    <div id="class-details" className="w-full pb-4 min-h-[70vh] rounded-3xl">
      <div
        className="flex items-center mb-4 rounded-t-3xl px-6 pt-6"
        style={{
          background: "var(--default-primary-accent)",
        }}
      >
        <div className="h-32 w-32 mb-4 bg-gray-500 rounded-full"></div>

        <div className="flex-grow ml-6">
          <h2 className="lg:text-2xl font-semibold">
            {selectedClass.class} ({selectedClass.subject})
          </h2>
          <p className="lg:text-lg">{`Number of Students: ${selectedClass.total_students}`}</p>
          <p className="lg:text-lg">{`Pass: ${selectedClass.pass}, Fail: ${selectedClass.fail}`}</p>
        </div>

        <button
          onClick={onBackClick}
          className="text-sm px-4 py-1 rounded-md"
          style={{ background: "var(--default-secondary-accent)" }}
        >
          Back
        </button>
      </div>
      <div className="px-6 relative">
        <input
          type="text"
          placeholder="Search students..."
          className="mb-4 p-2 pr-10 border-gray-600 outline-none w-full rounded-md"
          style={{
            background: "var(--default-primary-accent)",
          }}
        />
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

      <ul>
        {selectedClass.students.map((student) => (
          <li key={student.id} className="flex items-center mb-4 px-6">
            <div className="h-16 w-16 mr-4 bg-gray-500 rounded-full"></div>
            <div className="flex w-full justify-between items-center">
              <h3>{student.name}</h3>
              <p>{`Attendance: ${student.attendance}%`}</p>
              <p>{`Grades: ${student.grades}%`}</p>
              <button
                className="ml-4 text-sm px-4 py-1 rounded-md"
                style={{
                  background: "var(--default-primary-accent)",
                }}
                onClick={() => onStudentClick(student)}
              >
                View Profile
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassDetails;
