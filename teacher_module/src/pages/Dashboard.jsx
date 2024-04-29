import Greeter from "../components/Greeter";
import PerformanceUpdates from "../components/Dashboard/PerformanceUpdates";
import SchoolWorkHistory from "../components/SchoolWorkHistory";
import TuitionYoureTaking from "../components/TuitionYoureTaking";
import DashboardNotifications from "../components/DashboardNotifications";

const Dashboard = () => {
  return (
    <div id="dashboard">
      {/* Center Section */}
      <div className="pt-6 mx-4 h-[100vh] overflow-y-auto w-full">
        <Greeter />
        <PerformanceUpdates />

        <div className="flex justify-between w-full gap-x-4">
          <DashboardNotifications />
          <SchoolWorkHistory />
        </div>

        <TuitionYoureTaking />
      </div>
    </div>
  );
};

export default Dashboard;
