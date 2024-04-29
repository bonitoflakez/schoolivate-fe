import { PieChart } from "react-minimal-pie-chart";

/**
 *
 * Component: Attendance
 * Renders: Attendance card for dashboard
 */

const Attendance = () => {
  return (
    <div className="w-3/5">
      <div
        className="px-4 py-2 m-4 rounded-xl"
        style={{
          background: "var(--primary-bg)",
        }}
      >
        <div className="flex items-center">
          <h3 className="text-3xl font-normal">Attendance</h3>
          <button
            className="px-4 py-0.5 font-semibold text-xs ml-auto rounded-md"
            style={{
              border: "2px solid var(--accent-dark)",
              color: "var(--accent-dark)",
            }}
          >
            View More
          </button>
        </div>
        <div className="mt-4">
          <h4 className="font-light">Overall Percentage</h4>
        </div>
        <div className="flex items-center">
          <div
            className=""
            style={{
              color: "var(--accent-dark)",
            }}
          >
            <h3
              className="font-normal"
              style={{
                fontSize: "var(--font-xxxl)",
              }}
            >
              78.9%
            </h3>
            <p
              className="font-medium"
              style={{
                fontSize: "var(--font-sm)",
              }}
            >
              out of 100%
            </p>
          </div>
          <div className="ml-auto relative">
            {/*
             * PieChart to display student attendance out of 100
             */}
            <PieChart
              data={[
                {
                  title: "Absent",
                  value: 20, // add total absenst here
                  color: "var(--accent-light)",
                },
                {
                  title: "Present",
                  value: 80, // add total presents here
                  color: "var(--accent-dark)",
                },
              ]}
              style={{ height: "9em" }}
              // improvement: would be better to put addition
              // of both presents and absents for `totalValue`
              totalValue={100}
              lineWidth={36}
              animate
              rounded
            />
            <h3
              className="absolute top-[40%] left-[35%] font-medium text-lg"
              style={{
                color: "var(--accent-dark)",
              }}
            >
              {/* 
              add conditionals for attendance record 
              
              const good = 75;
              {(attendance >= good) ? "Good" : Bad}
              */}
              Good
            </h3>
          </div>
        </div>
        <div className="flex grid-row grid-cols-3 gap-6 justify-between my-4 text-xl">
          <div
            className="flex flex-col items-center justify-center h-16 w-44 font-medium text-white rounded-xl"
            style={{
              background: "var(--accent-dark)",
            }}
          >
            {/* total presents */}
            <h4>16</h4>
            <h4>Present</h4>
          </div>
          <div
            className="flex flex-col items-center justify-center h-16 w-44 font-medium rounded-xl"
            style={{
              background: "var(--accent-light)",
            }}
          >
            {/* total absents */}
            <h4>5</h4>
            <h4>Absent</h4>
          </div>
          <div
            className="flex flex-col items-center justify-center h-16 w-44 font-medium rounded-xl"
            style={{
              background: "var(--leave)",
            }}
          >
            {/* total leaves */}
            <h4>3</h4>
            <h4>Leaves</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
