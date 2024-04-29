import { CaretDown } from "@phosphor-icons/react";

const ClassworkSelection = () => {
  return (
    <div className="classwork-selection flex flex-col items-center justify-center">
      <h3 className="text-3xl font-medium">Classwork</h3>
      <div className="classwork-field mt-4 w-[60%]">
        <div className="relative">
          <select className="p-2 outline-none text-xl font-light bg-[var(--secondary-bg)] border border-[var(--border)] rounded-lg w-full appearance-none">
            <option value={""}>All Classwork</option>
            <option value={"c1"}>Classwork 1</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <CaretDown size={32} weight="light" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassworkSelection;
