import NavTab from "./NavTab";

import {
  AttendanceIcon,
  ChatIcon,
  DashboardIcon,
  QuizzesIcon,
  ReportCardIcon,
  SchoolWorkIcon,
  SettingsIcon,
  ShopIcon,
  TuitionIcon,
} from "../../assets/icons";

const numberOfMessages = 2;

const LeftNavbar = () => {
  return (
    <div
      id="left-navbar"
      className="sticky top-4 left-navbar-container w-1/5 lt:w-2/12 uw:w-[15%] h-fit lt:h-[96vh] flex flex-col items-center rounded-2xl m-4"
    >
      <div className="flex border flex-col lt:flex-row items-center justify-center my-4">
        <img
          src="/school_logo.png"
          alt="school-logo"
          height={"20%"}
          width={"80%"}
        />
      </div>
      <span className="flex flex-col items-start mx-auto md:px-2 px-6 w-full my-2">
        <NavTab linkTo={"/"} tabName={"Dashboard"}>
          <DashboardIcon />
        </NavTab>
        <NavTab
          linkTo={"/messages"}
          tabName={"Chat"}
          isMessage={true}
          unreadMessages={numberOfMessages}
        >
          <ChatIcon />
        </NavTab>
        <NavTab linkTo={"/tuitions"} tabName={"Tuitions"}>
          <TuitionIcon />
        </NavTab>
        <NavTab linkTo={"/schoolwork"} tabName={"Schoolwork"}>
          <SchoolWorkIcon />
        </NavTab>
        <NavTab linkTo={"/quizzes"} tabName={"Quizzes"}>
          <QuizzesIcon />
        </NavTab>
        <NavTab linkTo={"/attendance"} tabName={"Attendance"}>
          <AttendanceIcon />
        </NavTab>
        <NavTab linkTo={"/shop"} tabName={"Shop"}>
          <ShopIcon />
        </NavTab>
        <NavTab linkTo={"/reportcard"} tabName={"Report Card"}>
          <ReportCardIcon />
        </NavTab>
        <NavTab linkTo={"/settings"} tabName={"Settings"}>
          <SettingsIcon />
        </NavTab>
      </span>
    </div>
  );
};

export default LeftNavbar;
