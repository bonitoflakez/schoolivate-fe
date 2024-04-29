import { useState } from "react";
import Calendar from "react-calendar";
import ClosingDateField from "./newEventCalendar";

const AttendanceCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div className="my-1">
        <div
          id="calendar"
          className="py-2 rounded-2xl"
          style={{
            background: "var(--secondary-bg)",
          }}
        >
          <hr className="opacity-60" />
          <ClosingDateField />
        </div>
      </div>
    </>
  );
};

export default AttendanceCalendar;
