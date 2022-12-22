import { useState } from "react";

function App() {
  let [list] = useState([
    { message: "Hello", messageTime: new Date() },
    { message: "Hi", messageTime: new Date() },
    { message: "How are you", messageTime: new Date() },
    { message: "I am fine", messageTime: new Date() },
  ]);

  return (
    <div>
      <h1 className="bg-primary text-light p-2 fs-2 ">Map Demo</h1>

      {list.map((item, index) => (
        <div key={index}>
          <div className="badge text-bg-primary ">
            <div>
              {item.message}
              <span className="ms-5">
                {item.messageTime.getUTCHours()}:{item.messageTime.getMinutes()}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
