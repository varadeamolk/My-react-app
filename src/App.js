import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  let [title] = useState("API INTEGRATION");
  let [messageList, setMessageList] = useState([]);
  let [message, setMessage] = useState([]);

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

    let data = { message: message, messageTime: new Date() };
    await axios.post(url, data);

    getAllMessages(); // to refreash the content
  };

  useEffect(() => {
    // Spl Funcn :: Hook :: Like Constructor ::  Called while the Compoent is Initialized
    getAllMessages();
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <input
        type="text"
        placeholder="Enter Message"
        onChange={handleOnChangeMessage}
      />

      <input
        type="button"
        value="make ajax/post call"
        onClick={createMessage}
      />

      {messageList.map((item, index) => (
        <div key={index}>{item.message}</div>
      ))}
    </div>
  );
}

export default App;
