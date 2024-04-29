import PropTypes from "prop-types";

const AcademicPerformance = ({ termData }) => {
  return (
    <div className="term-1 bg-[--accent-extra-light] px-12 py-6 rounded-3xl">
      <h3 className="text-xl text-center mb-6">Term {termData.term}</h3>
      <div className="flex items-center justify-center gap-x-12">
        <div className="subjects text-sm">
          <h3 className="font-thin">Subject</h3>
          {termData.subjects.map((subject) => (
            <h3 key={subject.id} className="font-thin">
              {subject.name}
            </h3>
          ))}
        </div>
        <div className="subjects text-sm">
          <h3 className="font-thin">Grades</h3>
          {termData.subjects.map((subject) => (
            <h3 key={subject.id} className="font-light">
              {subject.grades}/{subject.totalMarks}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

AcademicPerformance.propTypes = {
  termData: PropTypes.object.isRequired,
};

export default AcademicPerformance;
