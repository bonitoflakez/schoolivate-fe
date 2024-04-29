import { createContext, useContext, useState } from "react";

const ClassContext = createContext();

export const ClassProvider = ({ children }) => {
  const [selectedClass, setSelectedClass] = useState(null);

  const setClassDetails = (classDetails) => {
    setSelectedClass(classDetails);
  };

  return (
    <ClassContext.Provider value={{ selectedClass, setClassDetails }}>
      {children}
    </ClassContext.Provider>
  );
};

export const useClassContext = () => {
  const context = useContext(ClassContext);
  if (!context) {
    throw new Error("useClassContext must be used within a ClassProvider");
  }
  return context;
};
