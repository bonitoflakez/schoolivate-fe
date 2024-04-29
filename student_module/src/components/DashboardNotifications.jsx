import React, { useState } from "react";
import NotificationModal from "./NotificationModal";
import { notifications } from "../utils/notificationData";

import img from "../assets/image 3.png";

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
    <>
      <div id="notifications" className="p-4 rounded-lg w-full mr-2 h-fit">
        <p className="inline-block text-2xl font-normal drop-shadow-sm mb-2">
          Notifications
        </p>
        {notifications.length > maxDisplay && (
          <button
            className="float-right text-sm font-medium border px-1 rounded-md"
            onClick={showAllNotifications}
            style={{
              fontSize: "var(--l-sm-txt)",
            }}
          >
            Show all notices
          </button>
        )}
        <div className="max-h-72 overflow-y-auto">
          <ul>
            {notifications.slice(0, maxDisplay).map((notification) => (
              <li
                key={notification.id}
                className="flex mb-4 overflow-hidden rounded-md max-h-24"
                style={{
                  background: "var(--blue-dark-0)",
                  color: "var(--blue-light)",
                }}
              >
                <img
                  // src={notification.imageUrl}
                  src={img}
                  alt="Notification Image"
                  className="h-auto w-24 object-cover"
                />
                <div className="mx-4 w-full">
                  <div className="mt-2">
                    <p
                      className="font-semibold"
                      style={{
                        fontSize: "var(--lg-txt)",
                      }}
                    >
                      {notification.title}
                    </p>
                    <span className="flex" style={{ position: "relative" }}>
                      <p
                        className="text-sm w-72 font-normal opacity-60 overflow-hidden overflow-ellipsis"
                        style={{
                          fontSize: "var(--sm-txt)",
                          color: "var(--dash-notification-sub-txt)",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 3,
                        }}
                      >
                        {notification.description}
                      </p>
                      <button
                        onClick={() =>
                          handleViewNotificationClick(notification)
                        }
                        className="ml-auto text-sm font-medium px-4 py-0.5 rounded-md"
                        style={{
                          background: "var(--blue-light)",
                          color: "var(--blue-darker)",
                          position: "absolute",
                          bottom: 0,
                          right: -10,
                        }}
                      >
                        View
                      </button>
                    </span>
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
    </>
  );
};

export default DashboardNotifications;
