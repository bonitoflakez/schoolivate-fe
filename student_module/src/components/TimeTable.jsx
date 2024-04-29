import { Link } from "react-router-dom";
import { timetableData } from "../utils/timetable";

const TimeTable = () => {
  return (
    <>
      <div className="px-6">
        <p className="text-2xl font-semibold mt-4">Time Table</p>
        <div
          className="timetable rounded-md p-2"
        >
          {timetableData.map((lecture) => (
            <div
              key={lecture.id}
              style={{
                background: "var(--accent-extra-light)",
              }}
              className="px-4 py-2 my-2 rounded-lg flex items-center"
            >
              {lecture.break ? (
                <>
                  <div className="ml-2 py-2 w-full flex items-center">
                    <div>
                      <h3 className="text-xl font-normal">
                        {lecture.subject}
                      </h3>
                    </div>
                    <div className="ml-auto">
                      <h3 className="text-xl font-normal">{lecture.time}</h3>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-2xl font-normal">{lecture.id}.</p>
                  </div>
                  <div className="ml-6 w-full flex items-center">
                    <div>
                      <h3 className="text-xl font-normal">
                        {lecture.subject}
                      </h3>
                      <p className="text-md font-normal opacity-60">
                        {lecture.teacher}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <h3 className="text-xl font-normal">{lecture.time}</h3>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TimeTable;
