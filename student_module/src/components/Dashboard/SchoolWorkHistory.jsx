import TextTruncate from "react-text-truncate";
import { schoolWorkHistory } from "../../utils/schoolWorkData";

const SchoolWorkHistory = () => {
  return (
    <div
      id="schoolwork"
      className="px-4 py-2 rounded-lg w-2/5 mr-4 h-fit mt-4 pb-2 mb-4"
      style={{
        background: "var(--primary-bg)",
      }}
    >
      <div className="flex items-center">
        <p className="text-3xl font-normal">Schoolwork</p>

        <button
          className="px-4 py-0.5 font-semibold text-xs ml-auto rounded-md"
          style={{
            border: "2px solid var(--accent-dark)",
            color: "var(--accent-dark)",
          }}
        >
          View More
        </button>
      </div>

      <div className="h-64 overflow-y-auto mt-4">
        <ul>
          {schoolWorkHistory.map((schoolwork) => (
            <li
              key={schoolwork.id}
              className="flex mb-2 overflow-hidden rounded-lg"
              style={{
                background: "var(--default-primary-accent)",
                color: "var(--default-primary-fg)",
              }}
            >
              <div className="w-full p-2 flex">
                <div className="w-32 flex items-center justify-center">
                  <img
                    src="src/assets/english 1.png"
                    alt={`classwork_img_${schoolwork.id}`}
                    className="object-cover"
                  />
                </div>
                <div className="ml-2 w-full font-medium">
                  <div className="flex items-start">
                    <h3 className="text-xl">Subject</h3>
                    <span
                      className="ml-auto px-2 py-1 text-xs rounded-xl"
                      style={{
                        background: "var(--pending)",
                      }}
                    >
                      <p>Pending</p>
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm">Teacher Name</h3>
                  </div>
                  <div
                    style={{
                      width: "10vw",
                    }}
                  >
                    <div>
                      <p
                        className="opacity-60 font-normal"
                        style={{
                          fontSize: "var(--font-xx-sm)",
                        }}
                      >
                        <TextTruncate
                          line={3}
                          element="span"
                          truncateText="…"
                          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                          textTruncateChild={<span>more</span>}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SchoolWorkHistory;
