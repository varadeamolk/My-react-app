import { useState } from "react";

function App() {
  let [message, setMessage] = useState("Hello");

  let updateMessage = (e) => {
    // e.target.value=document.querySelector("input")
    console.log(e.target.value);

    setMessage(e.target.value);
  };
  return (
    <div>
      <h1>Working with input</h1>

      <input
        type="text"
        placeholder="Enter message"
        value={message}
        onChange={updateMessage} // this line is very important
      />

      <h1>{message}</h1>
    </div>
  );
}

export default App;
