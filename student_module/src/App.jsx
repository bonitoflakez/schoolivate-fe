import "./App.css";
import { Route, Routes } from "react-router";

import LeftNavbar from "./components/LeftNav/LeftNavbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Messages from "./pages/Messages.jsx";
import Tuitions from "./pages/Tuition.jsx";
import SchoolWork from "./pages/SchoolWork.jsx";
import Quizzes from "./pages/Quizzes.jsx";
import Attendance from "./pages/Attendance.jsx";
import Shop from "./pages/Shop.jsx";
import ReportCard from "./pages/ReportCard.jsx";
import Settings from "./pages/Settings.jsx";
import RightSection from "./components/RightSection.jsx";

const App = () => {
  return (
    <div className="flex lt:mx-2 uw:mx-48">
      <LeftNavbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/tuitions" element={<Tuitions />} />
          <Route path="/schoolwork" element={<SchoolWork />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/reportcard" element={<ReportCard />} />
          <Route path="/rms" element={<>"TBD"</>} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <RightSection />
    </div>
  );
};

export default App;
