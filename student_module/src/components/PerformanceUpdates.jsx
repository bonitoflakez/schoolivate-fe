import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { performanceData } from "../utils/performanceData";
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

  return (
    <>
      <div id="performance-updates" className="mt-8 relative overflow-hidden">
        <h2 className="font-normal text-3xl mb-2">Performance Updates</h2>
        <button
          onClick={handlePrev}
          className="text-sm absolute right-12 top-4 transform -translate-y-1/2"
        >
          <CaretCircleLeft
            className="icon inline-block"
            size={32}
            weight="fill"
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
          />
        </button>
        <div className="performance-card-container flex flex-wrap justify-around">
          {performanceData
            .slice(startIndex, startIndex + 3)
            .map((performance) => (
              <div
                key={performance.id}
                className="flex-shrink-0 performance-card rounded-lg text-left gap-2 mb-4 p-2"
              >
                <div className="w-fit">
                  <div className="">
                    <span className="inline text-md font-semibold">
                      {performance.class} ({performance.subject})
                    </span>
                    <span className="float-right">
                      <button
                        className="px-1 py-0.5 rounded-md border"
                        style={{
                          fontSize: "var(--l-sm-txt)",
                        }}
                      >
                        View More
                      </button>
                    </span>
                  </div>
                  <PieChart
                    className="uw:px-32 lg:px-20"
                    data={[
                      {
                        title: "Pass",
                        value: performance.pass,
                        color: "var(--blue-normal)",
                      },
                      {
                        title: "Fail",
                        value: performance.fail,
                        color: "var(--blue-light)",
                      },
                    ]}
                    style={{ height: "10em" }}
                    totalValue={performance.total_students}
                    lineWidth={42}
                    animate
                  />
                  <div
                    className="font-normal"
                    style={{
                      fontSize: "var(--sm-txt)",
                    }}
                  >
                    <div className="inline-block float-left">
                      <span
                        className="inline-block w-2 h-2 rounded-full mr-1"
                        style={{
                          backgroundColor:
                            "var(--blue-normal)",
                        }}
                      ></span>
                      Pass -{" "}
                      {Math.floor(
                        (performance.pass / performance.total_students) * 100
                      )}
                      %
                    </div>
                    <div className="inline-block float-right">
                      <span
                        className="inline-block w-2 h-2 rounded-full mr-1"
                        style={{
                          backgroundColor:
                            "var(--blue-light)",
                        }}
                      ></span>
                      <span>
                        Fail -{" "}
                        {Math.floor(
                          (performance.fail / performance.total_students) * 100
                        )}
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default PerformanceUpdates;
