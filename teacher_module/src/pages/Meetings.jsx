import { useState } from "react";
import { meetingData } from "../utils/meetings";
import { Plus, ArrowLeft } from "@phosphor-icons/react";

const Meet = () => {
  const [selectedOption, setSelectedOption] = useState("session");
  const [createSession, setCreateSession] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCreateSession = () => {
    setCreateSession(true);
  };

  const currentSession = meetingData[0];

  return (
    <>
      {createSession ? (
        <>
          <div className="create-meet py-4">
            <div className="top-container flex items-center mb-6">
              <div className="flex items-center">
                <button onClick={() => setCreateSession(null)} className="pr-2">
                  <ArrowLeft size={32} weight="bold" />
                </button>
                <h3 className="text-3xl font-bold">Meet</h3>
              </div>
              <button
                className="px-4 py-2 ml-auto rounded-md flex items-center"
                style={{
                  background: "var(--checked-pill)",
                }}
              >
                Done
              </button>
            </div>
            <div
              className="entries-section rounded-lg"
              style={{
                background: "var(--default-primary-accent)",
              }}
            >
              <div className="inner-entries-section p-4 min-h-[85vh]">
                <h3 className="text-2xl font-bold">Create Session</h3>
                <div className="py-2">
                  <h3 className="text-lg font-medium">Title</h3>
                  <input
                    type="text"
                    className="w-full p-2 text-black bg-white rounded-md outline-none"
                    placeholder="Enter Title"
                  ></input>
                </div>
                <div className="py-2">
                  <h3 className="text-lg font-medium">Session</h3>
                  <select
                    className="w-full p-2 text-black bg-white rounded-md outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Select an option
                    </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div className="py-2">
                  <h3 className="text-lg font-medium">Session Charges</h3>
                  <select
                    className="w-full p-2 text-black bg-white rounded-md outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Select an option
                    </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div className="py-2">
                  <h3 className="text-lg font-medium">Date</h3>
                  <select
                    className="w-full p-2 text-black bg-white rounded-md outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Select an option
                    </option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>

                <div className="py-2">
                  <h3 className="text-lg font-medium">Timing</h3>
                  <textarea
                    type="text"
                    className="w-full p-2 text-black bg-white rounded-md outline-none"
                    placeholder="Enter Title"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="all-meet py-4">
            <div className="top-container flex items-center mt-4 mb-6">
              <h3 className="text-4xl font-bold">Schedule PTM</h3>
              <button
                onClick={handleCreateSession}
                className="px-4 py-2 ml-auto border rounded-md flex items-center rounded-xl bg-[--ac-primary] font-bold"
                style={{
                  // background: "var(--blue-normal)",
                }}
              >
                <Plus size={18} className="mr-2" weight="bold" /> Create
              </button>
            </div>

            <div id="meet-taking" className="p-4 rounded-xl bg-[--bg-secondary]">
              <h2 className="text-2xl font-bold pb-2">Current Meeting</h2>
              <div className="overflow-y-auto">
                <div
                  key={currentSession.id}
                  className="class-item flex mb-4 overflow-hidden rounded-md"
                  style={{
                    background: "var(--blue-dark-0)",
                  }}
                >
                  <div className="w-full p-2 flex items-center bg-[--ac-primary] rounded-">
                    <div>
                      <div>
                        <span className="font-bold text-2xl">
                          Meet with {currentSession.student_name}
                        </span>
                      </div>

                      <div className="flex mt-2">
                        <div>
                          <h4 className="text-xs opacity-60">Parents Name</h4>
                          <div className="flex items-center text-sm justify-between">
                            <p className="opacity-60">
                              Father Name{" "}
                              <span className="font-bold">
                                {currentSession.father_name}
                              </span>
                            </p>
                            <div className="mx-2"></div>
                            <p className="opacity-60">
                              Mother Name{" "}
                              <span className="font-bold">
                                {currentSession.mother_name}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-auto mr-8">
                      <div className="text-xl flex items-center gap-8">
                        <div className="text-center flex flex-col items-center justify-center">
                          <p className="text-lg opacity-60">Date</p>
                          <p>{currentSession.date}</p>
                        </div>
                        <div className="text-center flex flex-col items-center justify-center">
                          <p className="text-lg opacity-60">Timing</p>
                          <p>
                            {currentSession.time_start}{" "}
                            {currentSession.time_end}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="all-tuitions">
            <div id="meet-taking" className="p-4 rounded-lg bg-[--bg-secondary]">
              <div className="w-full pb-2 flex items-center">
                <div className="text-2xl font-bold drop-shadow-sm">
                  Up-coming Session
                </div>
              </div>
              <div className="overflow-y-auto h-[60vh]">
                {meetingData.map((meetItem) => (
                  <div
                    key={meetItem.id}
                    className="class-item flex mb-4 overflow-hidden rounded-md"
                    style={{
                      background: "var(--blue-dark-0)",
                    }}
                  >
                    <div className="w-full p-2 flex items-center bg-[--ac-primary] rounded-xl">
                      <div>
                        <div>
                          <span className="font-bold text-2xl">
                            Meet with {meetItem.student_name}
                          </span>
                        </div>

                        <div className="flex mt-2">
                          <div>
                            <h4 className="text-xs opacity-60">Parents Name</h4>
                            <div className="flex items-center text-sm justify-between">
                              <p className="opacity-60">
                                Father Name{" "}
                                <span className="font-bold">
                                  {meetItem.father_name}
                                </span>
                              </p>
                              <div className="mx-2"></div>
                              <p className="opacity-60">
                                Mother Name{" "}
                                <span className="font-bold">
                                  {meetItem.mother_name}
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-auto mr-8">
                        <div className="text-xl flex items-center gap-8">
                          <div className="text-center flex flex-col items-center justify-center">
                            <p className="text-lg opacity-60">Date</p>
                            <p>{meetItem.date}</p>
                          </div>
                          <div className="text-center flex flex-col items-center justify-center">
                            <p className="text-lg opacity-60">Timing</p>
                            <p>
                              {meetItem.time_start} {meetItem.time_end}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Meet;
