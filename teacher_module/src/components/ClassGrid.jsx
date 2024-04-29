import { performanceData } from "../utils/performanceData";

const ClassGrid = ({ handleCardClick }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-20 w-full overflow-y-auto h-[86vh] px-12 mt-4">
        {performanceData.map((cls) => (
          <button
            id="class-card"
            key={cls.id}
            className="p-4 rounded-2xl shadow-md bg-[--ac-primary]"
            onClick={() => handleCardClick(cls)}
          >
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 mb-4 rounded-full">
                {/* <img
                  className="object-cover h-full w-full rounded-full"
                  // NOTE: use data.image when using backend
                  src="https://source.unsplash.com/random/book,desk,computer,science"
                  alt="classes"
                /> */}
              </div>

              <h3 className="text-xl font-bold mb-2">{`${cls.class}`}</h3>
              <h3 className="text-xl font-bold mb-2">{`(${cls.subject})`}</h3>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClassGrid;
