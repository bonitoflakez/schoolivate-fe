import React from "react";
import { TuitionData } from "../../utils/tuitions";
import TextTruncate from "react-text-truncate";

const Tuition = () => {
  return (
    <>
      <div className="flex items-center px-4">
        <div className="text-2xl font-normal">Tuitions</div>

        <button
            className="px-4 py-0.5 font-semibold text-xs ml-auto rounded-md"
            style={{
              border: "2px solid var(--accent-dark)",
              color: "var(--accent-dark)",
            }}
          >
            View More
          </button>
      </div>
      <div id="tuition-taking" className="p-4 rounded-lg">
        <ul className="overflow-y-auto h-32 grid grid-cols-2 gap-4">
          {TuitionData.map((tuition) => (
            <li
              key={tuition.id}
              className="mb-4 rounded-md p-2 ml-4 bg-[var(--accent-extra-light)]"
            >
              <div className="flex flex-grow items-start">
                <div>
                  <h2 className="text-lg font-semibold">{tuition.teacher}</h2>
                  <h4 className="text-sm ribbon">{tuition.session_type}</h4>
                </div>
                <div
                  className="flex items-center gap-2 ml-auto"
                  style={{
                    fontSize: "var(--font-xx-sm)",
                  }}
                >
                  <div className="flex flex-col items-center">
                    <p>Date</p>
                    <p>{tuition.date}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p>Timing</p>
                    <div>
                      <p>
                        {tuition.time_start} {tuition.time_end}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-end mt-2">
                <div>
                  <p
                    className="w-[15vw] opacity-60 font-normal"
                    style={{
                      fontSize: "var(--font-x-sm)",
                    }}
                  >
                    <TextTruncate
                      line={3}
                      element="span"
                      truncateText="…"
                      text={tuition.description}
                    />
                  </p>
                </div>
                <div className="ml-auto">
                  <button className="text-sm font-semibold text-[var(--primary-bg)] bg-[var(--accent-normal)] p-2 rounded-md">
                    Book Now
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Tuition;
