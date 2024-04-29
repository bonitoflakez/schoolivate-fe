const ClassDetails = ({ selectedClass, onBackClick, onStudentClick }) => {
  return (
    <div id="class-details" className="w-full pb-4 min-h-[70vh] rounded-3xl bg-[--bg-secondary]">
      <div
        className="flex items-center mb-4 rounded-t-3xl px-6 pt-6"
        style={{
          background: "var(--ac-secondary)",
          color: "var(--bg-primary)",
        }}
      >
        <div className="h-36 w-36 mb-4 bg-gray-500 rounded-full"></div>

        <div className="flex-grow ml-6">
          <h2 className="text-4xl font-bold">
            {selectedClass.class} ({selectedClass.subject})
          </h2>
          <p className="text-lg font-bold">{`No of Students: ${selectedClass.total_students}`}</p>
        </div>
      </div>
      <div className="px-6 relative">
        <input
          type="text"
          placeholder="Search"
          className="mb-4 p-4 pr-10 border-gray-600 outline-none w-full rounded-lg"
          style={{
            background: "var(--ac-primary)",
            border: "2px solid var(--blue-normal)",
            color: "var(--fg-secondary)",
          }}
        />
        <button
          className="absolute right-10 top-2 px-4 py-2 text-sm rounded-lg"
          style={{
            background: "var(--ac-secondary)",
            color: "var(--bg-primary)",
          }}
          // onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <ul>
        <li className="mx-4 mb-4">
          <div className="p-2 flex items-center justify-between">
            <span className="flex items-center">
              <h3 className="mr-12 opacity-60">Photo</h3>
              <h3 className="opacity-60">Name</h3>
            </span>
            <h3 className="ml-[9rem] opacity-60">Attendance</h3>
            <h3 className="mr-[10.5rem] opacity-60">Grades</h3>
            <div></div>
          </div>
        </li>
        {selectedClass.students.map((student) => (
          <li
            key={student.id}
            className="mx-4 mb-4 rounded-lg"
            style={{
              background: "var(--blue-dark-0)",
            }}
          >
            <div className="p-2 flex items-center justify-between bg-[--ac-primary] rounded-lg">
              <div className="flex items-center">
                <div className="h-16 w-16 mr-2 bg-gray-500 rounded-full"></div>
                <h3 className="text-2xl font-bold">{student.name}</h3>
              </div>
              <p className="text-2xl font-normal">{student.attendance}%</p>
              <p className="text-2xl font-normal">{student.grades}%</p>
              <button
                className="ml-4 text-lg font-bold px-4 py-2 rounded-md"
                style={{
                  background: "var(--blue-normal)",
                  color: "var(--bg-primary)",
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
