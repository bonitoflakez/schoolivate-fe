import React, { useState } from "react";
import Calendar from "react-calendar";
import { add, format, sub } from "date-fns";

import {CaretLeft, CaretRight} from "@phosphor-icons/react";

// react-calendar CSS and overrides
import "react-calendar/dist/Calendar.css";
import "./react-calendar-overrider.css";

import "./ClosingDateField.css";

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
    style={{
      color: "var(--accent-normal)",
      fontSize: "var(--font-xl)",
    }}
  >
    {label}
  </button>
);

const ClosingDateField = () => {
  const [value, onChange] = useState(new Date());
  const [activeStartDate, setActiveStartDate] = useState(new Date());

  const sampleData = {
    "2024-01-01": { status: "present" },
    "2024-01-02": { status: "absent" },
    "2024-01-03": { status: "leave" },
    "2024-02-01": { status: "present" },
    "2024-02-02": { status: "present" },
    "2024-02-05": { status: "leave" },
    "2024-02-06": { status: "leave" },
  };

  const getTileClassName = ({ date }) => {
    const dateKey = format(date, "yyyy-MM-dd");
    const data = sampleData[dateKey];

    if (data) {
      const isAbsent = data.status === "absent";
      const isPresent = data.status === "present";
      const isHalfDay = data.status === "leave";

      if (isAbsent || isPresent || isHalfDay) {
        return isAbsent
          ? "absent-tile"
          : isPresent
          ? "present-tile"
          : "leave-tile";
      }
    }

    return null;
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full">
          <div id="navigation" className="flex items-center my-2 mx-6">
            <div>
              <p className="text-2xl font-semibold">
                {format(activeStartDate, "MMM")}{" "}
                {format(activeStartDate, "yyyy")}
              </p>
            </div>
            <div
                    id="nav-months"
                    className="flex items-center ml-auto gap-4"
                  >
                    <button
                      onClick={() =>
                        setActiveStartDate(sub(activeStartDate, { months: 1 }))
                      }
                    >
                      <CaretLeft
                        size={24}
                        weight="bold"
                        color="#5842d3"
                      />
                    </button>
                    <button
                      onClick={() =>
                        setActiveStartDate(add(activeStartDate, { months: 1 }))
                      }
                    >
                      <CaretRight
                        size={24}
                        weight="bold"
                        color="#5842d3"
                      />
                    </button>
                  </div>
          </div>

          <Calendar
            className={"border-none px-4"}
            activeStartDate={activeStartDate}
            calendarType="iso8601"
            showNavigation={false}
            onChange={onChange}
            value={value}
            tileClassName={getTileClassName}
            formatDay={(locale, date) => format(date, "dd")}
          />
        </div>
      </div>
    </>
  );
};

export default ClosingDateField;
