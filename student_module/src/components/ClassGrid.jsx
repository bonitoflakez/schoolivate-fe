import { performanceData } from "../utils/performanceData";

const ClassGrid = ({handleCardClick}) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 uw:grid-cols-5 gap-4">
        {performanceData.map((cls) => (
          <div
            id="class-card"
            key={cls.id}
            className="p-4 rounded-md text-center shadow-md cursor-pointer"
            onClick={() => handleCardClick(cls)}
          >
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 mb-4 bg-gray-500 rounded-full"></div>
              {/* add image URL */}
              <h3 className="text-lg font-semibold mb-2">{`${cls.class}`}</h3>
              <p className="text-sm mb-2">{`(${cls.subject})`}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ClassGrid;
