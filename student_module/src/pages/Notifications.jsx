import React, { useState } from "react";
import { X, CaretLeft } from "@phosphor-icons/react";
import { notifications } from "../utils/notificationData";

const PageNotifications = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  const resetSelectedNotification = () => {
    setSelectedNotification(null);
  };
  return (
    <div className="w-full my-4 min-h-[90vh] rounded-xl">
      <div className="mx-6 pb-6">
        {selectedNotification ? (
          <div>
            <button
              className="inline-block float-left left-0 py-4"
              onClick={resetSelectedNotification}
            >
              <CaretLeft size={32} weight="bold" />
            </button>
            <img
              src={selectedNotification.imageUrl}
              alt="Notification Image"
              className="lg:h-48 uw:h-64 w-full object-cover"
            />
            <h2 className="text-4xl font-bold py-4">
              {selectedNotification.title}
            </h2>
            <div className="overflow-y-auto max-h-[80vh]">
              <p
                className="text-sm max-w-[50vw] font-normal overflow-hidden overflow-ellipsis"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {selectedNotification.details}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold py-4">Notifications</h2>
            <div className="overflow-y-auto max-h-[80vh]">
              <ul>
                {notifications.map((notification) => (
                  <li
                    key={notification.id}
                    onClick={() => handleNotificationClick(notification)}
                    className="flex mb-4 cursor-pointer overflow-hidden rounded-md"
                    style={{
                      background: "var(--default-primary-accent)",
                      color: "var(--default-primary-fg)",
                    }}
                  >
                    <img
                      src={notification.imageUrl}
                      alt="Notification Image"
                      className="h-auto w-44 object-center"
                    />
                    <div className="mx-4 w-full">
                      <div className="mt-2">
                        <p className="text-md font-semibold">
                          {notification.title}
                        </p>
                        <p
                          className="text-sm max-w-[45vw] font-normal overflow-hidden overflow-ellipsis"
                          style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                          }}
                        >
                          {notification.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageNotifications;
