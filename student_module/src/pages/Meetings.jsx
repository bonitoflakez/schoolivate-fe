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
                <h3 className="text-3xl font-semibold">Meet</h3>
              </div>
              <button className="bg-green-700 px-4 py-2 ml-auto rounded-md flex items-center">
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
                <h3 className="text-2xl font-semibold">Create Session</h3>
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
            <div className="top-container flex items-center mb-6">
              <h3 className="text-3xl font-semibold">Meet</h3>
              <button
                onClick={handleCreateSession}
                className="px-4 py-2 ml-auto border rounded-md flex items-center"
              >
                <Plus size={18} className="mr-2" weight="bold" /> Create
              </button>
            </div>

            <div id="meet-taking" className="p-4 rounded-lg">
              <h2 className="text-2xl font-semibold pb-2">
                Current Meet Meeting
              </h2>
              <div className="overflow-y-auto">
                <div
                  key={currentSession.id}
                  className="class-item flex mb-4 overflow-hidden rounded-md"
                  style={{
                    background: "var(--default-primary-accent)",
                  }}
                >
                  <div className="w-full p-2 flex items-center">
                    <div>
                      <div className="float-left">
                        <span className="font-semibold text-xl">
                          Meet with {currentSession.student_name}
                        </span>
                      </div>

                      <div className="clear-both"></div>

                      <div className="flex mt-2">
                        <div className="w-full">
                          <div className="float-left flex items-center justify-between">
                            <p>Father Name {currentSession.father_name}</p>
                            <div className="mx-2"></div>
                            <p>Mother Name {currentSession.mother_name}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div className="text-sm float-right">
                        <span className="inline-block text-center">
                          Date
                          <br />
                          {currentSession.date}
                        </span>
                        <div className="inline-block mx-1">-</div>
                        <span className="inline-block text-center">
                          Time
                          <br />
                          {currentSession.time_start} -{" "}
                          {currentSession.time_end}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="all-tuitions">
            <div id="meet-taking" className="p-4 rounded-lg">
              <div className="w-full pb-2 flex items-center">
                <div className="text-2xl font-semibold drop-shadow-sm">
                  Upcoming Session
                </div>

                <div className="ml-auto">
                  <select
                    value={selectedOption}
                    onChange={handleOptionChange}
                    className="block outline-none appearance-none border px-2 rounded-md"
                    style={{
                      background: "var(--default-secondary-bg)",
                    }}
                  >
                    <option value="session">Session</option>
                    <option value="">Something</option>
                    <option value="tuition3">Something</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 7l5 5 5-5z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="overflow-y-auto h-[60vh]">
                {meetingData.map((meetItem) => (
                  <div
                    key={meetItem.id}
                    className="class-item flex mb-4 overflow-hidden rounded-md"
                    style={{
                      background: "var(--default-primary-accent)",
                    }}
                  >
                    <div className="w-full p-2 flex items-center">
                      <div>
                        <div className="float-left">
                          <span className="font-semibold text-xl">
                            Meet with {meetItem.student_name}
                          </span>
                        </div>

                        <div className="clear-both"></div>

                        <div className="flex mt-2">
                          <div className="w-full">
                            <div className="float-left flex items-center justify-between">
                              <p>Father Name {meetItem.father_name}</p>
                              <div className="mx-2"></div>
                              <p>Mother Name {meetItem.mother_name}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ml-auto">
                        <div className="text-sm float-right">
                          <span className="inline-block text-center">
                            Date
                            <br />
                            {meetItem.date}
                          </span>
                          <div className="inline-block mx-1">-</div>
                          <span className="inline-block text-center">
                            Time
                            <br />
                            {meetItem.time_start} - {meetItem.time_end}
                          </span>
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
