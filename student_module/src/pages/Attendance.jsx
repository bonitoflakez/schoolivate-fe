import { PieChart } from "react-minimal-pie-chart";
import AttendanceIllus from "../assets/AttendanceIllus";

import React, { useState } from "react";
import Calendar from "react-calendar";
import { add, format, sub } from "date-fns";

// react-calendar CSS and overrides
import "react-calendar/dist/Calendar.css";
import "../assets/MainAttendanceOverride.css";

import {
  ArrowLeft,
  CaretDoubleLeft,
  CaretDoubleRight,
  Plus,
} from "@phosphor-icons/react";

import Modal from "react-modal";

const Attendance = () => {
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

  const countStatusOccurrences = (data) => {
    let presentCount = 0;
    let absentCount = 0;
    let leaveCount = 0;

    Object.values(data).forEach((entry) => {
      switch (entry.status) {
        case "present":
          presentCount++;
          break;
        case "absent":
          absentCount++;
          break;
        case "leave":
          leaveCount++;
          break;
        default:
          break;
      }
    });

    return {
      present: presentCount,
      absent: absentCount,
      leave: leaveCount,
    };
  };

  const StatusOccurrences = countStatusOccurrences(sampleData);

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

  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);

  const openModal = () => {
    setIsLeaveModalOpen(true);
  };

  const closeModal = () => {
    setIsLeaveModalOpen(false);
  };

  const modalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "1rem",
      background: "var(--secondary-bg)",
    },
    overlay: {
      backgroundColor: "none",
    },
  };

  const LeaveApplicationModal = () => {
    return (
      <>
        <Modal
          isOpen={isLeaveModalOpen}
          onRequestClose={closeModal}
          contentLabel="Apply for Leave"
          style={modalStyles}
        >
          <>
            <div className="modal-content w-[40vw] ">
              <div className="top-section text-center">
                <button className="float-left" onClick={closeModal}>
                  <ArrowLeft size={32} weight="bold" />
                </button>
                <h3 className="text-center text-3xl">Apply for Leave</h3>
              </div>
              <div className="from-to-selection mx-8 mt-4 flex justify-between">
                <div className="from">
                  <h3 className="text-2xl font-light">From-date</h3>
                  <input
                    type="date"
                    className="text-xl font-light px-2 py-1 rounded-lg outline-none text-[--border] mt-1"
                  />
                </div>
                <div className="to">
                  <h3 className="text-2xl font-light">To-date</h3>
                  <input
                    type="date"
                    className="text-xl font-light px-2 py-1 rounded-lg outline-none text-[--border] mt-1"
                  />
                </div>
              </div>
              <div className="reason mx-8 mt-2">
                <h3 className="text-2xl font-light">Reason</h3>
                <textarea
                  className="w-full outline-none rounded-lg p-2 font-light resize-none"
                  rows={12}
                />
              </div>
              <div className="mt-4 mx-8 flex items-center gap-8">
                <button className="text-xl w-3/4 border-2 border-[--accent-normal] text-[--accent-normal] py-1 rounded-lg">
                  <div className="flex items-center justify-center gap-2">
                    <Plus size={28} weight="bold" /> Attach File
                  </div>
                </button>
                <button className="text-xl w-1/4 py-1 bg-[--accent-normal] text-[--primary-bg] rounded-lg">
                  Upload
                </button>
              </div>
              <div className="apply flex items-center justify-center mt-6">
                <button className="text-xl px-4 py-2 bg-[--accent-normal] text-[--primary-bg] rounded-lg">
                  Apply Request
                </button>
              </div>
            </div>
          </>
        </Modal>
      </>
    );
  };

  return (
    <>
      <div id="attendance" className="attendance">
        <h3 className="text-[2.5rem] mt-4">Attendance</h3>
        <div
          className={`main-attendance-section mt-2 bg-[--secondary-bg] rounded-2xl pb-4 ${
            isLeaveModalOpen && "blur-sm"
          }`}
        >
          <div className="top-section">
            <div className="flex items-start">
              <button
                className="ml-auto px-2 py-1 m-4 rounded-lg border-2 border-[--border]"
                onClick={openModal}
              >
                <span className="text-[--border]">Apply for leave</span>
              </button>
            </div>
            <div className="w-full flex items-center justify-center">
              <AttendanceIllus />
            </div>
          </div>
          <div className="percentage-display mx-12">
            <h3 className="text-3xl font-medium">Overall Percentage</h3>
            <div className="percentage px-12 py-6 bg-[--accent-extra-light] mt-2 rounded-2xl flex items-center">
              <h3 className="text-6xl text-[--accent-dark]">
                78.9% <span className="text-sm">out of 100%</span>
              </h3>
              <div className="ml-auto relative">
                <PieChart
                  data={[
                    {
                      title: "Absent",
                      value: 21,
                      color: "var(--accent-light)",
                    },
                    {
                      title: "Present",
                      value: 79,
                      color: "var(--accent-dark)",
                    },
                  ]}
                  style={{ height: "6rem" }}
                  totalValue={100}
                  lineWidth={36}
                  animate
                  rounded
                />
                <h3
                  className="absolute top-[40%] left-[30%] font-medium text-sm"
                  style={{
                    color: "var(--accent-dark)",
                  }}
                >
                  Good
                </h3>
              </div>
            </div>
          </div>
          <div className="attendance-calendar mt-4 mx-12">
            <div className="flex justify-center">
              <div className="w-full">
                <div id="navigation" className="flex items-center my-2">
                  <div className="mx-8">
                    <p className="text-3xl font-semibold">
                      {format(activeStartDate, "MMMM")}{" "}
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
                      <CaretDoubleLeft
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
                      <CaretDoubleRight
                        size={24}
                        weight="bold"
                        color="#5842d3"
                      />
                    </button>
                  </div>
                </div>

                <Calendar
                  className={"border-none"}
                  activeStartDate={activeStartDate}
                  calendarType="iso8601"
                  showNavigation={false}
                  onChange={onChange}
                  value={value}
                  tileClassName={getTileClassName}
                  formatDay={(locale, date) => format(date, "dd")}
                  formatShortWeekday={(locale, date) => format(date, "EEEE")}
                />
              </div>
            </div>
            <div className="mx-8 grid grid-cols-3 gap-4 text-xl mt-4">
              <div className="bg-[--green] flex flex-col items-center justify-center rounded-lg py-4">
                <h3>{StatusOccurrences.present}</h3>
                <h3>Present</h3>
              </div>
              <div className="bg-[--red] flex flex-col items-center justify-center rounded-lg py-4">
                <h3>{StatusOccurrences.absent}</h3>
                <h3>Absent</h3>
              </div>
              <div className="bg-[--leave] flex flex-col items-center justify-center rounded-lg py-4">
                <h3>{StatusOccurrences.leave}</h3>
                <h3>Leave</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LeaveApplicationModal />
    </>
  );
};

export default Attendance;
