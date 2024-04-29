import PropTypes from "prop-types";

const StudentProfile = ({ studentDetails, parentDetails }) => {
  return (
    <>
      <h3 className="text-3xl mt-12 mb-6 text-center font-medium">Profile</h3>
      <div className="student-details flex items-start justify-center gap-6">
        <div className="pfp h-40 w-40 bg-gray-400 rounded-full"></div>
        <div className="details">
          <h3 className="text-3xl font-semibold">{studentDetails.name}</h3>
          <div className="flex items-start gap-4">
            <div className="student-additional">
              <h3 className="text-2xl mb-2">
                Class {studentDetails.class} ({studentDetails.subject})
              </h3>
              <div className="flex items-center gap-x-8">
                <div className="flex flex-col items-start gap-y-4">
                  <h3 className="text-lg font-light">Roll Number</h3>
                  <h3 className="text-lg font-light">DOB</h3>
                  <h3 className="text-lg font-light">Blood Group</h3>
                  <h3 className="text-lg font-light">Emergency Contact</h3>
                </div>
                <div className="flex flex-col items-start gap-y-4 text-[--accent-normal]">
                  <h3 className="text-lg font-light">
                    {studentDetails.roll_no}
                  </h3>
                  <h3 className="text-lg font-light">{studentDetails.dob}</h3>
                  <h3 className="text-lg font-light">
                    {studentDetails.blood_group}
                  </h3>
                  <h3 className="text-lg font-light">
                    {studentDetails.emergency_contact}
                  </h3>
                </div>
              </div>
            </div>
            <div className="parents-additional">
              <h3 className="text-2xl mb-2">Parents Information</h3>
              <div className="flex items-center gap-x-8">
                <div className="flex flex-col items-start gap-y-4">
                  <h3 className="text-lg font-light">Father's Name</h3>
                  <h3 className="text-lg font-light">Father's Contact</h3>
                  <h3 className="text-lg font-light">Mother's Name</h3>
                  <h3 className="text-lg font-light">Mother's Contact</h3>
                </div>
                <div className="flex flex-col items-start gap-y-4 text-[--accent-normal]">
                  <h3 className="text-lg font-light">
                    {parentDetails.father_name}
                  </h3>
                  <h3 className="text-lg font-light">
                    {parentDetails.father_contact}
                  </h3>
                  <h3 className="text-lg font-light">
                    {parentDetails.mother_name}
                  </h3>
                  <h3 className="text-lg font-light">
                    {parentDetails.mother_contact}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

StudentProfile.propTypes = {
  studentDetails: PropTypes.object.isRequired,
  parentDetails: PropTypes.object.isRequired,
};

export default StudentProfile;
