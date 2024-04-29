import React, { useState } from "react";
import Calendar from "react-calendar";
import { add, format, sub } from "date-fns";

// react-calendar CSS and overrides
import "react-calendar/dist/Calendar.css";
import "./react-calendar-overrider.css";

import "./ClosingDateField.css";
import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const NavButton = ({ label, onClick }) => (
  <button
    className="nav-month-btn"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
  >
    {label}
  </button>
);

const ClosingDateField = ({ closingDate }) => {
  const [activeStartDate, setActiveStartDate] = useState(
    closingDate || new Date()
  );

  const sampleData = {
    "2024-01-01": { status: "present" },
    "2024-01-02": { status: "absent" },
    "2024-01-03": { status: "half-day" },
  };

  const getTileClassName = ({ date }) => {
    const dateKey = format(date, "yyyy-MM-dd");
    const data = sampleData[dateKey];

    if (data) {
      const isAbsent = data.status === "absent";
      const isPresent = data.status === "present";
      const isHalfDay = data.status === "half-day";

      if (isAbsent || isPresent || isHalfDay) {
        return isAbsent
          ? "absent-tile"
          : isPresent
          ? "present-tile"
          : "half-day-tile";
      }
    }

    return null;
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center mb-2">
        <div className="flex mx-8 justify-between w-full">
          <button
            className="outline-none"
            onClick={() =>
              setActiveStartDate(sub(activeStartDate, { months: 1 }))
            }
          >
            <CaretCircleLeft
              height={32}
              width={32}
              weight="fill"
              color="var(--ac-secondary)"
            />
          </button>

          <span className="font-semibold">
            {format(activeStartDate, "MMM")} {format(activeStartDate, "yyyy")}
          </span>

          <button
            className="outline-none"
            onClick={() =>
              setActiveStartDate(add(activeStartDate, { months: 1 }))
            }
          >
            <CaretCircleRight
              height={32}
              width={32}
              weight="fill"
              color="var(--ac-secondary)"
            />
          </button>
        </div>
      </div>

      <Calendar
        className="border-none mx-auto"
        activeStartDate={activeStartDate}
        calendarType="US"
        showNavigation={false}
        tileClassName={getTileClassName}
        formatDay={(locale, date) => format(date, "dd")}
      />
    </div>
  );
};

export default ClosingDateField;
