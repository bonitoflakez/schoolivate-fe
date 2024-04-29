/**
 *
 * greeting message
 */

const Greeter = () => {
  const current_user = "John";

  return (
    <h3 className="text-[2.5rem] font-medium">Welcome Back {current_user}</h3>
  );
};

export default Greeter;
