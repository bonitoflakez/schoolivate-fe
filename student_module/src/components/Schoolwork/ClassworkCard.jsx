import TextTruncate from "react-text-truncate";
import { Paperclip } from "@phosphor-icons/react";

import PropTypes from "prop-types";

const ClassworkCard = ({ classwork, openViewWork }) => {
  return (
    <div
      key={classwork.id}
      className="classwork-card bg-[--accent-extra-light] p-2 rounded-lg"
    >
      <div className="card-top-section flex items-start justify-evenly">
        <h3 className="text-lg">{classwork.type}</h3>
        <div className="ml-auto date-container bg-[--primary-bg] p-1 rounded-md flex items-start">
          <div className="flex flex-col items-center text-xs font-normal opacity-80">
            <h3
              className="font-light"
              style={{
                fontSize: "var(--font-xx-sm)",
              }}
            >
              Created
            </h3>
            <h3>{classwork.created}</h3>
          </div>
          <hr className="border decoration-dotted border-[--border] opacity-60 ml-1 w-6 mt-1" />
          <div className="flex flex-col items-center text-xs font-normal opacity-80">
            <h3
              className="font-light"
              style={{
                fontSize: "var(--font-xx-sm)",
              }}
            >
              Due
            </h3>
            <h3>{classwork.due}</h3>
          </div>
        </div>
      </div>
      <div className="description font-light text-sm mt-1 w-[18vw]">
        <TextTruncate
          line={3}
          element="span"
          truncateText="…"
          text={classwork.description}
        />
      </div>
      <div className="buttons flex items-center mt-1">
        <button className="px-2 py-1 gap-1 border border-[--border] rounded-lg">
          <span className="flex items-center opacity-60 text-sm">
            <Paperclip size={18} />
            {classwork.attachment ? <>Attachment</> : <>No Attachments</>}
          </span>
        </button>
        <button
          className="ml-auto px-4 py-1 font-medium bg-[--accent-normal] text-[--primary-bg] rounded-lg"
          onClick={() => openViewWork(classwork)}
        >
          {classwork.completed ? "View Grade" : "View"}
        </button>
      </div>
    </div>
  );
};

ClassworkCard.propTypes = {
  classwork: PropTypes.object.isRequired,
  openViewWork: PropTypes.func.isRequired,
};

export default ClassworkCard;
