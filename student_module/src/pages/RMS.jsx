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
                <h3 className="ml-2 text-3xl font-semibold">R.M.S</h3>
              </div>
              <button
                onClick={handleAddRMS}
                className="px-4 py-2 rounded-md ml-auto flex items-center text-white bg-green-600"
              >
                Done
              </button>
            </div>
            <div className="add-rms mx-32">
              <div className="category-section py-6">
                <h3 className="text-lg">RMS Category</h3>
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
              <div className="category-section py-6">
                <h3 className="text-lg">Sub Category</h3>
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
              <div className="py-6">
                <h3 className="text-lg font-medium">Details</h3>
                <textarea
                  type="text"
                  className="w-full p-2 text-black bg-white rounded-md outline-none"
                  placeholder="Enter Details"
                ></textarea>
              </div>
              <div className="py-6 flex items-center justify-center">
                <button
                  className="px-4 py-2 rounded-md flex items-center"
                  style={{
                    background: "var(--default-secondary-accent)",
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
              <h3 className="text-3xl font-semibold">R.M.S</h3>
              <button
                onClick={handleAddRMS}
                className="px-4 py-2 rounded-md ml-auto flex items-center"
                style={{
                  background: "var(--default-secondary-accent)",
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
                    className="flex items-center mb-4 overflow-hidden rounded-md cursor-pointer p-4"
                    style={{
                      background: "var(--default-secondary-accent)",
                      color: "#000000",
                    }}
                  >
                    <div className="w-full">
                      <div className="top-section flex items-center">
                        <h2 className="text-2xl font-semibold">
                          {rmsProb.category_title}
                        </h2>
                        {rmsProb.resolved ? (
                          <>
                            <div className="ml-auto px-4 py-1 rounded-md bg-green-600">
                              <h3 className="text-lg">Resolved</h3>
                            </div>
                          </>
                        ) : (
                          <div className="ml-auto px-4 py-1 rounded-md bg-yellow-400">
                            <h3 className="text-lg">Pending</h3>
                          </div>
                        )}
                      </div>
                      <div className="description">
                        <p
                          className="max-w-[50vw] text-sm overflow-hidden overflow-ellipsis"
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
                            <div className="mgmt-info flex items-center">
                              <div className="mgmt-pfp h-12 w-12 rounded-full bg-gray-500"></div>
                              <div className="ml-2">
                                {" "}
                                <h3 className="text-md font-semibold">
                                  {rmsProb.mgmt.management_name}
                                </h3>
                                <div className="text-sm max-w-[40vw] rounded-md bg-white text-black p-2">
                                  {rmsProb.mgmt.response_msg}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mgmt-review w-full flex my-4 items-center justify-center">
                            <div
                              className="p-4 text-white rounded-md"
                              style={{
                                background: "var(--default-primary-accent)",
                              }}
                            >
                              <div className="flex justify-center my-2">
                                <h3 className="text-lg font-semibold">
                                  How do you rate candidate?
                                </h3>
                              </div>
                              <div className="flex items-center justify-around my-2">
                                <Star size={32} weight="regular" />
                                <Star size={32} weight="regular" />
                                <Star size={32} weight="regular" />
                                <Star size={32} weight="regular" />
                                <Star size={32} weight="regular" />
                              </div>
                              <div className="flex justify-center my-2">
                                <div className="flex items-center">
                                  <textarea
                                    className="rounded-md p-2 text-sm outline-none text-black"
                                    placeholder="Write a Review"
                                  ></textarea>
                                  <button
                                    className="text-white px-4 py-2 ml-4 rounded-md"
                                    style={{
                                      background:
                                        "var(--default-secondary-accent)",
                                    }}
                                  >
                                    Submit
                                  </button>
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
