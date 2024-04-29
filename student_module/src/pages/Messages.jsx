import { useState } from "react";
import SideBar from "../components/Messages/SideBar";
import MessageSection from "../components/Messages/MessageSection";

const initialGroups = [
  {
    id: 1,
    type: "group",
    class: "5-B",
    subject: "Science",
    messages: [
      {
        id: 1,
        message:
          "Hi mam, Can you share some sample papers to prepare for our exams?",
        time: "18:05",
        sender: false,
      },
      {
        id: 2,
        message:
          "Sure, I'll send them right away along with some practice questions.",
        time: "18:05",
        sender: true,
      },
    ],
  },
];

const initialDMs = [
  {
    id: 1,
    type: "dm",
    student_name: "Divyansh Nagpal",
    class: "5-B",
    subject: "Science",
    dms: 2,
    messages: [
      {
        id: 1,
        message: "Hi",
        time: "18:05",
        sender: true,
      },
      {
        id: 2,
        message: "Can you please send me today's class work?",
        time: "18:05",
        sender: true,
      },
      {
        id: 3,
        message: "Sure, I'll send it to you in 15.",
        time: "18:05",
        sender: false,
      },
    ],
  },
];

const Messages = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [currentChat, setCurrentChat] = useState(null);

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 2));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 2, initialGroups.length - 2)
    );
  };

  const handleChatSelect = (chat) => {
    if (chat.type === "group") {
      console.log("group chat");
    } else if (chat.type === "dm") {
      console.log("dm chat");
    }
    setCurrentChat(chat);
  };

  return (
    <div className="messages">
      <div className="top-container mt-4 flex items-center">
        <div className="heading">
          <h3 className="text-[2.5rem] font-medium">Chat</h3>
        </div>
      </div>
      <div className="main-messages flex gap-4">
        <SideBar
          handlePrev={handlePrev}
          handleNext={handleNext}
          initialGroups={initialGroups}
          initialDMs={initialDMs}
          startIndex={startIndex}
          handleChatSelect={handleChatSelect}
        />
        <MessageSection currentChat={currentChat} />
      </div>
    </div>
  );
};

export default Messages;
