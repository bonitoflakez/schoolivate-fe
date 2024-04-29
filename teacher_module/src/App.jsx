import "./App.css";
import { Routes, Route } from "react-router";

import LeftNavbar from "./components/LeftNavbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AllClasses from "./pages/AllClasses.jsx";
import SchoolWork from "./pages/SchoolWork.jsx";
import RightSection from "./components/RightSection.jsx";
import RMS from "./pages/RMS.jsx";
import PageNotifications from "./pages/Notifications.jsx";
import Meet from "./pages/Meetings.jsx";
import Earnings from "./pages/Earnings.jsx";
import Settings from "./pages/Settings.jsx";
import MarkAttendance from "./pages/MarkAttendance.jsx";
import { ClassProvider } from "./helper/ClassContext.jsx";
import Tuition from "./pages/Tuitions.jsx";
import Messages from "./pages/Messages.jsx";

function App() {
  return (
    <ClassProvider>
      <div className="flex uw:mx-48">
        <LeftNavbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/classes" element={<AllClasses />} />
            <Route path="/schoolwork" element={<SchoolWork />} />
            <Route path="/attendance" element={<MarkAttendance />} />
            <Route path="/tuition" element={<Tuition />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/meetings" element={<Meet />} />
            <Route path="/notifications" element={<PageNotifications />} />
            <Route path="/rms" element={<RMS />} />
            <Route path="/earnings" element={<Earnings />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <RightSection />
      </div>
    </ClassProvider>
  );
}

export default App;
