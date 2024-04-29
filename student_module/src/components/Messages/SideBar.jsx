import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import TextTruncate from "react-text-truncate";

import PropTypes from "prop-types";

const SideBar = ({
  handlePrev,
  handleNext,
  handleChatSelect,
  initialGroups,
  initialDMs,
  startIndex,
}) => {
  return (
    <div className="select-message w-1/4 h-[90vh]  rounded-xl bg-[var(--secondary-bg)]">
      <div className="search-input flex items-center justify-center">
        <input
          type="text"
          placeholder="Search"
          className="p-2 m-2 text-lg w-full rounded-lg outline-none bg-[var(--secondary-bg)] border-2 border-[var(--border)] text-[var(--border)] placeholder-[var(--border)]"
        />
      </div>
      <div className="all-chats-section mx-4">
        <div className="groups">
          <div className="group-top-header flex items-center mb-2">
            <h3 className="text-xl">Groups</h3>
            <div className="ml-auto flex items-center gap-4">
              <button
                className="bg-[var(--accent-light)] h-6 w-6 rounded-full flex items-center justify-center"
                onClick={handlePrev}
              >
                <CaretLeft size={16} weight="bold" color="var(--accent-dark)" />
              </button>
              <button
                className="bg-[var(--accent-light)] h-6 w-6 rounded-full flex items-center justify-center"
                onClick={handleNext}
              >
                <CaretRight
                  size={16}
                  weight="bold"
                  color="var(--accent-dark)"
                />
              </button>
            </div>
          </div>
          <div className="group-buttons grid grid-flow-col grid-cols-3 overflow-x-auto w-fit gap-2 uw:gap-8">
            {initialGroups.slice(startIndex, startIndex + 3).map((group) => (
              <button
                key={group.id}
                className={`group-card cursor-pointer bg-[var(--message-card)] hover:bg-[var(--accent-dark)] hover:text-[var(--primary-bg)] w-28 flex flex-col items-center justify-center px-2 py-4 rounded-2xl`}
                onClick={() => handleChatSelect(group)}
              >
                <div className="h-16 w-16 rounded-full bg-gray-400"></div>
                <div className="group-details flex flex-col items-center justify-center text-sm">
                  <h3>Class {group.class}</h3>
                  <h3 className="text-center">
                    <TextTruncate
                      line={1}
                      element="span"
                      truncateText="…"
                      text={group.subject}
                    />
                  </h3>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="dms">
          <div className="dms-top-header flex items-center my-2">
            <h3 className="text-xl">DMs</h3>
          </div>
          <div className="dm-list flex flex-col h-[57.5vh] overflow-y-auto">
            {initialDMs.map((dm) => (
              <button
                key={dm.id}
                className="flex items-center cursor-pointer mb-2 bg-[var(--message-card)] hover:bg-[var(--accent-dark)] hover:text-[var(--primary-bg)] px-4 py-2 rounded-xl"
                onClick={() => handleChatSelect(dm)}
              >
                <div className="h-14 w-14 bg-gray-400 rounded-full"></div>
                <div className="ml-2">
                  <h3 className="text-xl font-semibold">{dm.student_name}</h3>
                  <h3 className="text-sm font-light">
                    Class {dm.class} ({dm.subject})
                  </h3>
                </div>
                {dm.dms !== 0 ? (
                  <div className="ml-auto flex items-center justify-center rounded-full text-[var(--accent-dark)] h-10 w-10 bg-[var(--secondary-bg)]">
                    <h3 className="text-xl">{dm.dms}</h3>
                  </div>
                ) : (
                  <></>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleChatSelect: PropTypes.func.isRequired,
  initialGroups: PropTypes.array.isRequired,
  initialDMs: PropTypes.array.isRequired,
  startIndex: PropTypes.number.isRequired,
};

export default SideBar;
