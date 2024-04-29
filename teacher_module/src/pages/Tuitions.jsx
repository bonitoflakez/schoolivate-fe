import React, { useState } from "react";
import { classData } from "../utils/classData";
import { Link } from "react-router-dom";
import { Plus } from "@phosphor-icons/react";

const Tuition = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [createTuition, setCreateTuition] = useState(null);

  // create session
  const [title, setTitle] = useState("");
  const [session, setSession] = useState("s1");
  const [sessionCharges, setSessionCharges] = useState("c1");
  const [date, setDate] = useState("d1");
  const [timings, setTimings] = useState("t1");
  const [description, setDescription] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const createTuitionSession = () => {
    setCreateTuition(true);
  };

  const closeTuitionCreateSession = () => {
    setCreateTuition(null);
  };

  const currentSession = classData[0];

  return (
    <>
      <div className="p-4 mt-6">
        <div className="flex items-center">
          <h3 className="text-4xl font-bold">Tuition</h3>

          <div className="ml-auto">
            {createTuition ? (
              <>
                <button
                  className="flex items-center px-4 py-2 rounded-md bg-[--ac-primary]"
                  style={
                    {
                      // background: "var(--blue-dark-0)",
                    }
                  }
                  onClick={closeTuitionCreateSession}
                >
                  <span className="text-xl font-bold">Done</span>
                </button>
              </>
            ) : (
              <>
                <button
                  className="flex items-center px-4 py-2 rounded-md bg-[--ac-primary]"
                  style={
                    {
                      // background: "var(--blue-dark-0)",
                    }
                  }
                  onClick={createTuitionSession}
                >
                  <Plus size={24} weight="bold" />{" "}
                  <span className="text-xl font-bold ml-2">Create</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {createTuition ? (
        <>
          <div
            className="rounded-xl min-h-[85vh] max-h-[85vh] p-4 bg-[--ac-primary]"
            style={
              {
                // background: "var(--blue-normal)",
              }
            }
          >
            <div>
              <h3 className="mx-4 mt-6 text-3xl font-bold">Create Session</h3>

              <div className="details mb-4 mx-4">
                <div className="assignment-name mt-12">
                  <h3 className="text-md font-bold mb-2">Title</h3>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="p-2 w-full rounded-md text-md outline-none bg-white text-black"
                    placeholder="Enter Title"
                  />
                </div>
              </div>

              <div className="session-selection my-4 mx-4">
                <h3 className="text-md font-bold mb-2">Session</h3>
                <select
                  id="sessionSelect"
                  value={session}
                  onChange={(e) => setSession(e.target.value)}
                  className="outline-none border rounded-md text-md p-2 w-full bg-white text-black"
                >
                  <option value="s1">Session 1</option>
                  <option value="s2">Session 2</option>
                  <option value="s3">Session 3</option>
                </select>
              </div>

              <div className="session-charges-selection my-4 mx-4">
                <h3 className="text-md font-bold mb-2">Session Charges</h3>
                <select
                  id="sessionChargesSelect"
                  value={sessionCharges}
                  onChange={(e) => setSessionCharges(e.target.value)}
                  className="outline-none border rounded-md text-md p-2 w-full bg-white text-black"
                >
                  <option value="c1">Charge 1</option>
                  <option value="c2">Charge 2</option>
                  <option value="c3">Charge 3</option>
                </select>
              </div>

              <div className="date-selection my-4 mx-4">
                <h3 className="text-md font-bold mb-2">Date</h3>
                <select
                  id="dateSelect"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="outline-none border rounded-md text-md p-2 w-full bg-white text-black"
                >
                  <option value="d1">Date 1</option>
                  <option value="d2">Date 2</option>
                  <option value="d3">Date 3</option>
                </select>
              </div>

              <div className="timing-selection my-4 mx-4">
                <h3 className="text-md font-bold mb-2">Timings</h3>
                <select
                  id="timingsSelect"
                  value={timings}
                  onChange={(e) => setTimings(e.target.value)}
                  className="outline-none border rounded-md text-lg p-2 w-full bg-white text-black"
                >
                  <option value="t1">Timings 1</option>
                  <option value="t2">Timings 2</option>
                  <option value="t3">Timings 3</option>
                </select>
              </div>

              <div className="description my-4 mx-4">
                <h3 className="text-md font-bold mb-2">Description</h3>
                <textarea
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="p-3 text-lg w-full rounded-md outline-none bg-white text-black"
                  placeholder="Enter Description"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div id="tuition-taking" className="h-fit p-4 rounded-lg mb-4">
            <h3 className="font-bold text-2xl mb-2">Current Session</h3>
            <div className="overflow-y-auto h-fit">
              {
                <div
                  key={currentSession.id}
                  className="class-item flex overflow-hidden rounded-md bg-[--ac-primary]"
                  style={
                    {
                      // background: "var(--default-primary-accent)",
                    }
                  }
                >
                  <div className="block w-full p-2">
                    <div className="w-full flex items-center">
                      <div>
                        <div className="flex">
                          <div className="font-bold text-2xl">
                            Class {currentSession.className}-
                            {currentSession.section} Student
                          </div>
                          <div
                            className="ml-4 px-2 pt-1 text-sm font-bold rounded-md bg-[--ac-secondary] text-[--bg-primary]"
                            style={{
                              // background: "var(--blue-normal)",
                              // color: "var(--bg-primary)",
                              fontSize: "var(--md-txt)",
                            }}
                          >
                            {currentSession.type}
                          </div>
                        </div>
                        <div className="flex justify-between mt-2">
                          <div className="w-full">
                            <p className="float-left font-light opacity-60">
                              {currentSession.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ml-auto flex items-center">
                        <div className="mr-24">
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

                        <div>
                          <Link to={currentSession.join_link}>
                            <button
                              className="font-bold px-4 py-1 h-fit mt-10 rounded-md"
                              style={{
                                // background: "var(--blue-light)",
                                // color: "var(--blue-darker)",
                                background: "var(--fg-secondary)",
                                color: "var(--bg-primary)",

                                fontSize: "var(--lg-txt)",
                              }}
                            >
                              Join
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
          <div id="tuition-taking" className="p-4 rounded-lg">
            <div className="flex items-start mb-6">
              <h3 className="font-bold text-2xl">Up-coming Session</h3>
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="ml-auto cursor-pointer outline-none border p-2 rounded-md border-black text-black"
                style={{
                  // background: "var(--blue-dark)",
                }}
              >
                <option value="">All Sessions</option>
                <option value="session">Session</option>
                <option value="tuition3">Session</option>
              </select>
            </div>
            <div className="overflow-y-auto min-h-[60vh] max-h-[60vh]">
              {classData.map((classNotice) => (
                <div
                  key={classNotice.id}
                  className="class-item flex mb-4 overflow-hidden rounded-md bg-[--ac-primary]"
                  style={
                    {
                      // background: "var(--default-primary-accent)",
                    }
                  }
                >
                  <div className="block w-full p-2">
                    <div className="w-full flex items-center">
                      <div>
                        <div className="flex">
                          <div className="font-bold text-2xl">
                            Class {classNotice.className}-{classNotice.section}{" "}
                            Student
                          </div>
                          <div
                            className="ml-4 px-2 pt-1 font-bold rounded-md bg-[--ac-secondary] text-[--bg-primary]"
                            style={{
                              // background: "var(--blue-normal)",
                              // color: "var(--blue-light)",
                              fontSize: "var(--md-txt)",
                            }}
                          >
                            {classNotice.type}
                          </div>
                        </div>
                        <div className="flex justify-between mt-2">
                          <div className="w-full">
                            <p className="float-left font-light opacity-60">
                              {classNotice.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="ml-auto flex items-center">
                        <div className="mr-24">
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

                        <div>
                          <Link to={classNotice.join_link}>
                            <button
                              className="font-bold px-4 py-1 h-fit mt-10 rounded-md"
                              style={{
                                // background: "var(--blue-light)",
                                // color: "var(--blue-darker)",
                                background: "var(--fg-secondary)",
                                color: "var(--bg-primary)",
                                fontSize: "var(--lg-txt)",
                              }}
                            >
                              EDIT
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Tuition;
