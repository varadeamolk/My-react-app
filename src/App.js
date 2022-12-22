import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  let [title] = useState("API INTEGRATION");
  let [messageList, setMessageList] = useState([]);

  let getAllMessages = async () => {
    let url = `http://localhost:3001/message`;
    let response = await axios.get(url);
    // console.log(response);
    // getting the messages from server
    messageList = [...response.data];
    // re-reendering data
    setMessageList(messageList);
  };

  let createMessage = async () => {
    let url = `http://localhost:3001/messages`;

    let data = { message: "Hello", messageTime: new Date() };
    let response = await axios.post(url, data);
  };

  useEffect(() => {
    // Spl Funcn :: Hook :: Like Constructor ::  Called while the Compoent is Initialized
    getAllMessages(); // To Refresh the content
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <input
        type="button"
        value="make ajax/API call"
        onClick={getAllMessages}
      />

      <input
        type="button"
        value="make ajax/post call"
        onClick={createMessage}
      />

      {messageList.map((item) => (
        <div>{item.message}</div>
      ))}
    </div>
  );
}

export default App;
