import { useEffect, useState } from "react";

function Tab({ children, activeTab, setActiveTab, onChange }) {
  const [active, setActive] = useState(activeTab);
  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);
  useEffect(() => {
    onChange(active);
  }, [active]);
  return (
    <div>
      <nav>
        {children.map((tab, index) => (
          <button
            onClick={() => setActiveTab(index)}
            className={active === index ? "bg-green-100" : "bg-gray-100"}
            key={index}
          >
            {tab.props.title}
          </button>
        ))}
      </nav>
      {children[active]}
    </div>
  );
}

Tab.Panel = function ({ children, title }) {
  // console.log(props);
  return <div>{children}</div>;
};
export default Tab;
