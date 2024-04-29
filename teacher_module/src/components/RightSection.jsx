import ProfileSearch from "./ProfileSearch";
import AttendanceCalendar from "./EventCalendar";
import TimeTable from "./TimeTable";
import { PieChart } from "react-minimal-pie-chart";
import { useClassContext } from "../helper/ClassContext";
import RightCompAssignment from "./RightCompAssignment";

import { useLocation } from "react-router-dom";

const RightSection = () => {
  const { selectedClass, setClassDetails } = useClassContext();

  const location = useLocation();
  const currentPath = location.pathname;
  const onMessages = currentPath === "/messages";

  if (currentPath !== "/classes" && selectedClass) {
    setClassDetails(null);
  }

  return (
    <div
      className={`${
        onMessages ? "hidden" : "block"
      } sticky top-2 md:w-1/4 lg:w-1/4 uw:w-1/5 mx-4 mt-2`}
    >
      <ProfileSearch />
      {selectedClass ? (
        <div
          className="mt-4 rounded-xl"
          style={{
            background: "var(--bg-secondary)",
          }}
        >
          <div className="p-2 mx-2">
            <h2 className="text-3xl font-bold mb-2">Class Performance</h2>
            <div
              className="rounded-lg p-2 pb-4"
              style={{
                background: "var(--blue-dark-0)",
              }}
            >
              <div className="flex items-center">
                <h3 className="text-lg font-medium">{`Class ${selectedClass.class}-${selectedClass.section} (${selectedClass.subject})`}</h3>
                <button
                  className="ml-auto px-2 rounded-md border"
                  style={{
                    fontSize: "var(--sm-txt)",
                    text: "var(--fg-secondary)",
                    border: "2px solid var(--fg-secondary)",
                  }}
                >
                  View More
                </button>
              </div>
              <div className="flex items-end">
                <div className="ml-4">
                  <PieChart
                    className="mr-auto"
                    data={[
                      {
                        title: "Pass",
                        value: selectedClass.pass,
                        color: "var(--blue-normal)",
                      },
                      {
                        title: "Fail",
                        value: selectedClass.fail,
                        color: "var(--blue-light)",
                      },
                    ]}
                    style={{ height: "10em" }}
                    totalValue={selectedClass.pass + selectedClass.fail}
                    lineWidth={42}
                    animate
                  />
                </div>
                <div className="ml-auto mr-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{
                        background: "var(--blue-normal)",
                      }}
                    ></div>
                    <h4>Pass</h4>
                    <h4>
                      {Math.round(
                        (selectedClass.pass /
                          (selectedClass.pass + selectedClass.fail)) *
                          100
                      )}
                      %
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{
                        background: "var(--blue-light)",
                      }}
                    ></div>
                    <h4>Fail</h4>
                    <h4>
                      {Math.round(
                        (selectedClass.fail /
                          (selectedClass.pass + selectedClass.fail)) *
                          100
                      )}
                      %
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <RightCompAssignment />
        </div>
      ) : (
        <>
          <AttendanceCalendar />
          <TimeTable />
        </>
      )}
    </div>
  );
};

export default RightSection;
