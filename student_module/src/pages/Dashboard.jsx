import Greeter from "../components/Dashboard/Greeter";
import SchoolWorkHistory from "../components/Dashboard/SchoolWorkHistory";
import Attendance from "../components/Dashboard/Attendance";
import Performance from "../components/Dashboard/Performance";
import QuizTest from "../components/Dashboard/QuizTest";
import Tuition from "../components/Dashboard/Tuition";

const Dashboard = () => {
  return (
    <div id="dashboard" className="flex items-center justify-center flex-grow">
      <div className="flex-grow my-4">
        <Greeter />

        <div className="rounded-xl bg-[var(--secondary-bg)] border-b-[var(--secondary-bg)] min-h-[90vh]">
          <div className="flex">
            <Attendance />
            <SchoolWorkHistory />
          </div>

          <div className="flex mx-4 rounded-xl bg-[var(--primary-bg)]">
            <Performance />
            <QuizTest />
          </div>

          <div className="m-4 rounded-xl bg-[var(--primary-bg)]">
            <Tuition />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
