import { ArrowLeft, Plus, Star, Paperclip } from "@phosphor-icons/react";
import { rms } from "../utils/rms.js";
import { useState } from "react";

const RMS = () => {
  const [addRMS, setAddRMS] = useState(null);

  const handleAddRMS = () => {
    setAddRMS(true);
  };

  return (
    <>
      <div id="rms" className="py-6">
        {addRMS ? (
          <>
            <div className="top-container flex items-center">
              <div className="flex items-center">
                <ArrowLeft
                  size={32}
                  weight="bold"
                  className="cursor-pointer"
                  onClick={() => setAddRMS(null)}
                />
                <h3 className="ml-2 text-3xl font-bold">R.M.S</h3>
              </div>
              <button
                onClick={handleAddRMS}
                className="px-4 py-2 rounded-md ml-auto flex items-center text-white"
                style={{
                  background: "var(--ac-primary)",
                  color: "var(--fg-secondary)",
                }}
              >
                Done
              </button>
            </div>
            <div className="add-rms mx-32">
              <div className="category-section py-6">
                <h3 className="text-lg">RMS Category</h3>
                <select
                  className="w-full p-2 text-black bg-[--bg-secondary] rounded-md border-2 border-[--fg-secondary]"
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
              <div className="category-section py-6">
                <h3 className="text-lg">Sub Category</h3>
                <select
                  className="w-full p-2 text-black bg-[--bg-secondary] rounded-md border-2 border-[--fg-secondary]"
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
              <div className="py-6">
                <h3 className="text-lg font-medium">Details</h3>
                <textarea
                  type="text"
                  className="w-full p-2 text-black rounded-md bg-[--bg-secondary] border-2 border-[--fg-secondary]"
                  placeholder="Enter Details"
                ></textarea>
              </div>
              <div className="py-6 flex items-center justify-center">
                <button
                  className="px-4 py-2 rounded-md flex items-center"
                  style={{
                    background: "var(--fg-secondary)",
                    color: "var(--bg-primary)",
                  }}
                >
                  <Paperclip size={18} weight="bold" />
                  Attachment
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="top-container flex items-center">
              <h3 className="text-3xl font-bold">R.M.S</h3>
              <button
                onClick={handleAddRMS}
                className="px-4 py-2 rounded-md ml-auto flex items-center"
                style={{
                  background: "var(--ac-primary)",
                }}
              >
                <Plus size={18} className="mr-2" weight="bold" />
                Add
              </button>
            </div>
            <div className="rms-list py-4">
              <ul>
                {rms.map((rmsProb) => (
                  <li
                    key={rmsProb.id}
                    className="flex items-center mb-4 overflow-hidden rounded-md p-4"
                    style={{
                      background: "var(--ac-primary)",
                      color: "#000000",
                    }}
                  >
                    <div className="w-full">
                      <div className="top-section flex items-center">
                        <div className="mb-6">
                          <h2 className="text-2xl font-bold">
                            {rmsProb.category_title}
                          </h2>
                          <h2 className="text-lg font-medium">
                            {rmsProb.sub_category_title}
                          </h2>
                        </div>
                        {rmsProb.resolved ? (
                          <>
                            <div
                              className="ml-auto px-4 py-1 rounded-md"
                              style={{
                                background: "var(--green)",
                                color: "var(--bg-primary)",
                              }}
                            >
                              <h3 className="text-lg">Resolved</h3>
                            </div>
                          </>
                        ) : (
                          <div
                            className="ml-auto px-4 py-1 rounded-md"
                            style={{
                              background: "var(--yellow)",
                            }}
                          >
                            <h3 className="text-lg">Pending</h3>
                          </div>
                        )}
                      </div>
                      <div className="description">
                        <p
                          className="max-w-[50vw] text-md opacity-60 font-medium overflow-hidden text-ellipsis"
                          style={{
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 5,
                          }}
                        >
                          {rmsProb.description}
                        </p>
                      </div>
                      <div className="bottom-section flex items-center py-2">
                        <div className="file-info p-2 bg-white text-black min-w-[30%] rounded-md">
                          <h3 className="text-md font-normal">
                            {rmsProb.file_name}
                          </h3>
                        </div>
                        <div className="date-info ml-auto">
                          <h2 className="text-sm">{rmsProb.date}</h2>
                        </div>
                      </div>
                      {rmsProb.resolved ? (
                        <>
                          <div className="management-response w-full flex my-4">
                            <div className="mgmt-info">
                              <div className="flex items-center">
                                <div className="mgmt-pfp h-12 w-12 rounded-full bg-gray-500"></div>
                                <h3 className="ml-2 text-md font-bold">
                                  {rmsProb.mgmt.management_name}
                                </h3>
                              </div>
                              <div className="ml-14 mt-[-0.5rem]">
                                <div className="text-sm max-w-[30vw] rounded-md bg-white text-black p-2">
                                  {rmsProb.mgmt.response_msg}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mgmt-review w-full my-4 flex items-center justify-center">
                            <div
                              className="w-[30vw] flex items-center justify-center rounded-xl"
                              style={{
                                background: "var(--blue-dark)",
                              }}
                            >
                              <div className="p-4 text-white max-w-[25vw] rounded-md bg-[--ac-secondary]">
                                <div className="flex justify-center my-2">
                                  <h3 className="text-2xl font-medium text-center">
                                    How do you rate candidate?
                                  </h3>
                                </div>
                                <div className="flex items-center justify-around my-2">
                                  <Star
                                    size={52}
                                    style={{ color: "var(--star)" }}
                                    weight="bold"
                                  />
                                  <Star
                                    size={52}
                                    style={{ color: "var(--star)" }}
                                    weight="bold"
                                  />
                                  <Star
                                    size={52}
                                    style={{ color: "var(--star)" }}
                                    weight="bold"
                                  />
                                  <Star
                                    size={52}
                                    style={{ color: "var(--star)" }}
                                    weight="bold"
                                  />
                                  <Star
                                    size={52}
                                    style={{ color: "var(--star)" }}
                                    weight="bold"
                                  />
                                </div>
                                <div className="flex justify-center my-2">
                                  <div className="flex items-center">
                                    <input
                                      className="rounded-lg px-4 py-3 text-md outline-none"
                                      style={{
                                        background: "var(--bg-primary)",
                                        color: "var(--blue-light)",
                                        border: "1px solid var(--blue-light)",
                                      }}
                                      placeholder="Write Review!!"
                                    ></input>
                                    <button
                                      className="text-white px-6 py-3 ml-4 rounded-xl"
                                      style={{
                                        background: "var(--ac-primary)",
                                        color: "var(--fg-secondary)",
                                      }}
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default RMS;
