import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Attendance = () => {
  const [isAttendanceDropdownOpen, setAttendanceDropdownOpen] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(1);

  const toggleAttendanceDropdown = () => {
    setAttendanceDropdownOpen(!isAttendanceDropdownOpen);
  };

  const present = "rgba(76, 175, 80, 0.8)";
  const absent = "rgba(255, 0, 0, 0.8)";
  const leave = "rgba(255, 235, 59, 0.8)";

  // Sample Data for Attendance
  const attendanceData = {
    1: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
        {
          label: "Attendance",
          data: [7, 4, 7, 7, 7],
          backgroundColor: [present, leave, present, absent, absent],
        },
      ],
    },
    2: {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
        {
          label: "Attendance",
          data: [7, 7, 2, 7, 7],
          backgroundColor: [present, present, leave, present, absent],
        },
      ],
    },
  };

  const handleWeekChange = (week) => {
    setSelectedWeek(week);
  };

  const handleNextWeek = () => {
    const nextWeek =
      selectedWeek < Object.keys(attendanceData).length
        ? selectedWeek + 1
        : selectedWeek;
    setSelectedWeek(nextWeek);
  };

  const handlePrevWeek = () => {
    const prevWeek = selectedWeek > 1 ? selectedWeek - 1 : selectedWeek;
    setSelectedWeek(prevWeek);
  };

  const attendanceDataCount = Object.keys(attendanceData).length;

  const attendanceDataForSelectedWeek = attendanceData[selectedWeek] || {};

  // Chart options
  const attendanceGraphOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 7, // maximum 7 lectures in a week
      },
    },
  };

  return (
    <>
      <div className="p-2 my-0.5">
        <p className="text-lg font-bold drop-shadow-sm relative">
          My Attendance
          {isAttendanceDropdownOpen && (
            <div className="absolute z-50 right-2 w-20 border rounded-3xl shadow-md mt-10">
              <ul className="py-2 px-3">
                {Array.from(
                  { length: attendanceDataCount },
                  (_, index) => index + 1
                ).map((week) => (
                  <li
                    key={week}
                    className="hover:bg-gray-200 px-2 py-1 rounded-lg"
                    onClick={() => {
                      handleWeekChange(week);
                      toggleAttendanceDropdown();
                    }}
                  >
                    <a href={`#week-${week}`} className="block py-2">
                      Week {week}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button
            className="font-normal text-sm p-1 rounded-md absolute right-8 top-1/2 transform -translate-y-1/2"
            onClick={handlePrevWeek}
          >
            <CaretCircleLeft
              className="icon inline-block"
              size={32}
              weight="fill"
            />
          </button>
          <button
            className="font-normal p-1 text-sm rounded-md absolute right-0 top-1/2 transform -translate-y-1/2"
            onClick={handleNextWeek}
          >
            <CaretCircleRight
              className="icon inline-block"
              size={32}
              weight="fill"
            />
          </button>
        </p>

        <div className="border p-2 my-1 font-normal text-md rounded-lg">
          {/* Render Attendance Graph */}
          <Bar
            data={attendanceDataForSelectedWeek}
            options={attendanceGraphOptions}
          />
        </div>
      </div>
    </>
  );
};

export default Attendance;
