import AcademicPerformance from "../components/ReportCard/AcademicPerformance";
import Remarks from "../components/ReportCard/Remarks";
import StudentProfile from "../components/ReportCard/StudentProfile";
import TermAttendance from "../components/ReportCard/TermAttendance";

const ReportCard = () => {
  const student = {
    name: "Divyanshu Nagpal",
    class: "5-B",
    subject: "Science",
    roll_no: 2723,
    dob: "25th March 2003",
    blood_group: "AB Positive",
    emergency_contact: "+91-90566-3385",
  };

  const parent = {
    father_name: "Rahul Nagpal",
    father_contact: "+91-91283-89005",
    mother_name: "Pinky Nagpal",
    mother_contact: "+91-98145-66358",
  };

  const termData = [
    {
      id: 1,
      term: "I",
      present: 79,
      absent: 80,
      subjects: [
        {
          id: 1,
          name: "English",
          grades: 54,
          totalMarks: 100,
        },
        {
          id: 2,
          name: "Hindi",
          grades: 54,
          totalMarks: 100,
        },
        {
          id: 3,
          name: "Mathematics",
          grades: 54,
          totalMarks: 100,
        },
        {
          id: 4,
          name: "Science",
          grades: 54,
          totalMarks: 100,
        },
        {
          id: 5,
          name: "Social Science",
          grades: 54,
          totalMarks: 100,
        },
        {
          id: 6,
          name: "Sanskrit",
          grades: 54,
          totalMarks: 100,
        },
      ],
    },
    {
      id: 2,
      term: "II",
      present: 80,
      absent: 20,
      subjects: [
        {
          id: 1,
          name: "English",
          grades: 54,
          totalMarks: 100,
        },
        {
          id: 2,
          name: "Hindi",
          grades: 54,
          totalMarks: 100,
        },
        {
          id: 3,
          name: "Mathematics",
          grades: 54,
          totalMarks: 100,
        },
        {
          id: 4,
          name: "Science",
          grades: 54,
          totalMarks: 100,
        },
        {
          id: 5,
          name: "Social Science",
          grades: 54,
          totalMarks: 100,
        },
        {
          id: 6,
          name: "Sanskrit",
          grades: 54,
          totalMarks: 100,
        },
      ],
    },
  ];

  const teacherRemarks = {
    teacher_name: "Viraj Metha",
    remarks:
      "Thanks for a fantastic year at school this year! It's been awesome to see everyone grow and develop so much and our community has come together so wonderfully with all of our exciting new projects and activities. Hope you all have a fantastic summer - and looking forward to seeing everyone back in the fall.",
  };

  return (
    <>
      <h3 className="text-[2.5em] font-medium my-6">Report Card</h3>
      <div className="main-report-container bg-[--secondary-bg] mt-4 p-4 rounded-2xl">
        <StudentProfile studentDetails={student} parentDetails={parent} />
        <div className="attendance-details my-6">
          <h3 className="text-3xl font-semibold text-center">Attendance</h3>
          <div className="flex items-center justify-center mt-4">
            <div className="grid grid-cols-2 gap-x-8 mx-12">
              {termData.map((term) => (
                <div key={term.id}>
                  <TermAttendance termData={term} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="academic-performance my-6">
          <h3 className="text-3xl font-semibold text-center mb-6">
            Academic Performance
          </h3>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-x-12">
              {termData.map((term) => (
                <div key={term.id}>
                  <AcademicPerformance termData={term} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="remarks my-6 mx-36">
          <h3 className="text-3xl font-semibold text-center mb-6">
            Remarks by Teacher
          </h3>
          <div className="remakrs-sections">
            <Remarks teacherRemarks={teacherRemarks} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportCard;
