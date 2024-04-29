import React, { useState } from "react";
import { classData } from "../utils/classData";
import { Link } from "react-router-dom";

const TuitionYoureTaking = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="w-full p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-normal">Tuitions You're Taking</h3>

          <div className="">
            <select
              value={selectedOption}
              onChange={handleOptionChange}
              // className="outline-none border px-2 rounded-md"
              className="text-lg font-semibold border px-2 pt-0.5 rounded-md border-black text-black"
              style={{
                background: "var(--blue-darker)",
              }}
            >
              <option value="">Session</option>
              <option value="one-on-one">one-on-one</option>
              <option value="group">Group</option>
            </select>
          </div>
        </div>
      </div>
      <div
        id="tuition-taking"
        className="h-80 p-4 pl-6 rounded-2xl bg-[--bg-secondary]"
      >
        <div className="overflow-y-auto h-72">
          {classData.map((classNotice) => (
            <div
              key={classNotice.id}
              className="class-item flex mb-4 overflow-hidden rounded-lg bg-[--ac-primary] text-[--fg-primary] border border-[--ac-primary] rounded-md relative"
              style={
                {
                  // background: "var(--default-primary-accent)",
                }
              }
            >
              <div className="block w-full p-2">
                <div className="w-full flex items-center justify-between">
                  <div>
                    <div className="flex items-center">
                      <div className="font-bold text-2xl">
                        Class {classNotice.className}-{classNotice.section}{" "}
                        Student
                      </div>
                      <div
                        className="ml-4 px-2 pt-0.5 text-sm font-bold rounded-md"
                        style={{
                          background: "var(--blue-normal)",
                          color: "var(--default-secondar-bg)",
                        }}
                      >
                        <div className="text-lg px-4 py-0.5 rounded-md bg-[--ac-secondary] text-[--bg-primary] ml-auto">
                          {classNotice.type}
                        </div>
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

                  <div className="right-section flex items-center gap-x-32">
                    <div className="text-md font-light">
                      <div className="inline-block text-center mr-2">
                        <h3 className="opacity-60">Date</h3>
                        <h3>{classNotice.date}</h3>
                      </div>
                      <div className="inline-block text-center">
                        <h3 className="opacity-60">Time</h3>
                        <h3>
                          {classNotice.time_start} - {classNotice.time_end}
                        </h3>
                      </div>
                    </div>

                    <div>
                      {/* <Link to={classNotice.join_link}> */}
                      <button
                        className="float-right text-md font-semibold px-4 py-1 h-fit mt-10 rounded-md bg-[--ac-secondary] text-[--bg-primary] ml-auto"
                        style={
                          {
                            // background: "var(--blue-light)",
                            // color: "var(--blue-darker)",
                          }
                        }
                      >
                        Join
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TuitionYoureTaking;
