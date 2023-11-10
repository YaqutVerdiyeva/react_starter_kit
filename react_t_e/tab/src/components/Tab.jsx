import { useEffect } from "react";

function Tab({ children, active, setActive }) {
  console.log(children);
  useEffect(() => {
    setActive(active);
  }, [active]);
  return (
    <div>
      <nav>
        {children.map((tab, index) => {
          return (
            <button
              onClick={() => setActive(index)}
              className="p-6 m-6 bg-pink-500 text-lg rounded text-white"
              key={index}
            >
              {tab.props?.title}
            </button>
          );
        })}
      </nav>
      {children[active]}
    </div>
  );
}

Tab.Panel = function ({ children }) {
  return <div>{children}</div>;
};
export default Tab;
