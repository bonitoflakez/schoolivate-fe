import React, { useState } from "react";
import ChatBG from "../assets/ChatBG";
import SendMsgIcon from "../assets/SendMsgIcon";
import UploadFileIcon from "../assets/UploadFileIcon";
import { Check } from "@phosphor-icons/react";

import { initialGroups, initialDMs } from "../utils/messages";

const Messages = () => {
  const [selectedGroup, setSelectedGroup] = useState(initialGroups[0]);
  const [selectedDM, setSelectedDM] = useState(initialDMs[0]);
  const [chatType, setChatType] = useState("group");

  const handleGroupChange = (groupId) => {
    const selected = initialGroups.find((group) => group.id === groupId);
    setSelectedGroup(selected);
  };

  const handleDMChange = (dmId) => {
    const selected = initialDMs.find((dm) => dm.id === dmId);
    setSelectedDM(selected);
  };

  const handleChatTypeChange = (e) => {
    setChatType(e.target.value);
  };

  return (
    <div
      id="messages"
      className="mt-4 rounded-3xl mr-4"
      style={{
        background: "var(--ac-primary)",
      }}
    >
      <div className="flex items-start">
        <div className="w-1/5 h-[96vh] overflow-y-auto bg-[--bg-secondary] m-1 rounded-l-3xl">
          <select
            className="ml-4 mt-4 p-2 text-md font-bold outline-none rounded-md"
            style={{
              background: "var(--ac-secondary)",
              color: "var(--bg-primary)",
              border: "2px solid var(--blue-normal)",
            }}
            value={chatType}
            onChange={handleChatTypeChange}
          >
            <option value="group">Groups</option>
            <option value="dm">Messages</option>
          </select>
          <ul className="mt-4 mx-4">
            {chatType === "group" ? (
              <div className="flex items-center justify-start w-full flex-col">
                {initialGroups.map((group) => (
                  <button
                    key={group.id}
                    className={`text-left p-4 mb-2 text-xl font-bold w-full rounded-lg ${
                      group.id === selectedGroup.id ? "bg-[--ac-secondary] text-white" : ""
                    }`}
                    onClick={() => handleGroupChange(group.id)}
                  >
                    {group.name}
                  </button>
                ))}
              </div>
            ) : (
              <>
                {initialDMs.map((dm) => (
                  <button
                    key={dm.id}
                    className={`cursor-pointer p-2 mb-2 rounded-lg ${
                      dm.id === selectedDM.id ? "bg-gray-800" : ""
                    }`}
                    onClick={() => handleDMChange(dm.id)}
                  >
                    <div className="flex items-center">
                      <div className="h-12 w-12 bg-gray-500 rounded-full mr-2"></div>
                      <div>
                        <h3 className="text-xl font-bold">{dm.name}</h3>
                        <h4 className="text-sm font-normal">{dm.group}</h4>
                      </div>
                    </div>
                  </button>
                ))}
              </>
            )}
          </ul>
        </div>
        <div
          className="w-4/5 h-[96vh]"
          style={{
            borderLeft: "4px solid var(--blue-darker)",
          }}
        >
          <div className="h-[12vh] flex items-center">
            <div className="p-4 flex items-center justify-between w-full">
              <div className="flex items-center">
                <div className="h-20 w-20 bg-gray-500 rounded-full z-50"></div>
                <div className="ml-6">
                  {chatType === "group" ? (
                    <h3 className="text-3xl font-bold text-[--ac-secondary]">{selectedGroup.name}</h3>
                  ) : (
                    <>
                      <h2 className="text-3xl font-bold">{selectedDM.name}</h2>
                      <h3 className="text-xl font-medium">
                        {selectedDM.group}
                      </h3>
                    </>
                  )}
                </div>
              </div>
              <button
                className={`border-2 rounded-md px-4 py-2 mt-2 ${
                  chatType !== "dm" ? "hidden" : ""
                }`}
              >
                View Profile
              </button>
            </div>
          </div>
          <div
            className="h-[76.5vh] overflow-y-auto mr-1"
            style={{
              background: "var(--bg-primary)",
              borderRight: "4px solid var(--blue-dark-0)",
            }}
          >
            <div className="h-full flex flex-col space-y-4 p-3">
              {chatType === "group" ? (
                <>
                  {selectedGroup.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`chat-messages mt-auto ${
                        message.sender ? "justify-end" : ""
                      }`}
                    >
                      <div
                        className={`flex  h-full order-2 items-end ${
                          message.sender ? "justify-end" : ""
                        }`}
                      >
                        <div className="flex flex-col space-y-2 text-md max-w-xs mx-2 items-end">
                          <div>
                            <span
                              className={`px-4 py-2 rounded-lg inline-block ${
                                message.sender
                                  ? "rounded-br-none"
                                  : "rounded-bl-none"
                              }`}
                              style={{
                                background: message.sender
                                  ? "var(--ac-secondary)"
                                  : "var(--bg-secondary)",
                                color: message.sender
                                  ? "var(--bg-primary)"
                                  : "var(--fg-secondary)",
                              }}
                            >
                              <div className="flex flex-col items-end">
                                <p>{message.message}</p>
                                <p className="ml-auto text-xs flex items-center">
                                  {message.time}{" "}
                                  <Check
                                    size={12}
                                    weight="bold"
                                    className="ml-1"
                                  />{" "}
                                </p>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <>
                  {selectedDM.messages.map((dm) => (
                    <div
                      key={dm.id}
                      className={`chat-messages mt-auto ${
                        dm.sender ? "justify-end" : ""
                      }`}
                    >
                      <div
                        className={`flex  h-full order-2 items-end ${
                          dm.sender ? "justify-end" : ""
                        }`}
                      >
                        <div className="flex flex-col space-y-2 text-md max-w-xs mx-2 items-end">
                          <div>
                            <span
                              className={`px-4 py-2 rounded-lg inline-block ${
                                dm.sender
                                  ? "rounded-br-none"
                                  : "rounded-bl-none"
                              }`}
                              style={{
                                background: dm.sender
                                  ? "var(--blue-dark)"
                                  : "var(--blue-light-0)",
                                color: dm.sender
                                  ? "var(--blue-light-0)"
                                  : "var(--blue-dark)",
                              }}
                            >
                              <div className="flex flex-col items-end">
                                <p>{dm.message}</p>
                                <p className="ml-auto text-xs flex items-center">
                                  {dm.time}{" "}
                                  <Check
                                    size={12}
                                    weight="bold"
                                    className="ml-1"
                                  />{" "}
                                </p>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>

          <div className="h-[7vh]">
            <div className="input-message-box">
              <div className="flex items-center justify-between p-2">
                <button
                  className="h-12 w-12 pl-1 rounded-full"
                  style={{
                    background: "var(--ac-secondary)",
                    // color: "var(--bg-primary)",
                  }}
                >
                  <UploadFileIcon />
                </button>
                <input
                  type="text"
                  placeholder="Send a message..."
                  className="flex-grow p-3 mx-4 mt-0.5 outline-none text-lg"
                  style={{
                    background: "var(--blue-dark-0)",
                    color: "var(--fg-secondary)",
                  }}
                ></input>
                <button
                  className="h-12 w-12 rounded-full"
                  style={{
                    background: "var(--ac-secondary)",
                  }}
                >
                  <SendMsgIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
