import SchoolWorkHistoryGrid from "../components/SchoolWorkHistoryGrid";
const SchoolWork = () => {
  return (
    <div
      className="min-h-[90vh] p-6 my-4 rounded-3xl bg-[--ac-primary]"
      style={
        {
          // background: "var(--default-primary-accent)",
        }
      }
    >
      <SchoolWorkHistoryGrid />
    </div>
  );
};

export default SchoolWork;
