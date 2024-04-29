import { PieChart } from "react-minimal-pie-chart";

import PropTypes from "prop-types";

const TermAttendance = ({ termData }) => {
  const totalLectures = termData.present + termData.absent;
  const attendancePercentage = Math.round(
    (termData.present / totalLectures) * 100
  );

  return (
    <div className="bg-[--accent-extra-light] rounded-2xl p-4 flex items-center gap-x-12">
      <div className="term-left-data">
        <h3 className="text-2xl">Term {termData.term}</h3>
        <h3 className="text-5xl text-[--accent-normal]">
          {attendancePercentage.toFixed(2) + "%"}{" "}
          <span className="text-xs">out of 100%</span>
        </h3>
      </div>
      <div className="term-right-data">
        <div className="ml-auto relative">
          <PieChart
            data={[
              {
                title: "Absent",
                value: termData.absent,
                color: "var(--accent-light)",
              },
              {
                title: "Present",
                value: termData.present,
                color: "var(--accent-normal)",
              },
            ]}
            style={{ height: "5em" }}
            totalValue={totalLectures}
            lineWidth={28}
            animate
            rounded
          />
          <h3
            className="absolute top-[37.5%] left-[27.5%] font-medium text-sm"
            style={{
              color: "var(--accent-normal)",
            }}
          >
            Good
          </h3>
        </div>
      </div>
    </div>
  );
};

TermAttendance.propTypes = {
  termData: PropTypes.object.isRequired,
};

export default TermAttendance;
