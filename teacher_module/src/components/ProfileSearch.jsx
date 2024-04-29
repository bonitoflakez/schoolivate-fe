import { useState, useEffect, useRef } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";

const ProfileSearch = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", closeDropdown);

    // Detach the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <div className="py-1 my-0.5">
      <div className="flex items-center">
        <div className="w-[80%] relative">
          <input
            type="text"
            placeholder="Search"
            className="text-lg text-[--fg-primary] w-full font-medium p-2 pr-12 border-2 outline-none bg-[--bg-secondary] rounded-xl"
          />
          <MagnifyingGlass
            size={26}
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
            weight="bold"
            color="var(--dark-grey)"
          />
        </div>
        <div className="ml-auto relative" ref={dropdownRef}>
          <button className="outline-none" onClick={toggleDropdown}>
            <img
              src="https://i.pinimg.com/564x/1a/c0/23/1ac0231aa6d74d092328d445aa98183e.jpg"
              alt="User Profile"
              className="rounded-full w-14 h-14"
            />
          </button>
          {isDropdownOpen && (
            <div
              id="profile-dropdown"
              className="absolute z-50 right-0 w-64 rounded-lg shadow-md"
            >
              <ul
                className="py-2 px-3 rounded-lg"
                style={{
                  background: "var(--default-secondary-bg)",
                  color: "var(--default-primary-fg)",
                }}
              >
                <li className="px-2 py-1 rounded-md">
                  <a href="#profile" className="block py-2">
                    My Profile
                  </a>
                </li>
                <li className="px-2 py-1 rounded-md">
                  <a href="#submit-request" className="block py-2">
                    Submit a Request
                  </a>
                </li>
                <li className="px-2 py-1 rounded-md">
                  <a href="#settings" className="block py-2">
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSearch;
