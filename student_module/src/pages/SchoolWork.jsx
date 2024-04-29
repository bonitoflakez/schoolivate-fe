import { useState } from "react";

import { classworkData } from "../utils/classworkData";
import SchoolworkIllustration from "../components/Schoolwork/ClassworkIllustration";
import ClassworkSelection from "../components/Schoolwork/ClassworkSelection";
import ActiveClasswork from "../components/Schoolwork/ActiveClasswork";
import CompletedClasswork from "../components/Schoolwork/CompletedClasswork";
import ViewClasswork from "../components/Schoolwork/ViewClasswork";

const SchoolWork = () => {
  const [viewWork, setViewWork] = useState(null);
  const [displayWork, setDisplayWork] = useState(null);

  const openViewWork = (work) => {
    setDisplayWork(work);
    setViewWork(true);
  };

  const closeViewWork = () => {
    setDisplayWork(null);
    setViewWork(null);
  };

  return (
    <>
      <h3 className="text-[2.5rem] mt-4 font-medium">School Work</h3>
      <div
        className={`main-schoolwork-section ${
          viewWork ? "bg-[--accent-x-extra-light]" : "bg-[--secondary-bg]"
        } rounded-2xl mt-4 pb-4 min-h-[85vh]`}
      >
        {viewWork ? (
          <ViewClasswork
            closeViewWork={closeViewWork}
            displayWork={displayWork}
          />
        ) : (
          <>
            <SchoolworkIllustration />
            <ClassworkSelection />
            <div className="classwork-display mx-16 lt:mx-20">
              <ActiveClasswork
                classworkData={classworkData}
                openViewWork={openViewWork}
              />
              <CompletedClasswork
                classworkData={classworkData}
                openViewWork={openViewWork}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SchoolWork;
