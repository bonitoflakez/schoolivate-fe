import { useState } from "react";

const GiveStudentRemarks = ({ onBackClick, selectedStudentName }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [description, setDescription] = useState("");
  const [notifyParents, setNotifyParents] = useState(false);

  const handleSubmit = () => {
    // remarks submission
    console.log("Submitting remarks:", {
      selectedOption,
      description,
      notifyParents,
    });

    onBackClick();
  };

  return (
    <div className="w-full h-full pb-4 rounded-2xl">
      <div
        className="flex items-center rounded-t-2xl lg:p-6 uw:p-8"
        style={{
          background: "var(--default-primary-accent)",
        }}
      >
        <button
          onClick={onBackClick}
          className="text-sm px-4 py-1 rounded-md"
          style={{ background: "var(--default-secondary-accent)" }}
        >
          Back
        </button>

        <h2 className="text-2xl ml-6 font-semibold">{`${selectedStudentName}`}</h2>

        <button
          onClick={handleSubmit}
          className="ml-auto lg:text-md uw:text-lg px-4 py-1 rounded-md"
          style={{ background: "var(--default-secondary-accent)" }}
        >
          Submit Remarks
        </button>
      </div>

      <div
        className="min-h-[70vh] rounded-b-2xl text-black"
        style={{ background: "var(--default-secondary-accent)" }}
      >
        <div className="flex flex-col items-center mx-48">
          <div className="my-12">
            <h2 className="text-4xl font-semibold">Give Remarks</h2>
          </div>

          <div className="w-full">
            <h2 className="text-xl font-semibold mb-2">Category</h2>
            <select
              className="text-lg px-4 py-2 mb-4 rounded-md w-full outline-none"
              style={{
                background: "var(--default-primary-fg)",
                color: "#000000",
              }}
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <textarea
            className="text-md px-4 py-2 mb-4 rounded-md w-full outline-none"
            rows="4"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{
              color: "#000000",
            }}
          ></textarea>

          <div className="w-full">
            <label className="flex items-center mb-4 font-semibold text-md">
              <input
                type="checkbox"
                checked={notifyParents}
                onChange={() => setNotifyParents(!notifyParents)}
                className="mr-2"
              />
              Notify Parents or Guardian
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveStudentRemarks;
