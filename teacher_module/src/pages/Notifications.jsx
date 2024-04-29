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
      <h2 className="text-4xl font-bold py-4">Notifications</h2>

      <div className="pb-6">
        {selectedNotification ? (
          <div
            className="p-4 rounded-lg"
            style={{
              background: "var(--ac-primary)",
              color: "var(--fg-primary)",
            }}
          >
            <div className="relative">
              <button
                className="h-10 w-10 flex items-center justify-center rounded-full mt-2 ml-2 absolute top-0 left-0 z-10"
                style={{
                  background: "var(--blue-temp)",
                }}
                onClick={resetSelectedNotification}
              >
                <CaretLeft size={26} weight="bold" />
              </button>
              <img
                src={selectedNotification.imageUrl}
                alt="Notification Image"
                className="h-64 w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold py-4">
                {selectedNotification.title}
              </h2>
              <div className="overflow-y-auto max-h-[80vh]">
                <p
                  className="text-xl opacity-60 max-w-[50vw] font-normal overflow-hidden text-ellipsis"
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {selectedNotification.details}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="overflow-y-auto max-h-[85vh]">
              <ul>
                {notifications.map((notification) => (
                  <li
                    key={notification.id}
                    onClick={() => handleNotificationClick(notification)}
                    className="flex mb-4 cursor-pointer overflow-hidden bg-[--ac-primary] text-[--fg-primary] border border-[--ac-primary] rounded-md relative"
                    style={{
                      // background: "var(--blue-light)",
                      color: "var(--blue-darker)",
                    }}
                  >
                    <div className="h-[12rem] w-[12rem]">
                      <img
                        src={notification.imageUrl}
                        alt="Notification Image"
                        className="p-2 object-cover rounded-xl"
                      />
                    </div>
                    <div className="mx-4">
                      <div className="mt-2">
                        <p className="text-3xl font-bold">
                          {notification.title}
                        </p>
                        <p
                          className="text-sm max-w-[40vw] font-normal opacity-60 overflow-hidden text-ellipsis"
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
