import { useState } from "react";

const ProfileSearch = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="p-1 my-0.5">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="text-lg mx-auto w-[80%] font-medium px-6 py-4 outline-none rounded-full"
            style={{
              background: "var(--secondary-bg)",
              color: "var(--primary-fg)",
            }}
          />
          <div className="ml-auto relative">
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
                className="absolute z-50 mt-4 right-0 w-64 rounded-lg shadow-md"
              >
                <ul
                  className="py-2 px-3 rounded-lg"
                  style={{
                    background: "var(--secondary-bg)",
                    color: "var(--primary-fg)",
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
    </>
  );
};

export default ProfileSearch;
