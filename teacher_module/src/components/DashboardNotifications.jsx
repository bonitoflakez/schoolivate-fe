import React, { useState } from "react";
import NotificationModal from "./NotificationModal";
import { notifications } from "../utils/notificationData";

import img from "../assets/image 3.png";
import { Link } from "react-router-dom";

const DashboardNotifications = () => {
  const [showNotificationModal, setShowNotificationModal] = useState(false);
  const [selectedViewNotification, setSelectedViewNotification] =
    useState(null);

  const maxDisplay = 5;

  const showAllNotifications = () => {
    setSelectedViewNotification(null);
    setShowNotificationModal(true);
  };

  const closeNotificationModal = () => {
    setSelectedViewNotification(null);
    setShowNotificationModal(false);
  };

  const handleViewNotificationClick = (notification) => {
    setSelectedViewNotification(notification);
    setShowNotificationModal(true);
  };

  return (
    <div
      id="notifications"
      className="p-4 rounded-lg w-1/2 h-fit bg-[--bg-secondary]"
    >
      <div className="flex items-center justify-between mb-2">
        <p className="inline-block text-2xl font-normal">Notifications</p>
        <Link to={"/notifications"}>
          <button className="float-right text-xs font-semibold border px-2 pt-0.5 rounded-md border-[--ac-secondary] text-[--ac-secondary]">
            Show all notices
          </button>
        </Link>
      </div>
      <div className="max-h-72 overflow-y-auto">
        <ul>
          {notifications.slice(0, maxDisplay).map((notification) => (
            <li
              key={notification.id}
              className="flex items-start justify-start mb-4 bg-[--ac-primary] text-[--fg-primary] border border-[--ac-primary] rounded-md relative"
            >
              <div className="image-container h-auto w-32">
                <img
                  // src={notification.imageUrl}
                  src={img}
                  alt="Notification"
                  className="object-cover h-full w-full rounded-l-md"
                />
              </div>
              <div className="flex flex-col justify-between mx-2 w-full">
                <div>
                  <p className="font-bold text-base">{notification.title}</p>
                  <p className="w-72 font-normal opacity-60 line-clamp-3 text-xs">
                    {notification.description}
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 mb-2 mr-2">
                  <button
                    // onClick={() => handleViewNotificationClick(notification)} // -> don't use this logic
                    // on click go to notifications page and directly open the selected notification
                    className="text-sm font-semibold px-4 py-0.5 rounded-md bg-[--ac-secondary] text-[--bg-primary] ml-auto"
                  >
                    View
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <NotificationModal
        isOpen={showNotificationModal}
        onClose={closeNotificationModal}
        notifications={notifications}
        selectedViewNotification={selectedViewNotification}
      />
    </div>
  );
};

export default DashboardNotifications;
