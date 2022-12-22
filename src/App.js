import { useState } from "react";

function App() {
  let [list, setList] = useState(["mumbai", "pune", "nashik"]);

  return (
    <div>
      <h1>Map Demo</h1>

      {list.map((item) => (
        <div className="alert alert-primary text-dark">{item}</div>
      ))}
    </div>
  );
}

export default App;
