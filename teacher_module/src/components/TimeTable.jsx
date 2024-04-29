import { Link } from "react-router-dom";
import { timetableData } from "../utils/timetable";

const TimeTable = () => {
  return (
    <div>
      <p className="text-3xl font-normal mb-2">Time Table</p>
      <div
        className="timetable rounded-xl p-4 h-[45vh] overflow-y-auto"
        style={{
          background: "var(--bg-secondary)",
        }}
      >
        {timetableData.map((lecture) => (
          <div key={lecture.id}>
            <p className="text-md">{lecture.time}</p>
            {lecture.break ? (
              <div className="flex items-center">
                <div className="border-r border-dashed h-12 mx-2"></div>
                <div className="ml-4 px-2 py-3 rounded-md my-2 details-container w-full bg-[--bg-primary] text-[--fg-secondary]">
                  <h3 className="text-lg font-bold">Lunch Break</h3>
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <div className="ml-4 border-r border-[--fg-primary] h-12 mx-2"></div>
                <div className="ml-4 p-2 rounded-md my-2 w-full flex items-center bg-[--ac-primary]">
                  <h3 className="text-lg font-medium mr-2 h-10 w-10 bg-[--bg-primary] text-[--fg-secondary] flex items-center justify-center rounded-full">
                    {lecture.id}.
                  </h3>
                  <div className="details-container">
                    <div className="flex items-center">
                      <h3 className="text-md font-bold">
                        Class {lecture.class}-{lecture.section} (
                        {lecture.subject})
                      </h3>
                    </div>
                    <div>
                      <p className="text-sm">{lecture.course_code}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeTable;
