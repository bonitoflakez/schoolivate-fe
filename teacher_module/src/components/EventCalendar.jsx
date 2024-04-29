import ClosingDateField from "./newEventCalendar";

const AttendanceCalendar = () => {
  const now = new Date();

  return (
    <div className="my-1 py-2">
      <h2 className="text-3xl px-4 mb-2 font-normal">My Attendance</h2>
      <div
        id="calendar"
        className="rounded-2xl"
        style={{
          background: "var(--bg-secondary)",
        }}
      >
        <div className="flex items-center text-xl font-bold mx-4 py-2 mb-2">
          <h3>Overall Attendance</h3>
          <p className="ml-auto">75%</p>
        </div>
        <hr className="opacity-60" />
        <ClosingDateField closingDate={now} />
      </div>
    </div>
  );
};

export default AttendanceCalendar;
