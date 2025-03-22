import { useState } from "react";
import "./App.css";
import Card from "./components/card";

let myData = {
  name: "Tushar",
  age: 25,
  gender: "Male",
  profession: "Senior Software Engineer",
  coreSkills: ["Angular", "Java", "JavaScript"],
};

function App() {
  let [counter, setCounter] = useState(0);
  const increase = () => {
    if (counter < 20) setCounter(++counter);
    else setCounter(20);
  };
  const decrease = () => {
    if (counter > 0) setCounter(--counter);
    else setCounter(0);
  };
  return (
    <>
      <h1 className="bg-zinc-700 text-white">First React Project</h1>
      <h2>Counter: {counter}</h2>

      <section>
        <button className="m-2" onClick={increase}>
          Increase Value
        </button>
        <button className="mt-2 m-2" onClick={decrease}>
          Decrease Value
        </button>
      </section>
      <Card data={myData} />
    </>
  );
}

export default App;
