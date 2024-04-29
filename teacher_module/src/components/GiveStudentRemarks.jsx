import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
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
        className="flex items-center rounded-t-2xl p-8"
        style={{
          background: "var(--ac-primary)",
        }}
      >
        <div>
          <button onClick={onBackClick}>
            <ArrowLeft size={32} weight="bold" />
          </button>

          <h2 className="text-2xl font-bold">{`${selectedStudentName}`}</h2>
        </div>

        <button
          onClick={handleSubmit}
          className="ml-auto text-lg p-2 rounded-md"
          style={{ background: "var(--ac-secondary)", color: "var(--bg-primary)"}}
        >
          Submit
        </button>
      </div>

      <div
        className="min-h-[70vh] rounded-b-2xl text-black"
        style={{ background: "var(--blue-light-0)" }}
      >
        <div className="flex flex-col items-center mx-48">
          <div className="my-12">
            <h2 className="text-5xl font-bold">Give Remarks</h2>
          </div>

          <div className="w-full">
            <h2 className="text-2xl font-bold mb-2">Category</h2>
            <select
              className="text-lg px-4 py-2 mb-4 rounded-md w-full outline-none"
              style={{
                background: "var(--bg-primary)",
                border: "2px solid var(--fg-secondary)",
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

            <h2 className="text-2xl font-bold mb-2 mt-2">Description</h2>
            <textarea
              className="text-md px-4 py-2 mb-2 rounded-md w-full outline-none"
              rows="4"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{
                background: "var(--bg-primary)",
                border: "2px solid var(--fg-secondary)",
                color: "#000000",
              }}
            ></textarea>
          </div>

          <div className="w-full">
            <label className="flex items-center mb-4 font-bold text-2xl">
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
