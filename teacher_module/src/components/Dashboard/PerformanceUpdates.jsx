import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { performanceData } from "../../utils/performanceData";
import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";

const PerformanceUpdates = () => {
  const [startIndex, setStartIndex] = useState(0);

  // handle prev tabs of performance cards
  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(0, prevIndex - 2));
  };

  // handle next tabs of performance cards
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 2, performanceData.length - 2)
    );
  };

  function truncateString(inputString) {
    const maxLength = 10;

    if (inputString.length > maxLength) {
      return inputString.substring(0, maxLength) + "...";
    } else {
      return inputString;
    }
  }

  return (
    <div id="performance-updates" className=" mt-8 relative overflow-hidden">
      <h2 className="font-normal text-3xl mb-2">Performance Updates</h2>
      <button
        onClick={handlePrev}
        className="text-sm absolute right-12 top-4 transform -translate-y-1/2"
      >
        <CaretCircleLeft
          className="icon inline-block"
          size={32}
          weight="fill"
          color="var(--ac-secondary)"
        />
      </button>
      <button
        onClick={handleNext}
        className="text-sm absolute right-4 top-4 transform -translate-y-1/2"
      >
        <CaretCircleRight
          className="icon inline-block"
          size={32}
          weight="fill"
          color="var(--ac-secondary)"
        />
      </button>
      <div className="flex items-center justify-start">
        <div className="performance-card-container grid grid-flow-col justify-start gap-4 gap-x-7">
          {performanceData
            .slice(startIndex, startIndex + 3)
            .map((performance) => (
              <div
                key={performance.id}
                className="performance-card rounded-lg text-left gap-2 mb-4 p-2 bg-[--bg-secondary]"
              >
                <div className="w-fit">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold truncate w-xs">
                      {performance.class} ({truncateString(performance.subject)}
                      )
                    </h3>
                    <button className="px-2 pt-0.5 font-semibold text-xs rounded-md border border-[--ac-secondary] text-[--ac-secondary]">
                      View More
                    </button>
                  </div>
                  <PieChart
                    className="uw:px-32 lg:px-20 my-2"
                    data={[
                      {
                        title: "Pass",
                        value: performance.pass,
                        color: "var(--ac-secondary)",
                      },
                      {
                        title: "Fail",
                        value: performance.fail,
                        color: "var(--ac-primary)",
                      },
                    ]}
                    style={{ height: "9rem" }}
                    totalValue={performance.total_students}
                    lineWidth={42}
                    animate
                  />
                  <div className="font-normal text-sm flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="inline-block bg-[--ac-secondary] w-2 h-2 rounded-full mr-1"></div>
                      <p>
                        Pass -{" "}
                        {Math.floor(
                          (performance.pass / performance.total_students) * 100
                        )}
                        %
                      </p>  
                    </div>
                    <div className="flex items-center">
                      <div className="inline-block bg-[--ac-primary] w-2 h-2 rounded-full mr-1"></div>
                      <p>
                        Fail -{" "}
                        {Math.floor(
                          (performance.fail / performance.total_students) * 100
                        )}
                        %
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceUpdates;
