import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const GetPageLocation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return currentPath;
};

const NavTab = ({ linkTo, children, tabName, isMessage, unreadMessages }) => {
  let pageLocation = GetPageLocation();

  return (
    <Link
      to={linkTo}
      className={`flex items-center text-2xl text-[var(--nav-unfocused)] w-full font-normal link rounded-lg my-2 px-4 py-2 ${
        pageLocation === linkTo ? "active-tab" : ""
      }`}
    >
      <span className="mr-3">{children}</span>
      {isMessage ? (
        <div className="flex items-center gap-2">
          <div>
            <p>{tabName}</p>
          </div>
          <div>
            {isMessage ? (
              <div
                className="h-6 w-6 flex items-center justify-center rounded-full"
                style={{
                  background: "var(--accent-light)",
                }}
              >
                <p
                  className=""
                  style={{
                    fontSize: "var(--font-x-sm)",
                  }}
                >
                  {unreadMessages}
                </p>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <>{tabName}</>
      )}
    </Link>
  );
};

NavTab.propTypes = {
  linkTo: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  tabName: PropTypes.string.isRequired,
  isMessage: PropTypes.bool,
  unreadMessages: PropTypes.number,
};

export default NavTab;
