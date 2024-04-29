import PropTypes from "prop-types";

import { Check } from "@phosphor-icons/react";

import ChatIllus from "../../assets/ChatIllus";
import { AttachmentIcon, CameraIcon, EmojiIcon } from "../../assets/icons";

const MessageSection = ({ currentChat }) => {
  return (
    <div className="message-area w-3/4 h-[90vh] bg-[var(--secondary-bg)] rounded-xl">
      {currentChat ? (
        <>
          <div className="h-[12vh] bg-[var(--accent-dark)] text-[var(--primary-bg)] rounded-tl-xl rounded-tr-xl">
            <div className="p-4 flex items-center">
              <div className="ml-4 h-20 w-20 bg-gray-500 rounded-full z-50"></div>
              <div className="ml-6">
                {currentChat.type === "group" && (
                  <h3 className="text-3xl font-bold">
                    Class {currentChat.class} {currentChat.subject}
                  </h3>
                )}
                {currentChat.type === "dm" && (
                  <>
                    <h2 className="text-3xl font-bold">
                      {currentChat.student_name}
                    </h2>
                    <h3 className="text-xl font-normal">
                      Class {currentChat.class} ({currentChat.subject})
                    </h3>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="h-[70vh] overflow-y-auto">
            <div className="h-full flex flex-col space-y-4 p-3">
              {currentChat.messages.map((message) => (
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
                              ? "var(--accent-light)"
                              : "var(--accent-extra-light)",
                            color: message.sender && "var(--primary-fg)",
                          }}
                        >
                          <div className="flex flex-col items-end">
                            <p>{message.message}</p>
                            <p className="ml-auto text-xs flex items-center">
                              {message.time}
                              <Check size={12} weight="bold" className="ml-1" />
                            </p>
                          </div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[8vh]">
            <div className="input-message-box mt-[0.75rem] mx-2">
              <div className="flex items-center rounded-lg bg-[var(--primary-fg)] px-2 py-1">
                <button
                  className="h-12 w-12 rounded-full"
                  style={{
                    background: "var(--)",
                  }}
                >
                  <EmojiIcon />
                </button>
                <input
                  type="text"
                  placeholder="Type a message"
                  className="flex-grow mt-0.5 outline-none text-lg bg-[var(--primary-fg)] text-[var(--secondary-bg)] placeholder-[var(--secondary-bg)]"
                ></input>
                <div className="flex items-center">
                  <button
                    className="h-12 w-12 rounded-full"
                    style={{
                      background: "var(--blue-normal)",
                    }}
                  >
                    <CameraIcon />
                  </button>
                  <button
                    className="h-12 w-12 rounded-full"
                    style={{
                      background: "var(--blue-normal)",
                    }}
                  >
                    <AttachmentIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="bg-[--accent-x-extra-light] rounded-2xl border border-[--accent-extra-light] flex items-center justify-center h-full">
          <ChatIllus />
        </div>
      )}
    </div>
  );
};

MessageSection.propTypes = {
  currentChat: PropTypes.any,
};

export default MessageSection;
