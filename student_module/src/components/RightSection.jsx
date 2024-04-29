import { useLocation } from "react-router-dom";

import ProfileSearch from "./ProfileSearch";
import AttendanceCalendar from "./EventCalendar";
import TimeTable from "./TimeTable";

const RightSection = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const onMessages = currentPath === "/messages";

  return (
    <div
      className={`${
        onMessages
          ? "lt:hidden"
          : "sticky top-6 hidden lt:block lt:w-3/12 p-2 my-4 ml-2 mr-4 h-fit"
      }`}
    >
      <ProfileSearch />
      <div
        className="mt-6 rounded-2xl"
        style={{
          background: "var(--secondary-bg)",
        }}
      >
        <AttendanceCalendar />
        <TimeTable />
      </div>
    </div>
  );
};

export default RightSection;
