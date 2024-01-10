import { useState } from "react";
import reactLogo from "./assets/react.svg";
import i18nextLogo from "./assets/i18next-logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-8 h-8" alt="React logo" />
        </a>
        <a href="https://i18next.com" target="_blank">
          <img src={i18nextLogo} className="w-8 h-8" alt="i18next logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
