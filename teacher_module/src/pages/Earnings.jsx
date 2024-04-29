import React, { useState } from "react";
import { classData } from "../utils/classData";
import { Link } from "react-router-dom";

const Earnings = () => {
  return (
    <>
      <div className="p-4 mt-6">
        <div className="flex items-center">
          <h3 className="text-4xl font-bold">Total Earnings</h3>
        </div>
      </div>
      <div id="tuition-taking" className="p-4 rounded-lg">
        <div className="overflow-y-auto min-h-[80vh] max-h-[80vh] bg-[--bg-secondary] rounded-2xl pt-10">
          {classData.map((classNotice) => (
            <div
              key={classNotice.id}
              className="class-item flex m-4 overflow-hidden rounded-2xl"
              style={{
                background: "var(--ac-primary)",
              }}
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
                        className="ml-4 px-2 pt-1 font-bold rounded-md"
                        style={{
                          background: "var(--ac-secondary)",
                          color: "var(--bg-primary)",
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
                          <p>{classNotice.date}</p>
                        </div>
                        <div className="text-center flex flex-col items-center justify-center">
                          <p className="text-lg opacity-60">Timing</p>
                          <p>
                            {classNotice.time_start} {classNotice.time_end}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center mr-2">
                      <h3 className="text-2xl font-bold mb-2 text-white">Rs {classNotice.price}/-</h3>
                      <Link to={classNotice.join_link}>
                        <button
                          className="font-bold px-4 py-1 h-fit rounded-md"
                          style={{
                            background: "var(--fg-secondary)",
                            color: "var(--bg-primary)",
                            fontSize: "var(--lg-txt)",
                          }}
                        >
                          VIEW
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
  );
};

export default Earnings;
