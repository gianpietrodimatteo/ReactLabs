import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function ListItem({ item }) {
  return (
    <li className="list-item">
      <p>
        <strong>{item.name + ": "}</strong>
        {item.description}
      </p>
      <button>🗑️</button>
    </li>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Do dishes",
      description: "Use the soap, luke",
    },
    {
      id: 2,
      name: "Be happy",
      description: "Eat cereal",
    },
  ]);

  return (
    <>
      <div>
        <h1>Gian's Task Manager</h1>
        <ol>
          {tasks.map((item) => (
            <ListItem item={item} key={item.id}></ListItem>
          ))}
        </ol>
        <button onClick= {()=> tasks.}>add</button>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
