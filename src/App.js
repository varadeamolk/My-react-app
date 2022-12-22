import axios from "axios";
import { useEffect, useRef, useState } from "react";

function App() {
  let [title] = useState("API INTEGRATION");
  let [messageList, setMessageList] = useState([]);
  let [message, setMessage] = useState([]);
  let inputRef = useRef();

  let getAllMessages = async () => {
    let url = `http://localhost:3001/message`;
    let response = await axios.get(url);
    // console.log(response);
    // getting the messages from server
    messageList = [...response.data];
    // re-reendering data
    setMessageList(messageList);
  };

  let handleOnChangeMessage = (e) => {
    let message = e.target.value;

    setMessage(message);

    // or we can write this also  setMessage(e.target.value)
  };

  let createMessage = async () => {
    let url = `http://localhost:3001/messages`;

    // console.log(inputRef.current);
    if (!inputRef.current.checkValidity()) {
      alert("invalid message");
      return;
    }

    let data = { message: message, messageTime: new Date() };
    await axios.post(url, data);

    getAllMessages(); // to refresh the content
  };

  let checkEnterCode = (e) => {
    if (e.keyCode == 13) {
      createMessage();
    }
  };

  useEffect(() => {
    // Spl Funcn :: Hook :: Like Constructor ::  Called while the Compoent is Initialized
    getAllMessages();
  }, []);

  return (
    <div>
      <h1 className="bg-primary text-light fs-2 p-3">{title}</h1>
      <div className="d-flex ">
        <input
          className="form-control"
          type="text"
          placeholder="Enter Message"
          onChange={handleOnChangeMessage}
          onKeyUp={checkEnterCode}
          ref={inputRef}
          required
          minLength={3}
        />
        <input
          className="btn btn-primary btn-sm"
          type="button"
          value="make ajax/post call"
          onClick={createMessage}
        />
      </div>

      {messageList.map((item, index) => (
        <div key={index}>
          <div className="badge text-bg-primary opacity-75">
            {item.message}
            <span className="ms-4">
              {new Date(item.messageTime).getHours()}:
              {new Date(item.messageTime).getMinutes()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
