import React, { useState } from "react";
import Modal from "react-modal";
import { X, CaretLeft } from "@phosphor-icons/react";

const NotificationModal = ({
  isOpen,
  onClose,
  notifications,
  selectedViewNotification,
}) => {
  const [selectedNotification, setSelectedNotification] = useState(null);

  const haveViewNotification = () => {
    if (selectedViewNotification) {
      setSelectedNotification(selectedViewNotification);
    }
  };

  const timeToLeave = () => {
    if (selectedViewNotification) {
      setSelectedNotification(null);
    }
    resetSelectedNotification();
  };

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  const resetSelectedNotification = () => {
    selectedViewNotification = null;
    setSelectedNotification(null);
  };

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.75)",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Notification Modal"
      className="bg-gray-800 mx-auto my-8 max-w-[50%] min-h-[90vh] rounded-2xl"
      onAfterOpen={haveViewNotification}
      onAfterClose={timeToLeave}
      style={customStyles}
    >
      <div className="bg-gray-800 mx-6 pb-6">
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
              <p className="text-md mb-4">{selectedNotification.details}</p>
            </div>
          </div>
        ) : (
          <div>
            <button
              className="inline-block float-right right-0 py-4"
              onClick={onClose}
            >
              <X size={32} weight="bold" />
            </button>
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
                          className="text-sm w-full font-normal overflow-hidden overflow-ellipsis"
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
    </Modal>
  );
};

export default NotificationModal;
