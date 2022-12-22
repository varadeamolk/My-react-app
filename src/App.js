import { useState } from "react";

function App() {
  let [message, setMessage] = useState("");
  let [list, setList] = useState([
    { message: "Hello", messageTime: new Date() },
    { message: "Hi", messageTime: new Date() },
    { message: "How are you", messageTime: new Date() },
    { message: "I am fine", messageTime: new Date() },
  ]);

  // member function

  let updateMessage = (e) => {
    let message = e.target.value;

    setMessage(message);
  };

  let addMessage = () => {
    let newMessage = { message: message, messageTime: new Date() };
    list = [newMessage, ...list];

    setList(list);
  };

  return (
    <div>
      <h1 className="bg-primary text-light p-2 fs-2 ">Messaging Demo</h1>
      <div className="d-flex">
        <input
          className="form-control me-2"
          type="text"
          value={message}
          placeholder="Enter message"
          onChange={updateMessage}
        />
        <input
          className="btn btn-primary btn-sm"
          type="button"
          value="Add Message"
          onClick={addMessage}
        />
      </div>

      {list.map((item, index) => (
        <div key={index}>
          <div className="badge text-bg-primary ">
            <div>
              {item.message}
              <span className="ms-5">
                {item.messageTime.getHours()}:{item.messageTime.getMinutes()}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
