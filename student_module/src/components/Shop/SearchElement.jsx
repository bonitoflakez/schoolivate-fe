import { MagnifyingGlass } from "@phosphor-icons/react";

const ShopSearchElement = () => {
  return (
    <div className="relative search-input my-2">
      <input
        type="text"
        placeholder="Search"
        className="p-2 w-full rounded-xl bg-[--secondary-bg] outline-none text-lg placeholder-[--border] border-2 border-[--border] text-[--primary-fg]"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <MagnifyingGlass size={24} weight="bold" />
      </div>
    </div>
  );
};

export default ShopSearchElement;
