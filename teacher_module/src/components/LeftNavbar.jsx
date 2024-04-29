import { Link } from "react-router-dom";

import { Money, Gear } from "@phosphor-icons/react";
import {
  DashIcon,
  MeetingIcon,
  MessagesIcon,
  MyClassIcon,
  NotificationIcon,
  RmsIcon,
  SchoolWorkIcon,
  TutoringIcon,
} from "../assets/LeftNavIcons";

const messages = 2;

const LeftNavbar = () => {
  return (
    <div
      id="left-nav"
      className="sticky top-5 left-navbar-container flex-shrink-0 uw:w-[15%] lg:w-1/6 md:w-1/5 h-[full] flex flex-col items-center rounded-2xl m-4"
    >
      <div className="flex flex-col lt:flex-row items-center justify-center my-2 w-[80%]">
        <img
          src="/school_logo.png"
          alt="school-logo"
          className="object-cover"
        />
      </div>
      <span className="flex flex-col items-start mx-auto px-6 w-full my-2">
        {/* dashboard */}
        <Link
          to={"/"}
          className="flex items-center justify-start gap-x-2 text-3xl w-full font-normal link rounded-lg my-2 px-4 py-2"
        >
          <span className="pr-2">
            <DashIcon />
          </span>
          <span>Dashboard</span>
        </Link>

        {/* my classes */}
        <Link
          to={"/classes"}
          className="flex items-center justify-start gap-x-2 text-3xl w-full font-normal link rounded-lg my-2 px-4 py-2"
        >
          <span className="pr-2">
            <MyClassIcon />
          </span>
          <span>My Classes</span>
        </Link>

        {/* schoolwork */}
        <Link
          to={"/schoolwork"}
          className="flex items-center justify-start gap-x-2 text-3xl w-full font-normal link rounded-lg my-2 px-4 py-2"
        >
          <span className="pr-2">
            <SchoolWorkIcon />
          </span>
          <span>Schoolwork</span>
        </Link>

        {/* messages */}
        <Link
          to={"/messages"}
          className="flex items-center justify-start gap-x-2 text-3xl w-full font-normal link rounded-lg my-2 px-4 py-2"
        >
          <span className="pr-2">
            <MessagesIcon />
          </span>
          <span>Messages</span>
          {messages > 0 && (
            <span className="message-bubble flex items-center justify-center h-8 w-8 rounded-full">
              <span className="text-lg font-normal">{messages}</span>
            </span>
          )}
        </Link>

        {/* tuition */}
        <Link
          to={"/tuition"}
          className="flex items-center justify-start gap-x-2 text-3xl w-full font-normal link rounded-lg my-2 px-4 py-2"
        >
          <span className="pr-2">
            <TutoringIcon />
          </span>
          <span>Tutoring</span>
        </Link>

        {/* meetings */}
        <Link
          to={"/meetings"}
          className="flex items-center justify-start gap-x-2 text-3xl w-full font-normal link rounded-lg my-2 px-4 py-2"
        >
          <span className="pr-2">
            <MeetingIcon />
          </span>
          <span>Meetings</span>
        </Link>

        {/* notifications */}
        <Link
          to={"/notifications"}
          className="flex items-center justify-start gap-x-2 text-3xl w-full font-normal link rounded-lg my-2 px-4 py-2"
        >
          <span className="pr-2">
            <NotificationIcon />
          </span>
          <span>Notifications</span>
        </Link>

        {/* rms */}
        <Link
          to={"/rms"}
          className="flex items-center justify-start gap-x-2 text-3xl w-full font-normal link rounded-lg my-2 px-4 py-2"
        >
          <span className="pr-2">
            <RmsIcon />
          </span>
          <span>RMS</span>
        </Link>
        <Link
          to={"/earnings"}
          className="flex items-center justify-start gap-x-2 text-3xl w-full font-normal link rounded-lg my-2 px-4 py-2"
        >
          <Money className="icon  pr-2" size={36} weight="regular" />
          <span>Earning</span>
        </Link>
        <Link
          to={"/settings"}
          className="flex items-center justify-start gap-x-2 text-3xl w-full font-normal link rounded-lg my-2 px-4 py-2"
        >
          <Gear className="icon pr-2" size={36} weight="regular" />
          <span>Settings</span>
        </Link>
      </span>
    </div>
  );
};

export default LeftNavbar;
