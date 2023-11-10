import { useState } from "react";
import Tab from "./components/Tab";
import "./tailwind.css";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Customers from "./Customers";

function App() {
  const [active, setActive] = useState(0);
  return (
    <div className="p-4 pb-12 bg-pink-100 h-full">
      <h1 className="text-5xl text-center text-pink-500 font-black">Tabs</h1>
      <div className="flex justify-center">
        <Tab active={active} setActive={setActive}>
          <Tab.Panel title="Home page">
            <Home />
          </Tab.Panel>
          <Tab.Panel title="About page">
            <About />
          </Tab.Panel>
          <Tab.Panel title="Products page">
            <Products />
          </Tab.Panel>
          <Tab.Panel title="Contact page">
            <Contact />
          </Tab.Panel>
          <Tab.Panel title="Customers page">
            <Customers />
          </Tab.Panel>
        </Tab>
      </div>
    </div>
  );
}

export default App;
